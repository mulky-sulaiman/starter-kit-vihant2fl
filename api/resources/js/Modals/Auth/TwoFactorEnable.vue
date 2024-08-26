<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue'
import UIModalStaticPopUp from '@/Components/UI/Modal/Static/PopUp.vue'
import UIModalTemplatePopUp from '@/Components/UI/Modal/Template/PopUp.vue'
import UIModalStaticDrawer from '@/Components/UI/Modal/Static/Drawer.vue'
import UIModalTemplateDrawer from '@/Components/UI/Modal/Template/Drawer.vue'
import UIButton from '@/Components/UI/Button.vue'
import { Icon } from '@iconify/vue'
import { useModal } from 'momentum-modal'
import { usePage, router, useForm } from '@inertiajs/vue3'
import UILoadingSpinner from '@/Components/UI/Loading/Spinner.vue'
import { useToastStore } from '@/stores/useToastStore'
import axios from 'axios'
import FormPinGroup from '@/Components/Form/Pin/Group.vue'


const toast = useToastStore()

const emit = defineEmits(['close'])

const page = usePage()

const mode = page.props.config['auth.mode']


const form = useForm({
    code: ''
})


const submit = () => {
    form.post(route('two-factor.confirm'), {
        onSuccess: () => {
            toast.add({
                type: 'info',
                message: 'Two Factor Authentication has been successfully enabled',
                autodismiss: true,
            })
            router.get(route('dashboard.account.security'), {
                onSuccess: page => {
                    toast.add({
                        type: 'info',
                        message: 'Two Factor Authentication has been successfully enabled',
                        autodismiss: true,
                    })
                }
            })
        }
    })
}


const handleClose = () => {
    emit('close')
    router.get(page.props.previous['url'])
}

const { show, close, redirect } = useModal()

defineOptions({
    // layout: false
})

const qrCode = ref('')


onMounted(() => {
    axios.get(route('two-factor.qr-code')).then((response) => {
        qrCode.value = response.data.svg
    }).catch((e) => {
        if (e.response.status === 423) {
            router.get(route('password.confirm'))
        }
    })
})

</script>
<template>
    <UIHead v-bind:title="$t('global.two_factor_enable')" v-bind:description="$t('global.two_factor_enable')" />
    <UIModalStaticPopUp v-bind:show="show" maxWidth="lg" v-on:close="close" v-if="mode === 'modal'">
        <form class="space-y-4 md:space-y-6" v-on:submit.prevent="submit">
            <UIModalTemplatePopUp v-bind:title="$t('global.two_factor_enable')" v-on:close-proxy="handleClose"
                class="!p-0 md:!p-0">

                <div class="items-center justify-center p-4 space-y-4 text-center md:p-6 md:space-y-6">
                    <p>Scan the following QR code using your phone's
                        authenticator application to enable two factor authentication.</p>
                    <div v-html="qrCode" class="flex items-center justify-center mx-auto"></div>
                    <FormPinGroup identifier="code" label="Code" alignment="center" v-bind:formIsDirty="form.isDirty"
                        v-bind:error="form.errors.confirmTwoFactorAuthentication?.code"
                        hint="Enter the code given from the authenticator app" required v-model="form.code" />
                </div>

                <template #footer>
                    <span class="w-full">
                        <UIButton as="button" type="primary" rounded="lg" v-bind:submit="true" class="w-full"
                            v-bind:disabled="form.processing">
                            <Icon icon="tabler:lock-open" class="mr-2 size-5" v-show="!form.processing" />
                            <UILoadingSpinner class="mr-2" size="sm" v-show="form.processing" />
                            <span class="truncate">{{ $t('global.confirm') }}</span>
                        </UIButton>
                    </span>
                </template>
            </UIModalTemplatePopUp>
        </form>
    </UIModalStaticPopUp>
    <UIModalStaticDrawer v-bind:show="show" placement="right" extraWidth="20" v-on:close="close"
        v-if="mode === 'drawer'">
        <form class="space-y-4 md:space-y-6" v-on:submit.prevent="submit">
            <UIModalTemplateDrawer v-bind:title="`Setup Two Factor Authentication`" v-on:close-proxy="handleClose"
                placement="right" class="!p-0 md:!p-0">
                <div class="items-center justify-center p-4 space-y-4 text-center md:p-6 md:space-y-6">
                    <p>Scan the following QR code using your phone's
                        authenticator application to enable two factor authentication.</p>
                    <div v-html="qrCode" class="flex items-center justify-center mx-auto"></div>
                    <FormPinGroup identifier="code" label="Code" alignment="center" v-bind:formIsDirty="form.isDirty"
                        v-bind:error="form.errors.confirmTwoFactorAuthentication?.code"
                        hint="Enter the code given from the authenticator app" required v-model="form.code" />
                </div>
                <template #footer>
                    <span class="w-full">
                        <UIButton as="button" type="primary" rounded="lg" v-bind:submit="true" class="w-full"
                            v-bind:disabled="form.processing">
                            <Icon icon="tabler:lock-open" class="mr-2 size-5" v-show="!form.processing" />
                            <UILoadingSpinner class="mr-2" size="sm" v-show="form.processing" />
                            <span class="truncate">{{ $t('global.confirm') }}</span>
                        </UIButton>
                    </span>
                </template>
            </UIModalTemplateDrawer>
        </form>
    </UIModalStaticDrawer>
</template>
