<script lang="ts" setup>
import { ref } from 'vue'
import UIModalStaticPopUp from '@/Components/UI/Modal/Static/PopUp.vue'
import UIModalTemplatePopUp from '@/Components/UI/Modal/Template/PopUp.vue'
import UIModalStaticDrawer from '@/Components/UI/Modal/Static/Drawer.vue'
import UIModalTemplateDrawer from '@/Components/UI/Modal/Template/Drawer.vue'
import UIButton from '@/Components/UI/Button.vue'
import { Icon } from '@iconify/vue'
import { useModal } from 'momentum-modal'
import { usePage, router, useForm } from '@inertiajs/vue3'
import FormInputGroup from '@/Components/Form/Input/Group.vue'
import FormPinGroup from '@/Components/Form/Pin/Group.vue'
import FormCheckboxGroup from '@/Components/Form/Checkbox/Group.vue'
import UILoadingSpinner from '@/Components/UI/Loading/Spinner.vue'

const emit = defineEmits(['close'])

const props = defineProps({
    canResetPassword: {
        type: Boolean,
    },
    status: {
        type: String,
    },
})

const page = usePage()

const mode = page.props.config['auth.mode']

const showCode = ref(true)
const toggleShowCode = () => {
    showCode.value = !showCode.value
}

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
}

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
    <UIHead v-bind:title="$t('global.two_factor_challenge')" v-bind:description="$t('global.two_factor_challenge')" />
    <UIModalStaticPopUp v-bind:show="show" maxWidth="lg" v-on:close="close" v-if="mode === 'modal'">
        <form class="space-y-4 md:space-y-6" v-on:submit.prevent="submit">
            <UIModalTemplatePopUp v-bind:title="$t('global.two_factor_challenge')" v-on:close-proxy="handleClose"
                class="!p-0 md:!p-0">
                <div class="items-center p-4 space-y-4 md:p-6 md:space-y-6">
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
                </div>
                <!-- Back to Home Link -->
                <div class="flex items-center justify-center pb-4 border-t dark:border-gray-600">
                    <p class="mt-4 text-sm font-light text-gray-500 dark:text-gray-400">
                        {{ $t('login.register_prefix') }}
                        <Link v-bind:href="route('home')"
                            class="font-medium text-primary-600 hover:underline dark:text-primary-500">
                        {{ $t('global.home') }}</Link>
                    </p>
                </div>
                <template #footer>
                    <span class="w-full">
                        <!-- Submit -->
                        <UIButton as="button" type="primary" rounded="lg" v-bind:submit="true" class="w-full"
                            :disabled="form.processing">
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
            <UIModalTemplateDrawer v-bind:title="$t('global.confirm.password')" v-on:close-proxy="handleClose"
                placement="right" class="!p-0 md:!p-0">
                <div class="items-center p-4 space-y-4 md:p-6 md:space-y-6">
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
                </div>
                <!-- Back to Home Link -->
                <div class="flex items-center justify-center pb-4 border-t dark:border-gray-600">
                    <p class="mt-4 text-sm font-light text-gray-500 dark:text-gray-400">
                        {{ $t('login.register_prefix') }}
                        <Link v-bind:href="route('home')"
                            class="font-medium text-primary-600 hover:underline dark:text-primary-500">
                        {{ $t('global.home') }}</Link>
                    </p>
                </div>
                <template #footer>
                    <span class="w-full">
                        <!-- Submit -->
                        <UIButton as="button" type="primary" rounded="lg" v-bind:submit="true" class="w-full"
                            :disabled="form.processing">
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
