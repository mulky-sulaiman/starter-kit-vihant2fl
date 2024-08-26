<script lang="ts" setup>
import { watchEffect } from 'vue'
import { usePage, router } from '@inertiajs/vue3'
import { Icon } from '@iconify/vue'
import UIMenuDropdown from '@/Components/UI/Menu/Dropdown/Index.vue'
import UIMenuDropdownItem from '@/Components/UI/Menu/Dropdown/Item.vue'
import UIAvatar from '@/Components/UI/Avatar/Index.vue'

const page = usePage()
const props = defineProps({
    mode: {
        type: String,
        default: 'light',
    }
})

/** Confirm Dialog Block */
import { useConfirmStore } from '@/stores/useConfirmStore'
const confirm = useConfirmStore()
const confirmTarget = 'logout-from-user-menu'

const confirmDialogParams = {
    type: 'warning',
    size: 'sm',
    headTitle: 'auth.logout.headTitle',
    title: 'auth.logout.title',
    message: 'auth.logout.message',
    labelCancel: 'auth.logout.labelCancel',
    labelOk: 'auth.logout.labelOk',
    target: confirmTarget,
}
const setConfirmDialog = (k = null) => {
    if (k) confirmDialogParams['key'] = k
    confirm.$patch(confirmDialogParams)
}
const logout = () => {
    router.post('/logout')
}
watchEffect(() => {
    if (confirm.isValidConfirmation(confirmTarget)) {
        logout()
        confirm.$reset()
    }
})
/** End Confirm Dialog Block */
</script>
<template>
    <UIMenuDropdown id="user-menu" class="!pe-0 flex flex-shrink-0 mx-3 text-sm rounded-full md:mr-0 focus:ring-4"
        menuClass="z-50 hidden w-56 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
        v-bind:class="{
            '!bg-gray-800 dark:!bg-gray-800 focus:!ring-gray-300 dark:focus:!ring-gray-600': mode ==
                'light',
            '!bg-gray-600 dark:!bg-gray-700 focus:!ring-gray-300 dark:focus:!ring-gray-600': mode ==
                'dark',
            '!bg-danger-700 dark:!bg-danger-600 focus:!ring-danger-700 dark:focus:!ring-danger-600': mode ==
                'danger',
            '!bg-primary-700 dark:!bg-primary-600 focus:!ring-primary-700 dark:focus:!ring-primary-600': mode ==
                'primary',

        }" v-bind:useArrow="false">
        <template #trigger>
            <UIAvatar size="md" rounded="full" v-bind:tooltip="false" v-bind:src="$page.props.auth.user.avatar_url"
                v-bind:alt="$page.props.auth.user.name" v-bind:indicator="true" placement="bottom"
                v-bind:color="$page.props.auth.user.active ? 'success' : 'danger'" />
        </template>
        <div class="px-4 py-3">
            <span class="block text-sm font-semibold text-gray-900 dark:text-white"
                v-text="$page.props.auth.user.name"></span>
            <span class="block text-sm font-light text-gray-500 truncate dark:text-gray-400"
                v-text="$page.props.auth.user.email"></span>
        </div>

        <!-- Account Settings -->
        <ul class="py-1 font-light text-gray-500 pointer-events-auto dark:text-gray-400"
            aria-labelledby="userMenuDropdownButton">
            <li>
                <p class="block px-4 py-2 text-xs font-light text-gray-500 uppercase truncate dark:text-gray-400">
                    {{ $t('global.account_settings') }}
                </p>
            </li>
            <li>
                <UIMenuDropdownItem as="link" v-bind:useLinkClass="false" v-bind:href="route('dashboard.account.index')"
                    class="flex items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    <Icon icon="tabler:user-cog" class="w-5 h-5 mr-2 text-gray-400" />
                    {{ $t('global.profile_information') }}
                </UIMenuDropdownItem>
            </li>
            <li v-if="$page.props.features['security']">
                <UIMenuDropdownItem as="link" v-bind:useLinkClass="false"
                    v-bind:href="route('dashboard.account.security')"
                    class="flex items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    <Icon icon="tabler:lock-cog" class="w-5 h-5 mr-2 text-gray-400" />
                    {{ $t('global.security') }}
                </UIMenuDropdownItem>
            </li>
        </ul>
        <!-- Logout -->
        <ul class="py-1 font-light text-danger-700 dark:text-danger-600" aria-labelledby="dropdown">
            <li>
                <UIMenuDropdownItem as="a" v-bind:useLinkClass="false" href="/logout"
                    data-modal-target="confirm-dialog-modal" data-modal-toggle="confirm-dialog-modal"
                    v-on:click.prevent="setConfirmDialog()"
                    class="flex items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    <Icon icon="tabler:logout" class="w-5 h-5 mr-2" />
                    {{ $t('global.logout') }}
                </UIMenuDropdownItem>
            </li>
        </ul>
    </UIMenuDropdown>
</template>
