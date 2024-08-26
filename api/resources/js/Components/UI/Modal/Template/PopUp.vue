<script lang="ts" setup>
import UIButton from '@/Components/UI/Button.vue'
import { Icon } from '@iconify/vue'

const emit = defineEmits(['close-proxy'])
const slots = defineSlots()

const props = defineProps({
    title: {
        type: String,
        default: null
    },
    footer: {
        type: String,
        default: null
    },
    closeCallback: {
        type: String,
        default: 'close'
    }

})

const handleCloseProxy = () => {
    emit('close-proxy')
}

defineOptions({
    inheritAttrs: false
})
</script>
<template>
    <!-- Modal content -->
    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal content -->
        <div
            class="relative min-h-screen bg-white border-t-4 md:shadow md:rounded-lg dark:bg-gray-700 md:min-h-0 border-info-500 dark:border-info-400">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 border-b rounded-t md:p-5 dark:border-gray-600">
                <h3 class="text-xl font-semibold tracking-widest uppercase text-info-500 dark:text-info-400">
                    {{ title }}</h3>
                <button type="button"
                    class="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 ms-auto dark:hover:bg-gray-600 dark:hover:text-white"
                    v-on:click.prevent="handleCloseProxy">
                    <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span class="sr-only">Close</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-4 space-y-4 md:p-5 min-h-[calc(100vh-147px)] md:min-h-0" v-bind="$attrs">
                <slot />
            </div>
            <!-- Modal footer -->
            <div
                class="flex items-center justify-between p-4 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <span class="w-full">
                    <UIButton size="sm" class="w-full" as="button" type="light" rounded="lg"
                        v-on:click.prevent="handleCloseProxy">
                        <Icon icon="tabler:x" class="mr-2 size-5" />
                        <span class="truncate">{{ $t('Close') }}</span>
                    </UIButton>
                </span>
                <slot name="footer" v-if="slots.footer" />
            </div>
        </div>
    </div>
</template>
