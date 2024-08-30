<script lang="ts" setup>
import { computed, useSlots } from 'vue'
import { Icon } from '@iconify/vue/dist/iconify.js'
import { trans } from 'laravel-vue-i18n'

const props = defineProps({
    mode: {
        type: String,
        default: 'grid'
    },
    title: {
        type: String,
        default: null
    },
    breadcrumbs: {
        type: Object,
        default: {}
    },
    boxed: {
        type: Boolean,
        default: false
    },
    root: {
        type: String,
        default: 'home',
        validator(value) {
            // The value must match one of these strings
            return ['home', 'dashboard', 'admin'].includes(value)
        }
    }
})
const root = computed(() => {
    return {
        home: {
            icon: 'home-filled',
            label: trans('global.home'),
            link: 'home',
        },
        dashboard: {
            icon: 'layout-filled',
            label: trans('global.dashboard'),
            link: 'dashboard',
        },
        admin: {
            icon: 'layout-dashboard-filled',
            label: trans('global.admin'),
            link: 'admin',
        },

    }[props.root]
})
const widthClass = computed(() => {
    return {
        grid: 'col-span-full',
        list: 'w-full',
    }[props.mode]
})
const boxedClass = computed(() => {
    if (props.boxed) {
        return {
            grid: 'p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800',
            flex: 'p-4 bg-white border-b border-gray-200'
        }[props.mode]
    }
    return ''
})
const totalBreadcrumbs = computed(() => {
    return Object.keys(props.breadcrumbs).length
})
const slots = useSlots()
defineOptions({
    inheritAttrs: false
})
</script>
<template>
    <div class="mb-4 xl:mb-2" v-bind:class="[widthClass, boxedClass]" v-bind="$attrs">
        <!-- Breadcrumbs -->
        <nav class="flex mb-5" aria-label="Breadcrumb" v-if="totalBreadcrumbs > 0">
            <ol class="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
                <!-- Root -->
                <li class="inline-flex items-center">
                    <Link v-bind:href="route(root.link)"
                        class="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500">
                    <Icon v-bind:icon="`tabler:${root.icon}`" class="w-5 h-5 mr-2.5" fill="currentColor" />
                    {{ root.label }}
                    </Link>
                </li>
                <!-- Links -->
                <li v-for="(breadcrumb, index) in breadcrumbs" v-bind:key="breadcrumb.label">
                    <div class="flex items-center">
                        <Icon icon="tabler:chevron-right" class="w-4 h-4 font-medium text-gray-400" />
                        <span class="ml-1 text-gray-400 truncate md:ml-2 dark:text-gray-500" aria-current="page"
                            v-if="breadcrumb.link.length === 0">
                            {{ breadcrumb.label }}
                        </span>
                        <Link v-bind:href="route(breadcrumb.link)"
                            class="ml-1 text-gray-700 truncate hover:text-primary-600 md:ml-2 dark:text-gray-300 dark:hover:text-white"
                            v-else>
                        {{ breadcrumb.label }}
                        </Link>
                    </div>
                </li>
            </ol>
        </nav>
        <!-- Page Title -->
        <div class="items-center justify-between block sm:flex md:divide-x md:divide-gray-100 dark:divide-gray-700"
            v-bind:class="{ 'mb-4 xl:mb-2': slots.left || slots.right }" v-if="title || slots.top_right">
            <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white"
                v-bind:class="{ 'mb-4 md:mb-0': slots.top_right }" v-text="title" v-if="title">
            </h1>
            <div>
                <slot name="top_right" />
            </div>
        </div>
        <!-- Actions -->
        <div class="items-center justify-between block sm:flex md:divide-x md:divide-gray-100 dark:divide-gray-700"
            v-if="slots.left || slots.right">
            <!-- Left Action -->
            <div>
                <slot name="left" />
            </div>
            <!-- Right Action-->
            <div>
                <slot name="right" />
            </div>
        </div>
    </div>
    <!--block sm:flex items-center justify-between-->
</template>
