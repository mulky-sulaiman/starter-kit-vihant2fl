<script lang="ts" setup>
const props = defineProps({
    mode: {
        type: String,
        default: 'light',
    }
})
</script>
<template>
    <span class="w-px h-5 mx-1 dark:bg-gray-600 lg:inline"
        v-bind:class="{ 'bg-gray-200': mode == 'light', 'bg-gray-500': mode == 'dark' }" v-bind="$attrs"></span>
</template>
