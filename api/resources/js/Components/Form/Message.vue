<script lang="ts" setup>
const props = defineProps({
    type: {
        type: String,
        default: 'hint',
        required: true,
    },
    message: {
        type: String,
        default: null,
    },
})
defineOptions({
    inheritAttrs: false
})
</script>
<template>
    <div v-bind:class="{
        'mt-2 text-sm text-start text-warning-600 dark:text-warning-500': type == 'dirty',
        'mt-2 text-sm text-start text-success-600 dark:text-success-500': type == 'success',
        'mt-2 text-sm text-start text-danger-600 dark:text-danger-500': type == 'error',
        'mt-2 text-sm text-start text-gray-500 dark:text-gray-400': type == 'hint',
    }" v-bind="$attrs">
        <slot name="message" />
    </div>
</template>
