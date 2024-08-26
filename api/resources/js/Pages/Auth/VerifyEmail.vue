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


const form = useForm({})

const submit = () => {
    form.post(route('verification.send'), {
        onFinish: () => {
            // form.reset('password')
        },
        onSuccess: () => {

        }
    });
};
</script>

<template>
    <UIHead v-bind:title="$t('global.verify_email')" v-bind:description="$t('global.verify_email')" />
    <ContainerCenter class="px-6 py-8 md:h-screen lg:py-0 dark:bg-gray-900">
        <AuthenticationLogo class="size-24 md:size-32" />
        <AuthenticationCard>
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1
                    class="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white">
                    {{ $t('global.verify_email') }}
                </h1>
                <template v-if="status">
                    <AuthenticationStatus v-bind:status="status" />
                </template>
                <p>Thanks for signing up! Before getting started, could you verify your email address by clicking on the
                    link we just
                    emailed to you? If you didn't receive the email, we will gladly send you another.</p>
                <form class="space-y-4 md:space-y-6" v-on:submit.prevent="submit">
                    <!-- Submit -->
                    <UIButton as="button" type="primary" rounded="lg" v-bind:submit="true" class="w-full"
                        :disabled="form.processing">
                        <Icon icon="tabler:mail" class="mr-2 size-5" v-show="!form.processing" />
                        <UILoadingSpinner class="mr-2" size="sm" v-show="form.processing" />
                        <span class="truncate">{{ $t('global.send_verification_link') }}</span>
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
