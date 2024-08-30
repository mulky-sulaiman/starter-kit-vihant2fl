<script lang="ts" setup>
const props = defineProps({
    src: {
        type: String,
        default: 'https://picsum.photos/1280/720'
    }
})
defineOptions({
    inheritAttrs: false
})
</script>
<template>
    <!-- Profile Header -->
    <div class="flex items-center justify-center w-full h-64 bg-gray-300 bg-center bg-no-repeat bg-cover rounded-lg shadow-lg hover:bg-transparent bg-blend-multiply"
        v-bind:style="`background-image: url('${src}');`" v-bind="$attrs">
        <slot />
    </div>
</template>
