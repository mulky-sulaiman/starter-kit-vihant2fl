<script lang="ts" setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { usePage, router } from '@inertiajs/vue3'
import UINotificationBannerItem from '@/Components/UI/Notification/Banner/Item.vue'
import { useBannerStore } from '@/stores/useBannerStore'

// import { useClient } from '@/global-composables'
import useClient from '@/composables/useClient.ts'
const { isClient } = useClient()

const banner = useBannerStore()

const placementClass = computed(() => {
    if (banner.type == 'default') {
        return {
            top: 'top-0 start-0',
            bottom: 'bottom-0 start-0',
        }[banner.placement];
    } else if (banner.type == 'boxed') {
        return {
            top: 'top-4 start-0 px-4',
            bottom: 'bottom-4 start-0 px-4',
        }[banner.placement];
    }
})
const page = usePage()

const initFlash = () => {
    if (page.props.flash.banner.message && !banner.message) {
        banner.add(page.props.flash.banner)
    }
}

const destroyBanner = () => {
    banner.$reset()
}

const initBanner = () => {
    const flash = page.props.flash
    let hasFlash = false
    if (page.props.flash.banner.message && !banner.message) {
        hasFlash = true
    }
    if (hasFlash && !banner.message) {
        return initFlash()
    }
}

onMounted(() => {
    destroyBanner()
    initBanner()
})

if (isClient.value) {
    let removeFinishEventListener = router.on("finish", () => {
        initBanner()
    })
    onUnmounted(() => removeFinishEventListener())
}
</script>
<template>
    <div class="fixed z-50 flex flex-col items-center justify-center w-full space-y-4" v-bind:class="[placementClass]">
        <template v-if="banner.show">
            <UINotificationBannerItem v-bind:show="banner.show" v-bind:type="banner.type"
                v-bind:placement="banner.placement" v-bind:variant="banner.variant" v-bind:size="banner.size"
                v-bind:autodismiss="banner.autodismiss" v-bind:message="banner.message"
                v-on:close-banner="destroyBanner()" v-bind:key="banner.id">
                <template v-if="banner.payload">
                    <component :is="banner.payload" v-bind="banner.props ?? null" />
                </template>
                <template v-else-if="!banner.message">
                    <slot />
                </template>
            </UINotificationBannerItem>
        </template>
    </div>
    <template v-if="banner.show">
        <div class="fixed inset-0 z-40 bg-gray-900/50 dark:bg-gray-900/80"
            v-bind:class="{ 'backdrop-filter backdrop-blur-[2.5px] bg-opacity-50 dark:bg-opacity-50 transition duration-100': banner.backdropBlur }"
            v-if="banner.show" v-on:click.prevent="destroyBanner()" v-bind:key="'backdrop-banner'"></div>
    </template>
</template>
