<script lang="ts" setup>
import { computed } from 'vue'
import { randomID } from '@/utils/helpers'
import UIPaginationItem from '@/Components/UI/Pagination/Item.vue'
import UIPaginationInfo from '@/Components/UI/Pagination/Info.vue'

const props = defineProps({
    identifier: {
        type: String,
        default: randomID(15),
    },
    pagination: {
        type: Object,
        default: {}
    },
    size: {
        type: String,
        default: 'sm' // sm, md
    }
})

const id = 'pagination-' + props.identifier

const textClass = computed(() => {
    return {
        sm: 'text-sm',
        md: 'text-base h-10',
    }[props.size]
})

const sizeClass = computed(() => {
    return {
        sm: 'h-8 px-3',
        md: 'h-10 px-4',
    }[props.size]
})

defineOptions({
    inheritAttrs: false
})
</script>
<template>

    <div class="flex flex-wrap items-center justify-center w-full gap-2 md:justify-between">
        <!-- Informator -->
        <UIPaginationInfo v-bind:pagination="pagination" />
        <!-- Navigator -->
        <nav v-bind:aria-label="id">
            <ul class="inline-flex -space-x-px" v-bind:class="[textClass]">
                <li v-for="(link, index) in pagination.links" v-bind:key="link.label">
                    <UIPaginationItem v-bind:link="link" v-bind:sizeClass="sizeClass" v-bind:index="index"
                        v-bind:length="pagination.links.length" />
                </li>
            </ul>
        </nav>
    </div>

</template>
<style>
.pagination-links {
    @apply flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white;
}

.pagination-links.previous {
    @apply ms-0 border-e-0 rounded-s-lg;
}

.pagination-links.next {
    @apply rounded-e-lg;
}

.pagination-links.active {
    @apply text-primary-600 bg-primary-50 hover:bg-primary-100 hover:text-primary-700 !important;
}

.pagination-links.disabled {
    @apply border-gray-200 dark:border-gray-700 text-gray-300 dark:text-gray-500 hover:bg-white hover:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-500 cursor-not-allowed !important;
}
</style>
