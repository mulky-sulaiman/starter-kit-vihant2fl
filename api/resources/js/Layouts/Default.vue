<script lang="ts" setup>
import { onMounted } from 'vue'
import StaticMode from '@/Components/Static/Mode.vue'
import UISpeedDial from '@/Components/UI/SpeedDial/Index.vue'
import UIConfirmDialog from '@/Components/UI/ConfirmDialog.vue'
import UINotificationToast from '@/Components/UI/Notification/Toast/Index.vue'
import UINotificationAlert from '@/Components/UI/Notification/Alert/Index.vue'
import UINotificationBanner from '@/Components/UI/Notification/Banner/Index.vue';
import { Modal } from 'momentum-modal'
import { Howl } from 'howler'
import { router } from '@inertiajs/vue3'

// import { useClient } from '@/global-composables'
import useClient from '@/composables/useClient.ts'
const { isClient } = useClient()

const clickEffect = (element) => {
    if (isClient.value) {
        const elements = document.querySelectorAll(element)
        elements.forEach(el => {
            el.addEventListener('click', event => {
                var sound = new Howl({
                    src: ['/assets/audio/click.mp3'],
                    autoplay: true,
                    volume: 0.3,
                });
                sound.play();
            })
        })
    }
}

onMounted(() => {
    if (isClient.value) {
        clickEffect('a')
        clickEffect('button')
        initFlowbite()
    }
})

if (isClient.value) {
    router.on('finish', (event) => {
        clickEffect('a')
        clickEffect('button')
        initFlowbite()
    })
    router.on('navigate', (event) => {
        clickEffect('a')
        clickEffect('button')
        initFlowbite()
    })
}
</script>
<template>
    <UIHead />
    <div>
        <slot />
    </div>
    <!--Mode-->
    <StaticMode mode="inertia" />
    <!--Speed Dial-->
    <UISpeedDial mode="vertical" />
    <!--Modals-->
    <Modal />
    <UIConfirmDialog />
    <!--Notifications-->
    <UINotificationToast />
    <UINotificationAlert />
    <UINotificationBanner />
</template>
