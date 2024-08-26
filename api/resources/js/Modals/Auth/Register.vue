<script lang="ts" setup>
import { ref } from 'vue'
import UIModalStaticPopUp from '@/Components/UI/Modal/Static/PopUp.vue'
import UIModalTemplatePopUp from '@/Components/UI/Modal/Template/PopUp.vue'
import UIModalStaticDrawer from '@/Components/UI/Modal/Static/Drawer.vue'
import UIModalTemplateDrawer from '@/Components/UI/Modal/Template/Drawer.vue'
import UIButton from '@/Components/UI/Button.vue'
import { Icon } from '@iconify/vue'
import { useModal } from 'momentum-modal'
import FormInputGroup from '@/Components/Form/Input/Group.vue'
import FormSelectGroup from '@/Components/Form/Select/Group.vue'
import UILoadingSpinner from '@/Components/UI/Loading/Spinner.vue'
import { usePage, useForm, router } from '@inertiajs/vue3'

const emit = defineEmits(['close'])

const props = defineProps({
    genders: {
        type: Object
    }
})

const page = usePage()

const mode = page.props.config['auth.mode']

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
    console.log(form)
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};

const handleClose = () => {
    emit('close')
    router.get(page.props.previous['url'])
}

const { show, close, redirect } = useModal()

defineOptions({
    // layout: false
})
</script>
<template>
    <UIHead v-bind:title="$t('register.register')" v-bind:description="$t('register.register')" />
    <UIModalStaticPopUp v-bind:show="show" maxWidth="xl" v-on:close="close" v-if="mode === 'modal'">
        <form v-on:submit.prevent="submit">
            <UIModalTemplatePopUp v-bind:title="$t('register.register')" v-on:close-proxy="handleClose"
                class="!p-0 md:!p-0">
                <div class="p-6 space-y-4 border-b dark:border-gray-600 md:space-y-6 sm:p-8">
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
                <div class="p-6 space-y-4 border-b dark:border-gray-600 md:space-y-6 sm:p-8">
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
                <div class="pb-4">
                    <!-- Login Link -->
                    <p
                        class="flex items-center justify-center gap-2 text-sm font-light text-gray-500 dark:text-gray-400">
                        {{ $t('register.login_prefix') }}
                        <Link v-bind:href="route('auth.login')"
                            class="font-medium text-primary-600 hover:underline dark:text-primary-500">
                        {{ $t('register.login') }}</Link>
                    </p>
                </div>
                <template #footer>
                    <span class="w-full">
                        <!-- Submit -->
                        <UIButton as="button" type="primary" rounded="lg" v-bind:submit="true" class="w-full"
                            v-bind:disabled="form.processing">
                            <Icon icon="tabler:user-plus" class="mr-2 size-5" v-show="!form.processing" />
                            <UILoadingSpinner class="mr-2" size="sm" v-show="form.processing" />
                            <span class="truncate">{{ $t('register.register') }}</span>
                        </UIButton>
                    </span>
                </template>
            </UIModalTemplatePopUp>
        </form>
    </UIModalStaticPopUp>
    <UIModalStaticDrawer v-bind:show="show" placement="right" extraWidth="20" v-on:close="close"
        v-if="mode === 'drawer'">
        <form v-on:submit.prevent="submit">
            <UIModalTemplateDrawer v-bind:title="$t('register.register')" v-on:close-proxy="handleClose"
                placement="right" class="!p-0 md:!p-0">
                <div class="p-6 space-y-4 border-b dark:border-gray-600 md:space-y-6 sm:p-8">
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
                <div class="p-6 space-y-4 border-b dark:border-gray-600 md:space-y-6 sm:p-8">
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
                <div class="pb-4">
                    <!-- Login Link -->
                    <p
                        class="flex items-center justify-center gap-2 text-sm font-light text-gray-500 dark:text-gray-400">
                        {{ $t('register.login_prefix') }}
                        <Link v-bind:href="route('auth.login')"
                            class="font-medium text-primary-600 hover:underline dark:text-primary-500">
                        {{ $t('register.login') }}</Link>
                    </p>
                </div>
                <template #footer>
                    <span class="w-full">
                        <!-- Submit -->
                        <UIButton as="button" type="primary" rounded="lg" v-bind:submit="true" class="w-full"
                            v-bind:disabled="form.processing">
                            <Icon icon="tabler:user-plus" class="mr-2 size-5" v-show="!form.processing" />
                            <UILoadingSpinner class="mr-2" size="sm" v-show="form.processing" />
                            <span class="truncate">{{ $t('register.register') }}</span>
                        </UIButton>
                    </span>
                </template>
            </UIModalTemplateDrawer>
        </form>
    </UIModalStaticDrawer>
</template>
