<script lang="ts" setup>
import { computed, ref, getCurrentInstance, onMounted } from 'vue'
import { randomID } from '@/utils/helpers'

const props = defineProps({
    name: {
        type: String,
        default: 'banner-' + randomID(15),
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
    message: {
        type: String,
        default: null,
    },
    autodismiss: {
        type: Boolean,
        default: false,
    },
    duration: {
        type: Number,
        default: 3000,
    }
})

const instance = getCurrentInstance()
let hover = ref(false)
const closeBanner = ref(null)
const countdown = ref(3)
const initCountdown = () => {
    setInterval(function () {
        countdown.value = --countdown.value <= 0 ? 3 : countdown.value
    }, 1000)
}
const initClose = () => {
    setTimeout(function () {
        if (props.show) instance.refs.closeBanner.click()
    }, 2800)
}

const baseClass = computed(() => {
    return {
        default: 'flex items-center justify-between p-4 dark:bg-gray-800',
        boxed: 'flex items-center justify-between p-4 border rounded-lg dark:bg-gray-800',
    }[props.type]
})
const variantClass = 'text-gray-800 border-gray-300 dark:text-gray-400'
const sizeClass = (props.size) ? 'min-w-' + props.size + ' max-w-' + props.size : null
const borderClass = computed(() => {
    return {
        default: (props.placement == 'top') ? 'border-b' : 'border-t',
        boxed: 'border',
    }[props.type]
})
const bgClass = computed(() => {
    return {
        neutral: 'bg-gray-50',
        light: 'bg-white',
    }[props.variant]
})
const btnClass = 'text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-300'

onMounted(() => {
    if (props.autodismiss) {
        initCountdown()
        initClose()
    }
})

const emit = defineEmits(["close-banner"]);
</script>
<template>
    <Transition v-bind:duration="{ enter: 1000, leave: 500 }">
        <div v-bind:id="name" v-show="show"
            v-bind:class="['w-full', baseClass, borderClass, variantClass, bgClass, sizeClass]" role="banner">
            <div class="flex items-center w-full"
                v-bind:class="{ 'justify-center': type == 'default', 'justify-start': type == 'boxed' }">
                <template v-if="message">
                    <div class="flex items-center mx-auto">
                        <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                            <span
                                class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 p-1 rounded-full bg-info-200 me-3 dark:bg-info-600">
                                <svg class="w-3 h-3 text-info-500 dark:text-info-400" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                                    <path
                                        d="M15 1.943v12.114a1 1 0 0 1-1.581.814L8 11V5l5.419-3.871A1 1 0 0 1 15 1.943ZM7 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4ZM4 17v-5h1v5H4ZM16 5.183v5.634a2.984 2.984 0 0 0 0-5.634Z" />
                                </svg>
                                <span class="sr-only" v-text="$t('global.info')"></span>
                            </span>
                            <span v-html="message"></span>
                        </p>
                    </div>
                </template>
                <template v-else>
                    <slot />
                </template>
            </div>
            <template v-if="autodismiss">
                <button type="button" ref="closeBanner" v-on:click.prevent="emit('close-banner')" id="countdown"
                    class="ms-auto -mv-1.5 -my-1.5 rounded-full focus:ring-2 p-1.5 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:hover:bg-gray-700"
                    v-bind:class="btnClass" v-bind:data-dismiss-target="'#' + name + ''"
                    v-bind:aria-label="$t('global.close')" @mouseenter="hover = true" @mouseleave="hover = false">
                    <span class="sr-only" v-text="$t('global.close')"></span>
                    <div id="countdown-number" class="font-bold" v-bind:class="{
                        'text-info-600': variant == 'neutral' || variant == 'light',
                        'text-warning-600': variant == 'warning',
                        'text-danger-600': variant == 'error',
                        'text-success-600': variant == 'success',
                    }">
                        <span class="mr-1" v-text="countdown" v-show="!hover"></span>
                        <svg v-show="hover" class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </div>
                    <svg class="svg" v-bind:class="{
                        'text-info-600': variant == 'neutral' || variant == 'light',
                        'text-warning-600': variant == 'warning',
                        'text-danger-600': variant == 'error',
                        'text-success-600': variant == 'success',
                    }">
                        <circle r="18" cx="20" cy="20" stroke="currentColor"></circle>
                    </svg>
                </button>
            </template>
            <template v-else>
                <button type="button" ref="closeBanner" v-on:click.prevent="emit('close-banner')"
                    class="ms-auto -mv-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:hover:bg-gray-700"
                    v-bind:class="btnClass" v-bind:data-dismiss-target="'#' + name + ''"
                    v-bind:aria-label="$t('global.close')">
                    <span class="sr-only" v-text="$t('global.close')"></span>
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                </button>
            </template>
        </div>
    </Transition>
</template>
<style scoped>
#countdown {
    position: relative;
    /*margin: auto;
    margin-top: 100px;*/
    height: 40px;
    width: 40px;
    text-align: center;
}

#countdown-number {
    /* color: black; */
    display: inline-block;
    line-height: 40px;
}

.svg {
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 40px;
    transform: rotateY(-180deg) rotateZ(-90deg);
}

.svg circle {
    stroke-dasharray: 113px;
    stroke-dashoffset: 0px;
    stroke-linecap: round;
    stroke-width: 3px;
    /* stroke: black; */
    fill: none;
    animation: countdown 3s linear infinite forwards;
}

@keyframes countdown {
    from {
        stroke-dashoffset: 113px;
    }

    to {
        stroke-dashoffset: 0px;
    }
}
</style>
