<script lang="ts" setup>
const props = defineProps({
    as: {
        type: String,
        default: 'link',
    },
    useLinkClass: {
        type: Boolean,
        default: true
    }
})
const emits = defineEmits(['item-click'])
defineOptions({
    inheritAttrs: false
})
</script>

<template>

    <template v-if="as === 'a'">
        <a v-bind:class="{ 'link': useLinkClass }" v-bind="$attrs" v-on:click="$emit('item-click', true)">
            <slot />
        </a>
    </template>
    <template v-else-if="as === 'link'">
        <Link v-bind:class="{ 'link': useLinkClass }" v-bind="$attrs" v-on:click="$emit('item-click', true)">
        <slot />
        </Link>
    </template>

</template>

<style scoped>
.link {
    @apply block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white;
}
</style>
