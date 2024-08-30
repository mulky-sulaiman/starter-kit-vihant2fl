<script lang="ts" setup>
import { randomID } from '@/utils/helpers'
import { ref, watchEffect } from 'vue'

const props = defineProps({
    id: {
        type: String,
        default: 'dropdown-' + randomID(15)
    },
    useArrow: {
        type: Boolean,
        default: true,
    },
    itemClicked: {
        type: Boolean,
        default: false,
    }

})

const trigger = ref(null)

watchEffect(() => {
    if (props.itemClicked) {
        trigger.value.click()
    }
})

defineOptions({
    inheritAttrs: false
})
</script>
<template>
    <!-- Dropdown Trigger -->
    <button ref="trigger" v-bind:id="id + '-trigger'" v-bind:data-dropdown-toggle="id"
        class="flex items-center text-sm font-medium text-gray-900 rounded-full pe-1 hover:text-primary-600 dark:hover:text-primary-500 md:me-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white"
        type="button" v-bind="$attrs">
        <span class="sr-only" v-text="$t('global.open')"></span>
        <slot />
        <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 10 6" v-if="useArrow">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 1 4 4 4-4" />
        </svg>
    </button>
</template>
<style></style>
