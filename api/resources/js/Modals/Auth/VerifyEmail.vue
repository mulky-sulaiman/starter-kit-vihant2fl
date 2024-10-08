<script lang="ts" setup>
import UIModalStaticPopUp from '@/Components/UI/Modal/Static/PopUp.vue'
import UIModalTemplatePopUp from '@/Components/UI/Modal/Template/PopUp.vue'
import UIModalStaticDrawer from '@/Components/UI/Modal/Static/Drawer.vue'
import UIModalTemplateDrawer from '@/Components/UI/Modal/Template/Drawer.vue'
import UIButton from '@/Components/UI/Button.vue'
import { Icon } from '@iconify/vue'
import { useModal } from 'momentum-modal'
import { usePage, router, useForm } from '@inertiajs/vue3'
import UILoadingSpinner from '@/Components/UI/Loading/Spinner.vue'

const emit = defineEmits(['close'])

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

const page = usePage()

const mode = page.props.config['auth.mode']

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
    <UIHead v-bind:title="$t('global.verify_email')" v-bind:description="$t('global.verify_email')" />
    <UIModalStaticPopUp v-bind:show="show" maxWidth="lg" v-on:close="close" v-if="mode === 'modal'">
        <form class="space-y-4 md:space-y-6" v-on:submit.prevent="submit">
            <UIModalTemplatePopUp v-bind:title="$t('global.verify_email')" v-on:close-proxy="handleClose"
                class="!p-0 md:!p-0">
                <div class="items-center p-4 space-y-4 md:p-6 md:space-y-6">
                    <p>Thanks for signing up! Before getting started, could you verify your email address by clicking on
                        the
                        link we just
                        emailed to you? If you didn't receive the email, we will gladly send you another.</p>
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
                        <UIButton as="button" type="primary" rounded="lg" v-bind:submit="true" class="w-full"
                            :disabled="form.processing">
                            <Icon icon="tabler:mail" class="mr-2 size-5" v-show="!form.processing" />
                            <UILoadingSpinner class="mr-2" size="sm" v-show="form.processing" />
                            <span class="truncate">{{ $t('global.send_verification_link') }}</span>
                        </UIButton>
                    </span>
                </template>
            </UIModalTemplatePopUp>
        </form>
    </UIModalStaticPopUp>
    <UIModalStaticDrawer v-bind:show="show" placement="right" extraWidth="20" v-on:close="close"
        v-if="mode === 'drawer'">
        <form class="space-y-4 md:space-y-6" v-on:submit.prevent="submit">
            <UIModalTemplateDrawer v-bind:title="$t('global.verify_email')" v-on:close-proxy="handleClose"
                placement="right" class="!p-0 md:!p-0">
                <div class="items-center p-4 space-y-4 md:p-6 md:space-y-6">
                    <p>Thanks for signing up! Before getting started, could you verify your email address by clicking on
                        the
                        link we just emailed to you? If you didn't receive the email, we will gladly send you another.
                    </p>
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
                        <UIButton as="button" type="primary" rounded="lg" v-bind:submit="true" class="w-full"
                            :disabled="form.processing">
                            <Icon icon="tabler:mail" class="mr-2 size-5" v-show="!form.processing" />
                            <UILoadingSpinner class="mr-2" size="sm" v-show="form.processing" />
                            <span class="truncate">{{ $t('global.send_verification_link') }}</span>
                        </UIButton>
                    </span>
                </template>
            </UIModalTemplateDrawer>
        </form>
    </UIModalStaticDrawer>
</template>
