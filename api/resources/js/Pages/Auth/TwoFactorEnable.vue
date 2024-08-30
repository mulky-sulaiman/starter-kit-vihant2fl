<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import ContainerCenter from '@/Components/ContainerCenter.vue'
import AuthenticationLogo from '@/Components/Authentication/Logo.vue'
import AuthenticationCard from '@/Components/Authentication/Card.vue'
import UIButton from '@/Components/UI/Button.vue'
import { Icon } from '@iconify/vue'
import { usePage, router, useForm } from '@inertiajs/vue3'
import UILoadingSpinner from '@/Components/UI/Loading/Spinner.vue'
import { useToastStore } from '@/stores/useToastStore'
import axios from 'axios'
import FormPinGroup from '@/Components/Form/Pin/Group.vue'


const toast = useToastStore()

const page = usePage()

const form = useForm({
    code: ''
})


const submit = () => {
    form.post(route('two-factor.confirm'), {
        onSuccess: () => {
            Promise.all([
                router.get(route('dashboard.account.security')),
                toast.add({
                    type: 'info',
                    message: 'Two Factor Authentication has been successfully enabled',
                    autodismiss: true,
                })
            ])

        }
    })
}

const qrCode = ref('')

const setupKey = ref('')

const showQrCode = () => {
    axios.get(route('two-factor.qr-code')).then((response) => {
        qrCode.value = response.data.svg
    }).catch((e) => {
        if (e.response.status === 423) {
            router.get(route('password.confirm'))
        }
    })
}

const showSetupKey = () => {
    axios.get(route('two-factor.secret-key')).then(response => {
        setupKey.value = response.data.secretKey;
    })
}

onMounted(() => {
    showQrCode()
    showSetupKey()
})

</script>
<template>
    <UIHead v-bind:title="$t('global.two_factor_enable')" v-bind:description="$t('global.two_factor_enable')" />
    <ContainerCenter class="px-6 py-8 md:h-screen lg:py-0 dark:bg-gray-900">
        <AuthenticationLogo class="size-24 md:size-32" />
        <AuthenticationCard>
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1
                    class="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white">
                    {{ $t('global.two_factor_enable') }}
                </h1>
                <form class="space-y-4 md:space-y-6" v-on:submit.prevent="submit">
                    <div class="items-center justify-center p-4 space-y-4 text-center md:p-6 md:space-y-6">
                        <p>Scan the following QR code using your phone's
                            authenticator application to enable two factor authentication.</p>
                        <div v-html="qrCode" class="flex items-center justify-center mx-auto"></div>
                        <p class="text-sm text-gray-500 dark:text-gray-400">Setup Key: <span class="font-semibold"
                                v-text="setupKey"></span>
                        </p>
                        <FormPinGroup identifier="code" label="Code" alignment="center"
                            v-bind:formIsDirty="form.isDirty"
                            v-bind:error="form.errors.confirmTwoFactorAuthentication?.code"
                            hint="Enter the code given from the authenticator app" required v-model="form.code" />
                    </div>
                    <!-- Submit -->
                    <UIButton as="button" type="primary" rounded="lg" v-bind:submit="true" class="w-full"
                        :disabled="form.processing">
                        <Icon icon="tabler:lock-open" class="mr-2 size-5" v-show="!form.processing" />
                        <UILoadingSpinner class="mr-2" size="sm" v-show="form.processing" />
                        <span class="truncate">{{ $t('global.confirm') }}</span>
                    </UIButton>
                </form>
            </div>
        </AuthenticationCard>
    </ContainerCenter>
</template>
