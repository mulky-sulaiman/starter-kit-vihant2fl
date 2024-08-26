<script lang="ts" setup>
import { computed, watchEffect } from 'vue'
import { randomID } from '@/utils/helpers'

const emit = defineEmits(["close-static-banner"])
const banner = useBannerStore()

const props = defineProps({
    id: {
        type: String,
        default: 'static-banner-' + randomID(15),
    },
    show: {
        type: Boolean,
        default: false,
    },
    type: {
        type: String,
        default: 'default',
    },
    placement: {
        type: String,
        default: 'top',
    },
    variant: {
        type: String,
        default: 'neutral',
    },
    size: {
        type: String,
        default: null,
    },
    autodismiss: {
        type: Boolean,
        default: false,
    },
    backdropBlur: {
        type: Boolean,
        default: true,
    },
})

const placementClass = computed(() => {
    if (props.type == 'default') {
        return {
            top: 'top-0 start-0',
            bottom: 'bottom-0 start-0',
        }[props.placement];
    } else if (props.type == 'boxed') {
        return {
            top: 'top-4 start-0 px-4',
            bottom: 'bottom-4 start-0 px-4',
        }[props.placement];
    }
})

const dispatchCloseBanner = () => {
    emit('close-static-banner')
    banner.playRemove()
}

watchEffect(() => {
    if (props.show) {
        banner.playAdd('info')
    }
})
</script>
<template>
    <div class="fixed z-50 flex flex-col items-center justify-center w-full space-y-4" v-bind:class="[placementClass]">
        <template v-if="show">
            <UINotificationBannerItem v-bind:show="show" v-bind:type="type" v-bind:placement="placement"
                v-bind:variant="variant" v-bind:size="size" v-bind:autodismiss="autodismiss"
                v-on:close-banner="dispatchCloseBanner()" v-bind:key="id">
                <slot />
            </UINotificationBannerItem>
        </template>
    </div>
    <template v-if="show">
        <div class="fixed inset-0 z-40 bg-gray-900/50 dark:bg-gray-900/80"
            v-bind:class="{ 'backdrop-filter backdrop-blur-[2.5px] bg-opacity-50 dark:bg-opacity-50 transition duration-100': backdropBlur }"
            v-show="show" v-on:click.prevent="dispatchCloseBanner()" v-bind:key="'backdrop-banner'"></div>
    </template>
</template>
