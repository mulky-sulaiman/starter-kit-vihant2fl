<script lang="ts" setup>
const props = defineProps({
    layout: {
        type: String,
        default: 'list'
    }
})

defineOptions({
    inheritAttrs: false
})
</script>
<template>
    <slot />
</template>
