<script lang="ts" setup>
import { usePage, router } from '@inertiajs/vue3'
import UINotificationToastItem from '@/Components/UI/Notification/Toast/Item.vue'
import { onMounted, onUnmounted } from 'vue'
import { useToastStore } from '@/stores/useToastStore'


const toast = useToastStore()

// import { useClient } from '@/global-composables'
import useClient from '@/composables/useClient.ts'
const { isClient } = useClient()

const page = usePage();

const initFlash = () => {
    if (page.props.flash.notification.pipe === 'toast') {
        if (page.props.flash.info) {
            toast.add({
                type: 'info',
                message: page.props.flash.info,
                autodismiss: page.props.flash.notification.autodismiss,
            })
        }
        if (page.props.flash.warning) {
            toast.add({
                type: 'warning',
                message: page.props.flash.warning,
                autodismiss: page.props.flash.notification.autodismiss,
            })
        }
        if (page.props.flash.error) {
            toast.add({
                type: 'error',
                message: page.props.flash.error,
                autodismiss: page.props.flash.notification.autodismiss,
            })
        }
        if (page.props.flash.success) {
            toast.add({
                type: 'success',
                message: page.props.flash.success,
                autodismiss: page.props.flash.notification.autodismiss,
            })
        }
    }

}

const destroyToast = () => {
    toast.$reset()
}

const initToast = () => {
    const flash = page.props.flash
    let hasFlash = false
    if (flash.notification.pipe === 'toast') {
        Object.keys(flash).forEach(function (key) {
            if (key === 'info' || key === 'warning' || key === 'error' || key === 'success') {
                if (flash[key] != '') {
                    hasFlash = true
                }
            }
        })
        if (hasFlash && toast.items.length === 0) {
            return initFlash()
        }
    }
}

onMounted(() => {
    destroyToast()
    initToast()
})

if (isClient.value) {
    let removeFinishEventListener = router.on("finish", () => {
        initToast()
    })
    onUnmounted(() => removeFinishEventListener())
}

function remove(index) {
    toast.remove(index)
}
</script>
<template>
    <TransitionGroup tag="div" enter-from-class="translate-x-full opacity-0" enter-active-class="duration-500"
        leave-active-class="duration-500" leave-to-class="translate-x-full opacity-0"
        class="fixed z-50 w-full max-w-[90%] md:max-w-[20%] space-y-4 min-w-xs top-4 right-4">
        <UINotificationToastItem v-for="(item, index) in toast.items" v-bind:key="item.key" v-bind:type="item.type"
            v-bind:message="item.message" v-bind:autodismiss="item.autodismiss" v-bind:duration="3000"
            v-on:remove="remove(index)" />
    </TransitionGroup>
</template>
