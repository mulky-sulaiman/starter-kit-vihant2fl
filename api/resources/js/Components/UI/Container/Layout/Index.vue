<script lang="ts" setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import UIButton from '@/Components/UI/Button.vue'
import UIPageHeader from '@/Components/UI/Page/Header/Index.vue'

const props = defineProps({
    layout: {
        type: String,
        default: 'list'
    },
    column: {
        type: Number,
        default: 8
    }
})
const layoutClass = computed(() => {
    return {
        grid: 'grid-cols-1 gap-x-4 md:grid-cols-' + props.column,
        list: 'grid-rows-1',

    }[props.layout]
})

const emits = defineEmits(['change-layout'])

const changeLayout = (val) => {
    emits('change-layout', val)
}

defineOptions({
    inheritAttrs: false
})

</script>
<template>
    <main class="flex flex-col pt-6 space-y-6">
        <!-- Layout Menu -->
        <UIPageHeader mode="grid" v-bind:boxed="true">
            <template #left>
                <slot name="left" />
            </template>
            <template #right>
                <div class="flex items-center justify-start mt-4 space-x-2 font-semibold md:mt-0">
                    <span class="hidden md:block">Layout</span>
                    <UIButton size="xs" as="button" v-bind:disabled="layout === 'list'"
                        v-bind:type="layout === 'list' ? 'primary' : 'alternate'" rounded="lg" class=""
                        v-on:click.prevent="changeLayout('list')" data-tooltip-target="tooltip-list">
                        <Icon icon="tabler:layout-list" class="size-4" alt="List" />
                    </UIButton>
                    <div id="tooltip-list" role="tooltip"
                        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        <span class="tracking-widest uppercase">List View</span>
                        <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                    <UIButton size="xs" as="button" v-bind:disabled="layout === 'grid'"
                        v-bind:type="layout === 'grid' ? 'primary' : 'alternate'" rounded="lg" class=""
                        v-on:click.prevent="changeLayout('grid')" data-tooltip-target="tooltip-grid">
                        <Icon icon="tabler:layout-grid" class="size-4" alt="Grid" />
                    </UIButton>
                    <div id="tooltip-grid" role="tooltip"
                        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        <span class="tracking-widest uppercase">Grid View</span>
                        <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                </div>
            </template>
        </UIPageHeader>
        <!-- <div class="flex flex-wrap items-center justify-center max-w-full gap-2 mx-4 md:justify-between">
            <div class="flex items-center justify-start space-x-2">
                <slot name="left" />
            </div>
            <div class="flex items-center justify-end space-x-2 font-semibold">
                <span class="hidden md:block">Layout</span>
                <UIButton size="xs" as="button" v-bind:disabled="layout === 'list'"
                    v-bind:type="layout === 'list' ? 'primary' : 'alternate'" rounded="lg" class=""
                    v-on:click.prevent="changeLayout('list')" data-tooltip-target="tooltip-list">
                    <Icon icon="tabler:layout-list" class="size-4" alt="List" />
                </UIButton>
                <div id="tooltip-list" role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    <span class="tracking-widest uppercase">List View</span>
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <UIButton size="xs" as="button" v-bind:disabled="layout === 'grid'"
                    v-bind:type="layout === 'grid' ? 'primary' : 'alternate'" rounded="lg" class=""
                    v-on:click.prevent="changeLayout('grid')" data-tooltip-target="tooltip-grid">
                    <Icon icon="tabler:layout-grid" class="size-4" alt="Grid" />
                </UIButton>
                <div id="tooltip-grid" role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    <span class="tracking-widest uppercase">Grid View</span>
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
            </div>
        </div> -->
        <!-- Layout Content -->
        <section class="grid" v-bind:class="[layoutClass]" v-bind="$attrs">
            <slot />
        </section>
    </main>
</template>
