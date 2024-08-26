<script lang="ts" setup>
import { Icon } from '@iconify/vue'
const props = defineProps({
    mode: {
        type: String,
        default: 'inertia'
    }
})
</script>
<template>
    <div class="fixed z-30 bottom-4 left-4" v-if="mode === 'inertia'">
        <div data-tooltip-target="tooltip-mode" data-tooltip-placement="right"
            class="flex items-center justify-center text-white bg-green-400 border border-green-400 rounded-full opacity-75 size-11 hover:bg-green-500 hover:border-green-500">
            <Icon icon="tabler:brand-vue" class="size-7 " />
        </div>
        <div id="tooltip-mode" role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium tracking-widest text-white uppercase bg-gray-900 rounded-lg shadow-sm opacity-0 opacity-75 tooltip dark:bg-gray-700">
            Inertia Vue Mode
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
    </div>
    <div class="fixed z-30 bottom-4 left-4" v-if="mode === 'nuxt'">
        <div data-tooltip-target="tooltip-mode" data-tooltip-placement="right"
            class="flex items-center justify-center text-white bg-green-400 border border-green-400 rounded-full opacity-75 size-11 hover:bg-green-500 hover:border-green-500">
            <Icon icon="tabler:brand-nuxt" class="size-7 " />
        </div>
        <div id="tooltip-mode" role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium tracking-widest text-white uppercase bg-gray-900 rounded-lg shadow-sm opacity-0 opacity-75 tooltip dark:bg-gray-700">
            Nuxt Mode
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
    </div>
</template>
