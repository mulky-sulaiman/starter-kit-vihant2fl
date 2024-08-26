<script lang="ts" setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { usePage, router } from '@inertiajs/vue3'
import UINotificationAlertItem from '@/Components/UI/Notification/Alert/Item.vue'
import { useAlertStore } from '@/stores/useAlertStore'

// import { useClient } from '@/global-composables'
import useClient from '@/composables/useClient.ts'
const { isClient } = useClient()

const alert = useAlertStore()

const placementClass = computed(() => {
    if (alert.type == 'default') {
        return {
            top: 'top-0 start-0',
            bottom: 'bottom-0 start-0',
        }[alert.placement];
    } else if (alert.type == 'boxed') {
        return {
            top: 'top-4 start-0 px-4',
            bottom: 'bottom-4 start-0 px-4',
        }[alert.placement];
    }
})

const page = usePage()

const initFlash = () => {

    if (page.props.flash.notification.pipe == 'alert') {
        if (page.props.flash.info) {
            alert.add({

                type: page.props.flash.notification.type,
                placement: page.props.flash.notification.placement,
                size: page.props.flash.notification.size,
                autodismiss: page.props.flash.notification.autodismiss,

                variant: 'info',
                message: page.props.flash.info,

            })
        }
        if (page.props.flash.warning) {
            alert.add({

                type: page.props.flash.notification.type,
                placement: page.props.flash.notification.placement,
                size: page.props.flash.notification.size,
                autodismiss: page.props.flash.notification.autodismiss,

                variant: 'warning',
                message: page.props.flash.warning,
            })
        }
        if (page.props.flash.error) {
            alert.add({

                type: page.props.flash.notification.type,
                placement: page.props.flash.notification.placement,
                size: page.props.flash.notification.size,
                autodismiss: page.props.flash.notification.autodismiss,

                variant: 'error',
                message: page.props.flash.error,
            })
        }
        if (page.props.flash.success) {
            alert.add({

                type: page.props.flash.notification.type,
                placement: page.props.flash.notification.placement,
                size: page.props.flash.notification.size,
                autodismiss: page.props.flash.notification.autodismiss,

                variant: 'success',
                message: page.props.flash.success,
            })
        }
    }
}

const destroyAlert = () => {
    alert.$reset()
}

const initAlert = () => {
    const flash = page.props.flash
    let hasFlash = false
    if (flash.notification.pipe === 'alert') {
        Object.keys(flash).forEach(function (key) {
            if (key === 'info' || key === 'warning' || key === 'error' || key === 'success') {
                if (flash[key] != '') {
                    hasFlash = true
                }
            }
        })
        if (hasFlash && !alert.message) {
            return initFlash()
        }
    }
}

onMounted(() => {
    destroyAlert()
    initAlert()
})

if (isClient.value) {
    let removeFinishEventListener = router.on("finish", () => {
        initAlert()
    })
    onUnmounted(() => removeFinishEventListener())
}
</script>
<template>
    <div class="fixed z-50 flex flex-col items-center justify-center w-full space-y-4" v-bind:class="[placementClass]">
        <template v-if="alert.show">
            <UINotificationAlertItem v-bind:show="alert.show" v-bind:type="alert.type"
                v-bind:placement="alert.placement" v-bind:variant="alert.variant" v-bind:size="alert.size"
                v-bind:autodismiss="alert.autodismiss" v-bind:message="alert.message" v-on:close-alert="destroyAlert()"
                v-bind:key="alert.id">
                <template v-if="!alert.message">
                    <slot />
                </template>
            </UINotificationAlertItem>
        </template>
    </div>
</template>
