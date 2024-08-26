<script setup>
import { ref } from 'vue'
import ContainerCenter from '@/Components/ContainerCenter.vue'
import AuthenticationLogo from '@/Components/Authentication/Logo.vue'
import AuthenticationCard from '@/Components/Authentication/Card.vue'
import AuthenticationStatus from '@/Components/Authentication/Status.vue'
import FormInputGroup from '@/Components/Form/Input/Group.vue'
import FormSelectGroup from '@/Components/Form/Select/Group.vue'
// import FormTosConsent from '@/Components/Form/TosConsent.vue'
import UIButton from '@/Components/UI/Button.vue'
import { Icon } from '@iconify/vue'
import UILoadingSpinner from '@/Components/UI/Loading/Spinner.vue'
import { useForm, router } from '@inertiajs/vue3'

const props = defineProps({
    genders: {
        type: Object
    }
})

const form = useForm({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    phone: '',
    gender: '',

});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};

// const checkUsername = () => {
//     router.post(route('check-username'), { username: form.username }, {
//         onError: errors => { form.reset('username_success'); form.errors.username = errors.username },
//         onSuccess: page => { form.errors.username = ''; form.username_success = page.props.flash.message }
//     })
// }
</script>
<template>
    <UIHead v-bind:title="$t('register.register')" v-bind:description="$t('register.register')" />
    <ContainerCenter class="px-6 py-8 md:h-screen lg:py-0 dark:bg-gray-900">
        <AuthenticationLogo class="size-24 md:size-32" />
        <form v-on:submit.prevent="submit">
            <AuthenticationCard class="!max-w-xl rounded-b-none">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1
                        class="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white">
                        {{ $t('register.title') }}
                    </h1>

                    <!-- <template v-if="$page.props.flash.status">
                        <AuthenticationStatus :status="$page.props.flash.status" />
                    </template> -->

                    <div class="space-y-4 md:space-y-6">
                        <div class="grid grid-cols-6 gap-6">
                            <div class="col-span-6 sm:col-span-3">
                                <!-- First Name -->
                                <FormInputGroup v-bind:label="$t('register.first_name')"
                                    v-bind:hint="$t('register.first_name_hint')"
                                    v-bind:placeholder="$t('register.first_name_placeholder')" type="text"
                                    identifier="first_name" v-model="form.first_name" v-bind:formIsDirty="form.isDirty"
                                    v-bind:error="form.errors.first_name" required autofocus autocomplete="first-name">
                                    <template #prefix>
                                        <Icon icon="tabler:user"
                                            class="w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500" />
                                    </template>
                                </FormInputGroup>
                            </div>
                            <div class="col-span-6 sm:col-span-3">
                                <!-- Last Name -->
                                <FormInputGroup v-bind:label="$t('register.last_name')"
                                    v-bind:hint="$t('register.last_name_hint')"
                                    v-bind:placeholder="$t('register.last_name_placeholder')" type="text"
                                    identifier="last_name" v-model="form.last_name" v-bind:formIsDirty="form.isDirty"
                                    v-bind:error="form.errors.last_name" autocomplete="last-name">
                                    <template #prefix>
                                        <Icon icon="tabler:user"
                                            class="w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500" />
                                    </template>
                                </FormInputGroup>
                            </div>
                            <div class="col-span-6">
                                <!-- Username -->
                                <FormInputGroup v-bind:label="$t('register.username')"
                                    v-bind:hint="$t('register.username_hint')" identifier="username" type="text"
                                    v-bind:placeholder="$t('register.username_placeholder')" v-model="form.username"
                                    v-bind:formIsDirty="form.isDirty" v-bind:error="form.errors.username" required
                                    autocomplete="username">
                                    <template #prefix>
                                        <Icon icon="tabler:user"
                                            class="w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500" />
                                    </template>
                                </FormInputGroup>
                            </div>
                            <div class="col-span-6 sm:col-span-3">
                                <!-- Phone -->
                                <FormInputGroup v-bind:label="$t('register.phone')"
                                    v-bind:hint="$t('register.phone_hint')"
                                    v-bind:placeholder="$t('register.phone_placeholder')" type="number"
                                    identifier="phone" name="phone" v-model="form.phone"
                                    v-bind:formIsDirty="form.isDirty" v-bind:error="form.errors.phone"
                                    autocomplete="phone">
                                    <template #prefix>
                                        <Icon icon="tabler:phone"
                                            class="w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500" />
                                    </template>
                                </FormInputGroup>
                            </div>
                            <div class="col-span-6 sm:col-span-3">
                                <!-- Gender -->
                                <FormSelectGroup v-bind:label="$t('register.gender')"
                                    v-bind:hint="$t('register.gender_hint')" identifier="gender" v-model="form.gender"
                                    v-bind:formIsDirty="form.isDirty" v-bind:error="form.errors.gender"
                                    class="tracking-widest uppercase">
                                    <option value="" selected disabled v-text="$t('register.select_your_gender')">
                                    </option>
                                    <template v-for="gender, index in genders" v-bind:key="index">
                                        <option v-bind:value="gender.value" v-text="gender.label"></option>
                                    </template>
                                </FormSelectGroup>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticationCard>
            <AuthenticationCard class="!max-w-xl rounded-t-none rounded-b-none border-t">
                <div class="p-6 space-y-4 md:space-y-6">
                    <div class="grid grid-cols-6 gap-6">
                        <div class="col-span-6">
                            <!-- Email -->
                            <FormInputGroup v-bind:label="$t('register.email')" v-bind:hint="$t('register.email_hint')"
                                identifier="email" type="email" v-bind:placeholder="$t('register.email_placeholder')"
                                v-model="form.email" v-bind:formIsDirty="form.isDirty" v-bind:error="form.errors.email"
                                required autocomplete="username">
                                <template #prefix>
                                    <Icon icon="tabler:mail"
                                        class="w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500" />
                                </template>
                            </FormInputGroup>
                        </div>
                        <div class="col-span-6 sm:col-span-3">
                            <!-- Password -->
                            <FormInputGroup v-bind:label="$t('register.password')"
                                v-bind:hint="$t('register.password_hint')" type="password" identifier="password"
                                v-model="form.password" v-bind:formIsDirty="form.isDirty"
                                v-bind:error="form.errors.password" required autocomplete="new-password">
                                <template #prefix>
                                    <Icon icon="tabler:key"
                                        class="w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500" />
                                </template>
                            </FormInputGroup>
                        </div>
                        <div class="col-span-6 sm:col-span-3">
                            <!-- Password Confirmation -->
                            <FormInputGroup v-bind:label="$t('register.password_confirmation')"
                                v-bind:hint="$t('register.password_confirmation_hint')" type="password"
                                identifier="password_confirmation" v-model="form.password_confirmation"
                                v-bind:formIsDirty="form.isDirty" v-bind:error="form.errors.password_confirmation"
                                required autocomplete="new-password">
                                <template #prefix>
                                    <Icon icon="tabler:key"
                                        class="w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500" />
                                </template>
                            </FormInputGroup>
                        </div>
                    </div>
                </div>
            </AuthenticationCard>
            <AuthenticationCard class="!max-w-xl rounded-t-none border-t">
                <div class="p-6 space-y-4 md:space-y-6">
                    <div class="col-span-6">
                        <!-- Submit -->
                        <UIButton as="button" type="primary" rounded="lg" v-bind:submit="true" class="w-full"
                            v-bind:disabled="form.processing">
                            <Icon icon="tabler:user-plus" class="mr-2 size-5" v-show="!form.processing" />
                            <UILoadingSpinner class="mr-2" size="sm" v-show="form.processing" />
                            <span class="truncate">{{ $t('register.register') }}</span>
                        </UIButton>
                    </div>
                </div>
            </AuthenticationCard>
        </form>
        <!-- Login Link -->
        <p class="mt-4 text-sm font-light text-gray-500 dark:text-gray-400">
            {{ $t('register.login_prefix') }}
            <Link v-bind:href="route('auth.login')"
                class="font-medium text-primary-600 hover:underline dark:text-primary-500">
            {{ $t('register.login') }}</Link>
        </p>
    </ContainerCenter>
</template>
