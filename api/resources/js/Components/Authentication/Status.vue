<script lang="ts" setup>
const props = defineProps({
    status: {
        type: String,
        default: null,
    }
})
const baseClass = "flex items-center p-4 mb-4 text-sm text-success-800 border border-success-300 rounded-lg bg-success-50 dark:bg-transparent dark:text-success-400 dark:border-success-800"
</script>
<template v-if="status">
    <div v-bind:class="baseClass" v-bind="$attrs" role="alert">
        <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 border rounded-lg text-success-500 bg-success-100 border-success-300 dark:bg-success-800 dark:text-success-200': variant ==
        'success">
            <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                viewBox="0 0 20 20">
                <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span class="sr-only" v-text="$t('global.info')"></span>
        </div>
        <div class="text-sm font-medium ms-3" v-text="status"></div>
    </div>
</template>
