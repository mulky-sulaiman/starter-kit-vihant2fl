<script setup>
import { ref, onMounted } from 'vue'
import ApplicationLogo from '@/Components/ApplicationLogo.vue'
import UIMenuNotification from '@/Components/UI/Menu/Notification.vue'
import UISwitcherApp from '@/Components/UI/Switcher/App.vue'
import UIMenuUser from '@/Components/UI/Menu/User.vue'
import UIButton from '@/Components/UI/Button.vue'
import UISeparator from '@/Components/UI/Separator.vue'
import { Icon } from '@iconify/vue'
</script>
<template>
    <nav
        class="fixed z-30 w-full border-b text-primary-200 bg-primary-800 border-primary-600 dark:bg-primary-950 dark:border-primary-700 dark:text-white">
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
            <div class="flex items-center justify-between">
                <div class="flex items-center justify-start">
                    <button id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar"
                        class="p-2 rounded cursor-pointer text-primary-200 lg:hidden hover:bg-primary-600 dark:focus:bg-primary-700 dark:text-primary-400 dark:hover:bg-primary-700 dark:hover:text-white">
                        <svg id="toggleSidebarMobileHamburger" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <svg id="toggleSidebarMobileClose" class="hidden w-6 h-6" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    <Link v-bind:href="route('home')" class="flex ml-2 md:mr-24">
                    <ApplicationLogo class="h-8 mr-3" />
                    <span
                        class="self-center text-xl font-semibold tracking-widest uppercase sm:text-2xl whitespace-nowrap dark:text-white">{{
                            $page.props.config['app.name'] }}</span>
                    </Link>
                    <form action="#" method="GET" class="hidden lg:block lg:pl-3.5">
                        <label for="topbar-search" class="sr-only">Search</label>
                        <div class="relative mt-1 lg:w-96">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg class="w-5 h-5 text-primary-500 dark:text-primary-400" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <input type="text" name="email" id="topbar-search"
                                class="bg-primary-200 border border-primary-300 text-primary-900 sm:text-sm rounded-lg focus:ring-gray-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-primary-700 dark:border-primary-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-primary-500"
                                placeholder="Search">
                        </div>
                    </form>
                </div>
                <div class="flex items-center">
                    <div class="hidden mr-3 -mb-1 sm:block">
                        <span></span>
                    </div>

                    <button id="toggleSidebarMobileSearch" type="button"
                        class="p-2 rounded-lg text-primary-200 lg:hidden hover:bg-primary-600 dark:text-primary-400 dark:hover:bg-primary-700 dark:hover:text-white">
                        <span class="sr-only">Search</span>

                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    <template v-if="$page.props.auth.user">
                        <!-- Notification -->
                        <UIMenuNotification mode="dark" />
                        <UISeparator />
                        <!-- App Switcher -->
                        <UISwitcherApp mode="dark" />
                        <UISeparator />
                        <!-- User Menu -->
                        <UIMenuUser mode="dark" />
                    </template>
                    <template v-else>
                        <div class="hidden md:flex">
                            <UIButton type="light" as="link" v-bind:href="route('auth.login')" rounded="lg"
                                class="w-full mr-2 tracking-widest uppercase">
                                <Icon icon="tabler:login-2" class="mr-2 size-5" />
                                {{ $t('header.login') }}
                            </UIButton>
                            <UIButton as="link" type="primary" v-bind:href="route('auth.register')" rounded="lg"
                                class="w-full tracking-widest uppercase" v-if="$page.props.features.registration">
                                <Icon icon="tabler:user-plus" class="mr-2 size-5" />
                                {{ $t('header.register') }}
                            </UIButton>
                        </div>
                        <div class="flex mr-1 md:hidden">
                            <UIButton size="sm" type="light" as="link" v-bind:href="route('auth.login')" rounded="lg"
                                class="w-full mr-2 tracking-widest uppercase">
                                <Icon icon="tabler:login-2" class="size-5" />
                            </UIButton>
                            <UIButton size="sm" as="link" v-bind:href="route('auth.register')" rounded="lg"
                                class="w-full tracking-widest uppercase" v-if="$page.props.features.registration">
                                <Icon icon="tabler:user-plus" class="size-5" />
                            </UIButton>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </nav>
</template>
