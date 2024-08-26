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

const props = defineProps({
    token: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    }
});

const show = ref(false)

const page = usePage()


const form = useForm({
    email: props.email,
    token: props.token,
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('password.update'), {
        onFinish: () => {
            // form.reset('password')
        },
        onSuccess: () => {

        }
    });
};
</script>

<template>
    <UIHead v-bind:title="$t('global.change_password')" v-bind:description="$t('global.change_password')" />
    <ContainerCenter class="px-6 py-8 md:h-screen lg:py-0 dark:bg-gray-900">
        <AuthenticationLogo class="size-24 md:size-32" />
        <AuthenticationCard>
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1
                    class="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white">
                    {{ $t('global.change_password') }}
                </h1>
                <template v-if="status">
                    <AuthenticationStatus v-bind:status="status" />
                </template>
                <form class="space-y-4 md:space-y-6" v-on:submit.prevent="submit">
                    <!-- Email -->
                    <div>
                        <FormInputGroup v-bind:label="$t('register.email')" v-bind:hint="$t('register.email_hint')"
                            identifier="email" type="email" v-bind:placeholder="$t('register.email_placeholder')"
                            v-bind:value="form.email" required disabled readonly autocomplete="username">
                            <template #prefix>
                                <Icon icon="tabler:mail"
                                    class="w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500" />
                            </template>
                        </FormInputGroup>
                    </div>
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
                    <!-- Password Confirmation-->
                    <div>
                        <FormInputGroup v-bind:label="$t('register.password_confirmation')"
                            v-bind:hint="$t('register.password_confirmation_hint')" type="password"
                            identifier="password_confirmation" v-model="form.password_confirmation"
                            v-bind:formIsDirty="form.isDirty" v-bind:error="form.errors.password_confirmation" required
                            autocomplete="new-password">
                            <template #prefix>
                                <Icon icon="tabler:key"
                                    class="w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500" />
                            </template>
                        </FormInputGroup>
                    </div>

                    <!-- Submit -->
                    <UIButton as="button" type="primary" rounded="lg" v-bind:submit="true" class="w-full"
                        :disabled="form.processing">
                        <Icon icon="tabler:shield-lock" class="mr-2 size-5" v-show="!form.processing" />
                        <UILoadingSpinner class="mr-2" size="sm" v-show="form.processing" />
                        <span class="truncate">{{ $t('global.change') }}</span>
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
