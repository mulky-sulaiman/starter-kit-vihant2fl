<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'
import { randomID } from '@/utils/helpers';

const generatedID = randomID(15)

const props = defineProps({
    id: {
        type: String,
        default: null
    },
    size: {
        type: String,
        default: 'sm'
    },
    rounded: {
        type: String,
        default: 'sm'
    },
    border: {
        type: Boolean,
        default: false
    },
    overlap: {
        type: Boolean,
        default: false
    },
    tooltip: {
        type: Boolean,
        default: false
    },
    alt: {
        type: String,
        default: null
    },
    indicator: {
        type: Boolean,
        default: false
    },
    color: {
        type: String,
        default: 'success'
    },
    placement: {
        type: String,
        default: 'bottom'
    }

})

const sizeClass = computed(() => {
    return {
        xs: 'w-6 h-6',
        sm: 'w-8 h-8',
        md: 'w-10 h-10',
        lg: 'w-20 h-20',
        xl: 'w-36 h-36',
    }[props.size]
})

const avatarID = ref(null)

const roundedClass = computed(() => {
    return {
        sm: 'rounded',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        full: 'rounded-full',
        none: 'rounded-none',
    }[props.rounded]
})

const borderClass = computed(() => {
    if (props.overlap) {
        return {
            true: 'bg-gray-50 dark:bg-gray-800 p-1 ring-2 ring-gray-50 dark:ring-gray-800',
            false: '',
        }[props.border]
    }

    return {
        true: 'p-1 ring-2 ring-gray-300 dark:ring-gray-500',
        false: '',
    }[props.border]

})

const colorClass = computed(() => {
    if (props.indicator) {
        return 'bg-' + props.color + '-500 dark:bg-' + props.color + '-600'
    }
    return null
})

const placementClass = computed(() => {
    if (props.indicator) {
        if (props.rounded === 'full') {
            return {
                top: 'top-0 left-7',
                bottom: 'bottom-0 left-7',
            }[props.placement]
        } else {
            return {
                top: 'top-0 left-8',
                bottom: 'bottom-0 left-8',
            }[props.placement]
        }
    }
    return null
})

onMounted(() => {
    avatarID.value = (props.id) ? props.id : 'avatar-' + generatedID
})

defineOptions({
    inheritAttrs: false
})
</script>
<template>
    <div class="relative">
        <img v-bind:id="avatarID" v-bind:class="[sizeClass, roundedClass, borderClass]" v-bind:alt="alt"
            v-bind:data-tooltip-target="`${avatarID}-tooltip`" v-bind="$attrs">
        <span class="absolute w-3.5 h-3.5 border-2 border-white dark:border-gray-800 rounded-full"
            v-bind:class="[colorClass, placementClass]" v-if="indicator"></span>
        <div v-bind:id="`${avatarID}-tooltip`" role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
            v-show="tooltip">
            {{ alt }}
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
    </div>
</template>
