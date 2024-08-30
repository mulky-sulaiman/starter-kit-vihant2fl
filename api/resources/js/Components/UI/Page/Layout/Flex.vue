<script lang="ts" setup>
defineOptions({
    inheritAttrs: false
})
</script>
<template>
    <div class="flex flex-col px-4 pt-6 xl:gap-4 dark:bg-gray-900" v-bind="$attrs">
        <slot />
    </div>
</template>
