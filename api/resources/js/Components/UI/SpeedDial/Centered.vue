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
    <Transition v-bind:duration="{ enter: 1000, leave: 500 }">
        <div>
            <!-- Trigger -->
            <div class="fixed flex items-center bottom-4 left-[50%] z-999 justify-items-center" v-show="!show">
                <a href="#" v-on:click.prevent="toggleShow" v-bind:class="{ 'opacity-75': !hover }"
                    v-on:mouseenter="hover = true" v-on:mouseleave="hover = false" v-on:keyup.escape="show = false"
                    class="inline-flex items-center justify-center text-base tracking-wide text-center text-white align-middle duration-500 border rounded-full size-7 bg-primary-600 hover:bg-primary-700 border-primary-600 hover:border-primary-700">
                    <Icon icon="tabler:settings" class="size-5 animate-spin" />
                </a>
            </div>
            <!-- Menu -->
            <div class="fixed flex flex-row items-center bottom-4 left-[calc(50%-78px)] gap-2 p-1 text-sm font-medium text-gray-900 bg-white border border-gray-400 rounded-full focus:outline-none focus:ring-4 focus:ring-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-400 dark:focus:ring-gray-700 justify-items-center"
                v-show="show">
                <div>
                    <!-- Back To Top -->
                    <UIBackToTop placement="top" />
                </div>
                <div>
                    <!-- Language Switcher -->
                    <UISwitcherLanguage mode="inline" placement="top" />
                </div>
                <div>
                    <!-- Trigger -->
                    <a href="#" v-on:click.prevent="toggleShow" v-bind:class="{ 'opacity-75': !hover }"
                        v-on:mouseenter="hover = true" v-on:mouseleave="hover = false" v-on:keyup.escape="show = false"
                        class="inline-flex items-center justify-center text-base tracking-wide text-center text-white align-middle duration-500 border rounded-full size-7 bg-primary-600 hover:bg-primary-700 border-primary-600 hover:border-primary-700">
                        <Icon icon="tabler:x" class="size-4" />
                    </a>
                </div>
                <div>
                    <!-- Screen Switcher -->
                    <UISwitcherScreen placement="top" />
                </div>
                <div>
                    <!-- Theme Switcher -->
                    <UISwitcherTheme placement="top" />
                </div>
            </div>
        </div>
    </Transition>
</template>
