<script lang="ts" setup>
import { Icon } from '@iconify/vue'

const props = defineProps({
    link: {
        type: Object,
        default: {}
    },
    sizeClass: {
        type: String,
        default: ''
    },
    index: {
        type: Number,
        default: 0
    },
    length: {
        type: Number,
        default: 0
    }
})

defineOptions({
    inheritAttrs: false
})
</script>
<template>
    <template v-if="link.url">
        <Link preserve-scroll preserve-state v-bind:href="link?.url" class="pagination-links"
            v-bind:class="{ [sizeClass]: true, 'previous': index === 0, 'next': index === length - 1, 'active': link.active }">
        <span v-html="(index === 0 || index === length - 1) ? null : link.label"></span>
        <Icon icon="tabler:chevron-left" class="w-4 h-4" aria-hidden="true" v-if="index === 0" />
        <Icon icon="tabler:chevron-right" class="w-4 h-4" aria-hidden="true" v-if="index === length - 1" />
        </Link>
    </template>
    <template v-else>
        <span class="pagination-links"
            v-bind:class="{ [sizeClass]: true, 'previous': index === 0, 'next': index === length - 1, 'disabled': !link.url }">
            <span v-html="(index === 0 || index === length - 1) ? null : link.label"></span>
            <Icon icon="tabler:chevron-left" class="w-4 h-4" aria-hidden="true" v-if="index === 0" />
            <Icon icon="tabler:chevron-right" class="w-4 h-4" aria-hidden="true" v-if="index === length - 1" />
        </span>
    </template>
</template>
