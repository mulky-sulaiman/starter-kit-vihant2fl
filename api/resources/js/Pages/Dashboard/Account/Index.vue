<script lang="ts" setup>
import LayoutsDashboard from '@/Layouts/Dashboard.vue'
import FormInputGroup from '@/Components/Form/Input/Group.vue'
import FormSelectGroup from '@/Components/Form/Select/Group.vue'
import UIButton from '@/Components/UI/Button.vue'
import { Icon } from '@iconify/vue'
import UILoadingSpinner from '@/Components/UI/Loading/Spinner.vue'
import { useForm, router, usePage } from '@inertiajs/vue3'
import UICard from '@/Components/UI/Card/Index.vue'
import UIAvatar from '@/Components/UI/Avatar/Index.vue'
import FormLabel from '@/Components/Form/Label.vue'
import { ref, computed, watch, onMounted } from 'vue'

const verificationLinkSent = ref(null)

const props = defineProps({
    genders: {
        type: Object
    },
    breadCrumbs: {
        type: Object,
        default: {
            0: { label: 'Account', link: 'dashboard.account.index' },
            1: { label: 'Profile', link: '' },
        }
    }
})

const page = usePage()

const form = useForm({
    _method: 'PUT',
    first_name: page.props.auth.user.first_name,
    last_name: page.props.auth.user.last_name,
    username: page.props.auth.user.username,
    email: page.props.auth.user.email,
    phone: page.props.auth.user.phone,
    gender: page.props.auth.user.gender,
    photo: null,
    photo_header: null,

});

const submit = () => {
    form.post(route('user-profile-information.update'), {
        preserveScroll: false,
        onFinish: () => {
            photo.value = null
            photo_header.value = null
        },
    })
};

const sendEmailVerification = () => {
    verificationLinkSent.value = true
}

const photo = ref(null)
const photoPreview = computed(() => {
    if (!photo.value) { return }
    return URL.createObjectURL(photo.value)
})

watch(photo, (photo) => {
    form.photo = photo
})

const photo_header = ref(null)

const photoHeaderPreview = computed(() => {
    if (!photo_header.value) { return }
    return URL.createObjectURL(photo_header.value)
})

watch(photo_header, (photo_header) => {
    form.photo_header = photo_header
})
</script>
<template>
    <LayoutsDashboard v-bind:pageTitle="$t('global.profile_info')" v-bind:breadCrumbs="breadCrumbs">
        <UIHead v-bind:title="$t('global.profile_info')" v-bind:description="$t('global.profile_info')" />
        <UICard class="border-0 border-b border-gray-200 rounded-none dark:border-gray-700" size="full">
            <form v-on:submit.prevent="submit">
                <div class="flex flex-col max-w-full px-4 mx-auto space-y-6 lg:gap-8 xl:gap-0">
                    <div class="flex flex-col items-center justify-center w-full -space-y-20">
                        <!-- Profile Header -->
                        <div class="flex items-center justify-center w-full bg-cover"
                            v-bind:style="`background-image: url('${photoHeaderPreview ?? $page.props.auth.user.header_url}');`">
                            <FormLabel for="dropzone-file"
                                class="flex flex-col items-center justify-center w-full h-64 font-semibold border-2 border-gray-300 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 text-primary-500 dark:text-primary-100">
                                <template #label>
                                    <a href="#" v-on:click.prevent="photo_header = null"
                                        class="flex flex-col items-center justify-center pt-5 pb-6" role="button"
                                        v-if="photo_header">
                                        <Icon icon="tabler:trash" class="w-8 h-8 " />
                                        <span class="mb-2 text-sm ">Clear</span>
                                    </a>
                                    <div class="flex flex-col items-center justify-center pt-5 pb-6" v-else>
                                        <svg class="w-8 h-8 mb-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                            fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                        </svg>
                                        <p class="mb-2 text-sm "><span class="font-semibold">Click to upload</span> or
                                            drag and drop</p>
                                        <p class="text-xs ">SVG, PNG, JPG or GIF (MAX.
                                            800x400px)</p>
                                        <input id="dropzone-file" type="file" class="sr-only"
                                            v-on:change="photo_header = $event.target.files[0]" />
                                    </div>
                                </template>
                            </FormLabel>
                        </div>
                        <!-- Avatar -->
                        <div flex flex-col items-center justify-center w-full space-y-4>
                            <UIAvatar v-bind:src="photoPreview" v-bind:alt="$page.props.auth.user.name" rounded="full"
                                size="xl" v-bind:tooltip="true" v-bind:overlap="true" v-if="photoPreview" />
                            <UIAvatar v-bind:src="$page.props.auth.user.avatar_url"
                                v-bind:alt="$page.props.auth.user.name" rounded="full" size="xl" v-bind:tooltip="true"
                                v-bind:border="true" v-bind:overlap="true" v-else />
                            <div>
                                <FormLabel
                                    class="font-semibold text-center cursor-pointer text-primary-500 dark:text-primary-100">
                                    <template #label>
                                        <button type="button" v-if="photo"
                                            v-on:click.prevent="photo = null">Clear</button>
                                        <span v-else>Choose Photo
                                            <input type="file" class="sr-only"
                                                v-on:change="photo = $event.target.files[0]" />
                                        </span>
                                    </template>
                                </FormLabel>
                            </div>
                        </div>

                    </div>

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
                    <div class="space-y-4 md:space-y-6 ">
                        <div class="grid grid-cols-6 gap-6">
                            <div class="col-span-6">
                                <!-- Email -->
                                <FormInputGroup v-bind:label="$t('register.email')"
                                    v-bind:hint="$t('register.email_hint')" identifier="email" type="email"
                                    v-bind:placeholder="$t('register.email_placeholder')" v-model="form.email"
                                    v-bind:formIsDirty="form.isDirty" v-bind:error="form.errors.email" required
                                    autocomplete="username">
                                    <template #prefix>
                                        <Icon icon="tabler:mail"
                                            class="w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500" />
                                    </template>
                                </FormInputGroup>
                            </div>
                            <div class="col-span-6"
                                v-if="$page.props.features['email-verification'] && page.props.auth.user.email_verified_at === null">
                                <p class="mt-2 text-sm dark:text-white">
                                    Your email address is unverified.

                                    <Link v-bind:href="route('verification.send')" method="post" as="button"
                                        class="text-sm text-gray-600 underline rounded-md dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                                        v-on:click.prevent="sendEmailVerification">
                                    Click here to re-send the verification email.
                                    </Link>
                                </p>

                                <div v-show="verificationLinkSent"
                                    class="mt-2 text-sm font-medium text-green-600 dark:text-green-400">
                                    A new verification link has been sent to your email address.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="space-y-4 md:space-y-6">
                        <div class="col-span-6">
                            <!-- Submit -->
                            <UIButton as="button" type="primary" rounded="lg" v-bind:submit="true"
                                v-bind:disabled="form.processing">
                                <Icon icon="tabler:device-floppy" class="mr-2 size-5" v-show="!form.processing" />
                                <UILoadingSpinner class="mr-2" size="sm" v-show="form.processing" />
                                <span class="truncate">{{ $t('global.save') }}</span>
                            </UIButton>
                        </div>
                    </div>

                </div>
            </form>
        </UICard>
    </LayoutsDashboard>
</template>
