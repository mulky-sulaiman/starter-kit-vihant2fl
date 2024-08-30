<script lang="ts" setup>
import { computed } from 'vue'
const props = defineProps({
    pagination: {
        type: Object,
        default: {}
    },
    size: {
        type: String,
        default: 'sm' // sm, md
    }
})
const textClass = computed(() => {
    return {
        sm: 'text-sm',
        md: 'text-base h-10',
    }[props.size]
})
defineOptions({
    inheritAttrs: false
})
</script>
<template>
    <div class="flex items-center justify-start space-x-2">
        <span v-bind:class="[textClass]">Showing <span class="font-semibold">{{ pagination.from }}</span> to <span
                class="font-semibold">{{ pagination.to }}</span> of <span class="font-semibold">{{ pagination.total
                }}</span> results</span>
    </div>
</template>
