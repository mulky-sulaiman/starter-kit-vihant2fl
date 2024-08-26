<script lang="ts" setup>
import { computed } from 'vue'
const props = defineProps({
    space: {
        type: String,
        default: '4',
    }
})

const spaceClass = computed(() => {
    return '-space-x-' + props.space
})

defineOptions({
    inheritAttrs: false
})
</script>
<template>
    <div class="flex rtl:space-x-reverse" v-bind:class="[spaceClass]" v-bind="$attrs">
        <slot />
    </div>
</template>
