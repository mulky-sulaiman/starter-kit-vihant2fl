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
    login: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => {
            form.reset('password')
        }
    });
};
</script>

<template>
    <UIHead v-bind:title="$t('login.login')" v-bind:description="$t('login.login')" />
    <ContainerCenter class="px-6 py-8 md:h-screen lg:py-0 dark:bg-gray-900">
        <AuthenticationLogo class="size-24 md:size-32" />
        <AuthenticationCard>
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1
                    class="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white">
                    {{ $t('login.title') }}
                </h1>
                <template v-if="status">
                    <AuthenticationStatus v-bind:status="status" />
                </template>
                <form class="space-y-4 md:space-y-6" v-on:submit.prevent="submit">
                    <!-- Email / Username / Phone -->
                    <div>
                        <FormInputGroup ref="inpit" v-bind:label="$t('Email / Username / Mobile Phone')"
                            identifier="login" type="text" v-bind:placeholder="$t('login.email_placeholder')"
                            v-model="form.login" required autofocus autocomplete="username"
                            v-bind:formIsDirty="form.isDirty" v-bind:error="form.errors.login">
                            <template #prefix>
                                <Icon icon="tabler:user-circle"
                                    class="w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500" />
                            </template>
                            <template #hint>
                                <Transition :duration="{ enter: 1000, leave: 500 }">
                                    <div>
                                        <p class="flex items-center my-2 font-semibold" v-on:click="show = !show"
                                            role="button">
                                            <span>{{ $t('Acceptable Input Values') }}</span>
                                            <Icon icon="tabler:chevron-up" class="size-4 ms-2" v-show="show" />
                                            <Icon icon="tabler:chevron-down" class="size-4 ms-2" v-show="!show" />
                                        </p>
                                        <ul v-show="show"
                                            class="max-w-md p-4 space-y-1 list-disc list-inside border rounded-lg text-info-500 bg-info-100 dark:text-info-400 dark:bg-info-50">
                                            <li>
                                                <strong class="font-semibold">{{ $t('Email') }}</strong> :
                                                {{ $t('Any valid email formatted address (your.name@domain.com) ') }}
                                            </li>
                                            <li>
                                                <strong class="font-semibold">{{ $t('Username') }}</strong> :
                                                Can only contains alphabetical (case-sensitive), numbers, and limited
                                                special characters of dash(-), underscore(_), or dot(.)
                                            </li>
                                            <li>
                                                <strong class="font-semibold">{{ $t('Mobile Phone') }}</strong> :
                                                Can only contains number format, not any alphabetical or characters are
                                                allowed.zero leading is accepted
                                            </li>
                                        </ul>
                                    </div>
                                </Transition>
                            </template>
                        </FormInputGroup>
                    </div>
                    <!-- Password -->
                    <div>
                        <FormInputGroup identifier="password" type="password" label="Password" v-model="form.password"
                            required autocomplete="current-password" v-bind:formIsDirty="form.isDirty"
                            v-bind:error="form.errors.password" v-bind:hint="$t('login.password_hint')">
                            <template #prefix>
                                <Icon icon="tabler:key"
                                    class="w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500" />
                            </template>
                        </FormInputGroup>
                    </div>
                    <!-- Remember Me - Forgot Password Link-->
                    <div class="flex items-center justify-between">
                        <FormCheckboxGroup identifier="remember" v-model="form.remember"
                            v-bind:label="$t('login.remember_me')" v-bind:formIsDirty="form.isDirty"
                            v-bind:useMessage="false" />
                        <Link v-if="$page.props.features['reset-passwords']"
                            class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                            v-bind:href="route('auth.recover')">{{ $t('login.forgot_password') }}</Link>
                    </div>
                    <!-- Submit -->
                    <UIButton as="button" type="primary" rounded="lg" v-bind:submit="true" class="w-full"
                        :disabled="form.processing">
                        <Icon icon="tabler:login-2" class="mr-2 size-5" v-show="!form.processing" />
                        <UILoadingSpinner class="mr-2" size="sm" v-show="form.processing" />
                        <span class="truncate">{{ $t('login.login') }}</span>
                    </UIButton>
                </form>
            </div>
        </AuthenticationCard>
        <template v-if="$page.props.features.registration">
            <!-- Register Link -->
            <p class="mt-4 text-sm font-light text-gray-500 dark:text-gray-400">
                {{ $t('login.register_prefix') }}
                <Link :href="route('auth.register')"
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500">
                {{ $t('login.register') }}</Link>
            </p>
        </template>
    </ContainerCenter>
</template>
