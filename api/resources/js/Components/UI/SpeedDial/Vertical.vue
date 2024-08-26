<script lang="ts" setup>
import { ref } from 'vue'
import UIBackToTop from '@/Components/UI/BackToTop.vue'
import UISwitcherLanguage from '@/Components/UI/Switcher/Language.vue'
import UISwitcherScreen from '@/Components/UI/Switcher/Screen.vue'
import UISwitcherTheme from '@/Components/UI/Switcher/Theme.vue'
import { Icon } from '@iconify/vue'

const show = ref(false)
const hover = ref(false)

const toggleShow = () => {
    show.value = !show.value
}

const toggleHover = () => {
    hover.value = !hover.value
}
</script>
<template>
    <div class="fixed flex flex-col-reverse items-center gap-3 bottom-4 right-4 z-999 justify-items-center">
        <!-- Trigger -->
        <div>
            <a href="#" v-on:click.prevent="toggleShow" v-bind:class="{ 'opacity-75': !hover }"
                v-on:mouseenter="hover = true" v-on:mouseleave="hover = false" v-on:keyup.escape="show = false"
                class="inline-flex items-center justify-center text-base tracking-wide text-center text-white align-middle duration-500 border rounded-full size-11 bg-primary-600 hover:bg-primary-700 border-primary-600 hover:border-primary-700">
                <Icon icon="tabler:settings" class="size-9 animate-spin" v-show="!show" />
                <Icon icon="tabler:x" class="size-9" v-show="show" />

            </a>
        </div>
        <!-- Menu -->
        <div class="flex flex-col items-center gap-2 p-1 text-sm font-medium text-gray-900 bg-white border border-gray-400 rounded-full focus:outline-none focus:ring-4 focus:ring-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-400 dark:focus:ring-gray-700 justify-items-center"
            v-show="show">
            <div>
                <!-- Back To Top -->
                <UIBackToTop placement="left" />
            </div>
            <div>
                <!-- Language Switcher -->
                <UISwitcherLanguage mode="dropdown" placement="left" />
            </div>
            <div>
                <!-- Screen Switcher -->
                <UISwitcherScreen placement="left" />
            </div>
            <div>
                <!-- Theme Switcher -->
                <UISwitcherTheme placement="left" />
            </div>
        </div>
    </div>
</template>
