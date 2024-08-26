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
import { useForm, usePage } from '@inertiajs/vue3';

defineProps({
    canResetPassword: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const show = ref(false)

const page = usePage()


const form = useForm({
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('password.confirm'), {
        onFinish: () => {
            // form.reset('password')
        },
        onSuccess: () => {

        }
    });
};
</script>

<template>
    <UIHead v-bind:title="$t('global.confirm_password')" v-bind:description="$t('global.confirm_password')" />
    <ContainerCenter class="px-6 py-8 md:h-screen lg:py-0 dark:bg-gray-900">
        <AuthenticationLogo class="size-24 md:size-32" />
        <AuthenticationCard>
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1
                    class="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white">
                    {{ $t('global.confirm_password') }}
                </h1>
                <template v-if="status">
                    <AuthenticationStatus v-bind:status="status" />
                </template>
                <form class="space-y-4 md:space-y-6" v-on:submit.prevent="submit">
                    <!-- Password -->
                    <div>
                        <FormInputGroup identifier="password" type="password" label="Password" v-model="form.password"
                            required autofocus autocomplete="current-password" v-bind:formIsDirty="form.isDirty"
                            v-bind:error="form.errors.password" v-bind:hint="$t('login.password_hint')">
                            <template #prefix>
                                <Icon icon="tabler:key"
                                    class="w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500" />
                            </template>
                        </FormInputGroup>
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
        <!-- Back to Home Link -->
        <p class="mt-4 text-sm font-light text-gray-500 dark:text-gray-400">
            {{ $t('login.register_prefix') }}
            <Link v-bind:href="route('home')"
                class="font-medium text-primary-600 hover:underline dark:text-primary-500">
            {{ $t('global.home') }}</Link>
        </p>
    </ContainerCenter>
</template>
