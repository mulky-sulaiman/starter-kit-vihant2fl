<script lang="ts" setup>
import { ref } from 'vue'
import ContainerCenter from '@/Components/ContainerCenter.vue'
import AuthenticationLogo from '@/Components/Authentication/Logo.vue'
import AuthenticationCard from '@/Components/Authentication/Card.vue'
import AuthenticationStatus from '@/Components/Authentication/Status.vue'
import FormInputGroup from '@/Components/Form/Input/Group.vue'
import FormCheckboxGroup from '@/Components/Form/Checkbox/Group.vue'
import UIButton from '@/Components/UI/Button.vue'
import { Icon } from '@iconify/vue'
import UILoadingSpinner from '@/Components/UI/Loading/Spinner.vue'
import { useForm, usePage } from '@inertiajs/vue3'
import FormPinGroup from '@/Components/Form/Pin/Group.vue'


defineProps({
    canResetPassword: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const showCode = ref(true)
const toggleShowCode = () => {
    showCode.value = !showCode.value
}


const page = usePage()


const form = useForm({
    code: '',
    recovery_code: ''
});

const submit = () => {
    form.post(route('two-factor.login'), {
        onFinish: () => {
            if (showCode.value) {
                form.reset('recovery_code')
            } else {
                form.reset('code')
            }
        },
        onSuccess: () => {

        }
    });
};
</script>

<template>
    <UIHead v-bind:title="$t('global.two_factor_challenge')" v-bind:description="$t('global.two_factor_challenge')" />
    <ContainerCenter class="px-6 py-8 md:h-screen lg:py-0 dark:bg-gray-900">
        <AuthenticationLogo class="size-24 md:size-32" />
        <AuthenticationCard>
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1
                    class="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white">
                    {{ $t('global.two_factor_challenge') }}
                </h1>
                <template v-if="status">
                    <AuthenticationStatus v-bind:status="status" />
                </template>
                <form class="space-y-4 md:space-y-6" v-on:submit.prevent="submit">
                    <!-- Code -->
                    <div v-if="showCode">
                        <FormPinGroup identifier="code" label="Code" alignment="center"
                            v-bind:formIsDirty="form.isDirty" v-bind:error="form.errors.code"
                            hint="Enter the code given from the authenticator app" required v-model="form.code" />
                    </div>

                    <!-- Recovery Code -->
                    <div v-if="!showCode">
                        <FormInputGroup identifier="recovery_code" type="text" label="Recovery Code"
                            v-model="form.recovery_code" required autofocus autocomplete="one-time-code"
                            v-bind:formIsDirty="form.isDirty" v-bind:error="form.errors.recovery_code"
                            v-bind:hint="$t('login.password_hint')">
                            <template #prefix>
                                <Icon icon="tabler:key"
                                    class="w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500" />
                            </template>
                        </FormInputGroup>
                    </div>
                    <div></div>
                    <!-- Toggle -->
                    <a href="#" class="text-sm font-light text-gray-500 dark:text-gray-400"
                        v-on:click.prevent="toggleShowCode"
                        v-text="showCode ? 'Use Recovery Code Instead' : 'Use Authenticator Code Instead'"></a>

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
        <!-- Back to Home Link -->
        <p class="mt-4 text-sm font-light text-gray-500 dark:text-gray-400">
            {{ $t('login.register_prefix') }}
            <Link v-bind:href="route('home')"
                class="font-medium text-primary-600 hover:underline dark:text-primary-500">
            {{ $t('global.home') }}</Link>
        </p>
    </ContainerCenter>
</template>
