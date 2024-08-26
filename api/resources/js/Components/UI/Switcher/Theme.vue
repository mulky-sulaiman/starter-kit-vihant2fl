<script lang="ts" setup>
import { useColorMode } from '@vueuse/core'
import { Icon } from '@iconify/vue'

const mode = useColorMode()

const props = defineProps({
    placement: {
        type: String,
        deault: 'left'
    }
})

const toggleDarkMode = () => {
    if (mode.value == 'light') {
        mode.value = 'dark'
        new Audio('/assets/audio/dark.mp3').play()
    } else {
        mode.value = 'light'
        new Audio('/assets/audio/light.mp3').play()
    }
}
</script>
<template>
    <div data-tooltip-target="tooltip-theme-switcher" v-bind:data-tooltip-placement="placement">
        <a href="#" v-on:click.prevent="toggleDarkMode"
            class="inline-flex items-center justify-center text-base tracking-wide text-center text-gray-400 align-middle duration-500 bg-transparent border border-gray-400 rounded-full size-7 hover:bg-primary-600 hover:border-primary-400 hover:text-white">
            <Icon icon="tabler:sun" class="size-5" v-show="mode == 'dark'" />
            <Icon icon="tabler:moon" class="size-5" v-show="mode == 'light'" />
        </a>
        <div id="tooltip-theme-switcher" role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            <span v-text="mode == 'dark' ? $t('global.switch_light') : $t('global.switch_dark')"></span>
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
    </div>
</template>
