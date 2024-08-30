<script setup>
import { Icon } from '@iconify/vue/dist/iconify.js'
import { computed } from 'vue'

const slots = defineSlots()
const props = defineProps({
    mode: {
        type: String,
        default: 'dashboard'
    },
    pageTitle: {
        type: String,
        default: null
    },
    header: {
        type: String,
        default: 'Light'
    },
    breadCrumbs: {
        type: Object,
        default: {}
    }
})

const totalBreadCrumbs = computed(() => {
    return Object.keys(props.breadCrumbs).length
})

</script>
<template>
    <div class="p-4 pt-6 bg-white block sm:flex items-end justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700 w-full"
        v-if="pageTitle">
        <div class="mb-4 space-y-4">
            <!-- Breadcrumb -->
            <nav class="flex mb-5" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
                    <li class="inline-flex items-center">

                        <Link v-bind:href="route('admin.light')"
                            class="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white"
                            v-if="mode == 'admin'">
                        <Icon icon="tabler:layout-filled" class="w-5 h-5 mr-2.5" />
                        <span class="truncate">{{ $t('global.admin') }}</span>
                        </Link>
                        <Link v-bind:href="route('dashboard')"
                            class="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white"
                            v-if="mode == 'dashboard'">
                        <Icon icon="tabler:layout-dashboard-filled" class="w-5 h-5 mr-2.5" />
                        <span class="truncate">{{ $t('global.dashboard') }}</span>
                        </Link>
                    </li>
                    <template v-if="totalBreadCrumbs > 0">
                        <li v-for="(breadCrumb, index) in breadCrumbs" v-bind:key="index">
                            <div class="flex items-center">
                                <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span class="ml-1 text-gray-400 truncate md:ml-2 dark:text-gray-500" aria-current="page"
                                    v-if="breadCrumb.link.length === 0">
                                    {{ breadCrumb.label }}
                                </span>
                                <Link v-bind:href="route(breadCrumb.link)"
                                    class="ml-1 text-gray-700 truncate hover:text-primary-600 md:ml-2 dark:text-gray-300 dark:hover:text-white"
                                    v-else>
                                {{ breadCrumb.label }}
                                </Link>
                            </div>
                        </li>
                    </template>
                </ol>
            </nav>

            <!-- Page Title -->
            <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                {{ pageTitle }}
            </h1>

            <!-- Left Action -->
            <div class="flex items-center mb-4 sm:mb-0" v-if="slots.leftAction">
                <!-- <template v-if="slots.leftAction"> -->
                <slot name="leftAction" />
                <!-- </template> -->
            </div>


        </div>
        <!-- Page Action -->
        <div class="flex items-end justify-start gap-2 mb-4 md:justify-end" v-if="slots.actions">
            <slot name="actions" />
        </div>
    </div>
</template>
