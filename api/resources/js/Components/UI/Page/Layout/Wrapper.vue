<script lang="ts" setup>
defineOptions({
    inheritAttrs: false
})
</script>
<template>
    <div class="w-full h-full max-w-screen-xl mx-auto overflow-y-auto pt-14 bg-gray-50 dark:bg-gray-900"
        v-bind="$attrs">
        <slot />
    </div>
</template>
