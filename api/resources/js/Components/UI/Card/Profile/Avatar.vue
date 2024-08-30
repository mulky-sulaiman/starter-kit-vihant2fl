<script lang="ts" setup>
import UIAvatar from '@/Components/UI/Avatar/Index.vue'
const props = defineProps({
    src: {
        type: String,
        default: 'https://picsum.photos/1280/720'
    },
    alt: {
        type: String,
        default: 'Avatar'
    }
})
defineOptions({
    inheritAttrs: false
})
</script>
<template>
    <!-- Profile Avatar -->
    <div flex flex-col items-center justify-center w-full space-y-4>
        <UIAvatar v-bind:src="src" v-bind:alt="alt" rounded="full" size="xl" v-bind:tooltip="true" v-bind:overlap="true"
            v-bind:border="true" class="shadow-lg" v-bind="$attrs" />
        <slot />
    </div>
</template>
