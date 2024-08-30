<script lang="ts" setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue'
import UIMenuNotification from '@/Components/UI/Menu/Notification.vue'
import UISwitcherApp from '@/Components/UI/Switcher/App.vue'
import UIMenuUser from '@/Components/UI/Menu/User.vue'
import UIMenuGuest from '@/Components/UI/Menu/Guest.vue'
import UISeparator from '@/Components/UI/Separator.vue'

import { ref } from 'vue'

const mobileMenuTrigger = ref('')

</script>
<template>
    <header class="fixed z-10 w-full border-b border-gray-200 dark:border-gray-700">
        <nav class="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
            <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                <Link v-bind:href="route('home')" class="flex items-center">
                <ApplicationLogo class="h-6 mr-3 sm:h-9" alt="VIFLLAT Logo" />
                <span
                    class="self-center text-xl font-semibold tracking-widest uppercase xxs:hidden xs:inline-block whitespace-nowrap dark:text-white">{{
                        $page.props.config['app.name'] }}</span>
                </Link>
                <!-- Right Menu  -->
                <div class="flex items-center lg:order-2">
                    <div class="hidden mt-2 mr-4 sm:inline-block">
                        <span></span>
                    </div>

                    <template v-if="$page.props.auth.user">
                        <!-- Notification -->
                        <UIMenuNotification />
                        <UISeparator />
                        <!-- App Switcher -->
                        <UISwitcherApp />
                        <UISeparator />
                        <!-- User Menu -->
                        <UIMenuUser />
                    </template>
                    <template v-else>
                        <!-- Guest Menu -->
                        <UIMenuGuest />
                    </template>

                    <button ref="mobileMenuTrigger" id="mobile-menu-trigger" data-collapse-toggle="mobile-menu"
                        type="button"
                        class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mobile-menu-2" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <!-- Left Menu (Main)-->
                <div class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu">
                    <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <Link v-bind:href="route('home')" class="block py-2 pl-3 pr-4" v-bind:class="{
                                'text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white': $page.props.ziggy.route_name === 'home',
                                'text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700': $page.props.ziggy.route_name !== 'home'
                            }" v-on:click="$refs.mobileMenuTrigger.click()">
                            Home</Link>
                        </li>
                        <li>
                            <Link v-bind:href="route('user.index')" class="block py-2 pl-3 pr-4" v-bind:class="{
                                'text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white': ($page.props.ziggy.route_name === 'user.index' || $page.props.ziggy.route_name === 'profile.show'),
                                'text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700': ($page.props.ziggy.route_name !== 'user.index' && $page.props.ziggy.route_name !== 'profile.show')
                            }" v-on:click="$refs.mobileMenuTrigger.click()">
                            Users</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
