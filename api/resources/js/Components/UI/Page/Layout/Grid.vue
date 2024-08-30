<script lang="ts" setup>

const props = defineProps({
    cols: {
        type: Number,
        default: 3
    }
})

const colsClass = 'xl:grid-cols-' + props.cols

defineOptions({
    inheritAttrs: false
})
</script>
<template>
    <div class="grid grid-cols-1 px-4 pt-6 xl:gap-4 dark:bg-gray-900" v-bind:class="[colsClass]" v-bind="$attrs">
        <slot />
    </div>
</template>
