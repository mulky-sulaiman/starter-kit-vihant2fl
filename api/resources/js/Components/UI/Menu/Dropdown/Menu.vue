<script lang="ts" setup>
import { randomID } from '@/utils/helpers'
const props = defineProps({
    id: {
        type: String,
        default: 'dropdown-' + randomID(15)
    }
})
defineOptions({
    inheritAttrs: false
})
</script>
<template>
    <!-- Dropdown Menu-->
    <div v-bind:id="id"
        class="z-10 hidden text-sm text-gray-700 bg-white divide-y divide-gray-100 rounded-lg shadow min-w-44 dark:bg-gray-700 dark:divide-gray-600 dark:text-gray-200"
        v-bind="$attrs">
        <slot />
    </div>
</template>
<style></style>
