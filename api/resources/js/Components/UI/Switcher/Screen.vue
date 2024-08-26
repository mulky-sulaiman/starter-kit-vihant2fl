<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { Icon } from '@iconify/vue'

const isFullScreen = ref(false)

const props = defineProps({
    placement: {
        type: String,
        deault: 'left'
    }
})

const toggleFullScreen = () => {
    isFullScreen.value = !isFullScreen.value;
    const doc = window.document;
    const docEl = doc.documentElement;

    const requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl
        .webkitRequestFullScreen || docEl.msRequestFullscreen;
    const cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc
        .msExitFullscreen;

    if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc
        .msFullscreenElement) {
        requestFullScreen.call(docEl);
        new Audio('/assets/audio/maximize.mp3').play()
    } else {
        cancelFullScreen.call(doc);
        new Audio('/assets/audio/minimize.mp3').play()
    }
}
</script>
<template>
    <div>
        <a href="#" v-on:click.prevent="toggleFullScreen" data-tooltip-target="tooltip-screen-switcher"
            v-bind:data-tooltip-placement="placement"
            class="inline-flex items-center justify-center text-base tracking-wide text-center text-gray-400 align-middle duration-500 bg-transparent border border-gray-400 rounded-full size-7 hover:bg-primary-600 hover:border-primary-400 hover:text-white">
            <Icon icon="tabler:maximize" class="size-5" v-show="!isFullScreen" />
            <Icon icon="tabler:minimize" class="size-5" v-show="isFullScreen" />
        </a>
        <div id="tooltip-screen-switcher" role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            <span v-text="isFullScreen ? $t('global.exit_fullscreen') : $t('global.enter_fullscreen')"></span>
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
    </div>
</template>
