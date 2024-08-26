<script lang="ts" setup>
const props = defineProps({
    size: {
        type: String,
        default: 'sm'
    },
    title: {
        type: String,
        default: null
    },
    fullScreen: {
        type: Boolean,
        default: false
    }
})
</script>
<template>
    <div class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800"
        v-bind:class="{
            'max-w-xs': size === 'xs',
            'max-w-sm': size === 'sm',
            'max-w-md': size === 'md',
            'max-w-lg': size === 'lg',
            'max-w-xl': size === 'xl',
            'max-w-2xl': size === '2xl',
            'max-w-3xl': size === '3xl',
            'max-w-4xl': size === '4xl',
            'max-w-5xl': size === '5xl',
            'max-w-6xl': size === '6xl',
            'max-w-7xl': size === '7xl',
            'max-w-full': size === 'full',
            'fixed top-0 left-0 z-50 min-w-full min-h-full': fullScreen, '': !fullScreen
        }" v-bind="$attrs">
        <h3 class="mb-4 text-xl font-semibold dark:text-white" v-if="title" v-text="title"></h3>
        <slot />
    </div>
</template>
