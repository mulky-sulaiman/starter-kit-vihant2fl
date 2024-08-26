<script lang="ts" setup>
import { computed, ref, getCurrentInstance, onMounted } from 'vue'
import { randomID } from '@/utils/helpers'

const props = defineProps({
    name: {
        type: String,
        default: 'alert-' + randomID(15),
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
        default: 'info',
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
const closeAlert = ref(null)
const countdown = ref(3)
const initCountdown = () => {
    setInterval(function () {
        countdown.value = --countdown.value <= 0 ? 3 : countdown.value
    }, 1000)
}
const initClose = () => {
    setTimeout(function () {
        if (props.show) instance.refs.closeAlert.click()
    }, 2800)
}

const sizeClass = (props.size) ? 'min-w-' + props.size + ' max-w-' + props.size : null
const btnClass = computed(() => {
    return {
        info: 'bg-info-50 text-info-500 focus:ring-info-400 hover:bg-info-200 dark:text-info-400 dark:hover:bg-info-100',
        warning: 'bg-warning-50 text-warning-500 focus:ring-warning-400 hover:bg-warning-200 dark:text-warning-400 dark:hover:bg-warning-100',
        error: 'bg-danger-50 text-danger-500 focus:ring-danger-400 hover:bg-danger-200 dark:text-danger-400 dark:hover:bg-danger-100',
        success: 'bg-success-50 text-success-500 focus:ring-success-400 hover:bg-success-200 dark:text-success-400 dark:hover:bg-success-100',
    }[props.variant]
})
const baseClass = computed(() => {
    return {
        default: 'flex items-center justify-between p-4 dark:bg-gray-800',
        boxed: 'flex items-center justify-between p-4 border rounded-lg dark:bg-gray-800',
    }[props.type]
})
const borderClass = computed(() => {
    return {
        default: (props.placement == 'top') ? 'border-b-4' : 'border-t-4',
        boxed: 'border',
    }[props.type]
})
const variantClass = computed(() => {
    if (props.type == 'default') {
        return {
            info: 'text-info-800 border-info-300 bg-info-50 dark:text-info-400 dark:border-info-800',
            warning: 'text-warning-800 border-warning-300 bg-warning-50 dark:text-warning-400 dark:border-warning-800',
            error: 'text-danger-800 border-danger-300 bg-danger-50 dark:text-danger-400 dark:border-danger-800',
            success: 'text-success-800 border-success-300 bg-success-50 dark:text-success-400 dark:border-success-800',
        }[props.variant]
    } else if (props.type == 'boxed') {
        return {
            info: 'text-info-800 border-info-300 bg-info-50 dark:text-info-400',
            warning: 'text-warning-800 border-warning-300 bg-warning-50 dark:text-warning-400',
            error: 'text-danger-800 border-danger-300 bg-danger-50 dark:text-danger-400',
            success: 'text-success-800 border-success-300 bg-success-50 dark:text-success-400',
        }[props.variant]
    }
})

onMounted(() => {
    if (props.autodismiss) {
        initCountdown()
        initClose()
    }
})

const emit = defineEmits(["close-alert"]);
</script>
<template>
    <Transition v-bind:duration="{ enter: 1000, leave: 500 }">
        <div v-bind:id="name" v-show="show" v-bind:class="['w-full', baseClass, borderClass, variantClass, sizeClass]"
            role="alert">
            <div class="flex items-center w-full"
                v-bind:class="{ 'justify-center': type == 'default', 'justify-start': type == 'boxed' }">
                <template v-if="message">
                    <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg" v-bind:class="{
                        'text-info-500 bg-info-100 border border-info-300 dark:bg-info-800 dark:text-info-200': variant ==
                            'info',
                        'text-warning-500 bg-warning-100 border border-warning-300 dark:bg-warning-800 dark:text-warning-200': variant ==
                            'warning',
                        'text-danger-500 bg-danger-100 border border-danger-300 dark:bg-danger-800 dark:text-danger-200': variant ==
                            'error',
                        'text-success-500 bg-success-100 border border-success-300 dark:bg-success-800 dark:text-success-200': variant ==
                            'success',
                    }">
                        <!-- Info -->
                        <svg v-show="variant == 'info'" class="flex-shrink-0 w-4 h-4" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                            viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z"
                                clip-rule="evenodd" />
                        </svg>
                        <!-- Success -->
                        <svg v-show="variant == 'success'" class="flex-shrink-0 w-4 h-4" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <!-- Danger -->
                        <svg v-show="variant == 'error'" class="flex-shrink-0 w-4 h-4" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
                        </svg>
                        <!-- Warning -->
                        <svg v-show="variant == 'warning'" class="flex-shrink-0 w-4 h-4" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
                        </svg>
                        <span class="sr-only" v-text="$t('global.info')"></span>
                    </div>
                    <div class="text-sm font-medium ms-3" v-html="message"></div>
                </template>
                <template v-else>
                    <slot />
                </template>
            </div>
            <template v-if="autodismiss">
                <button type="button" ref="closeAlert" v-on:click.prevent="emit('close-alert')" id="countdown"
                    class="ms-auto -mx-1.5 -my-1.5 rounded-full focus:ring-2 p-1.5 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:hover:bg-gray-700"
                    v-bind:class="btnClass" v-bind:data-dismiss-target="'#' + name + ''"
                    v-bind:aria-label="$t('global.close')" @mouseenter="hover = true" @mouseleave="hover = false">
                    <span class="sr-only" v-text="$t('global.close')"></span>
                    <div id="countdown-number" class="font-bold" v-bind:class="{
                        'text-info-600': variant == 'info',
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
                        'text-info-600': variant == 'info',
                        'text-warning-600': variant == 'warning',
                        'text-danger-600': variant == 'error',
                        'text-success-600': variant == 'success',
                    }">
                        <circle r="18" cx="20" cy="20" stroke="currentColor"></circle>
                    </svg>
                </button>
            </template>
            <template v-else>
                <button type="button" ref="closeAlert" v-on:click.prevent="emit('close-alert')"
                    class="ms-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:hover:bg-gray-700"
                    v-bind:class="{
                        'bg-info-50 text-info-500 focus:ring-info-400 hover:bg-info-200 dark:text-info-400': variant == 'info',
                        'bg-warning-50 text-warning-500 focus:ring-warning-400 hover:bg-warning-200 dark:text-warning-400': variant == 'warning',
                        'bg-danger-50 text-danger-500 focus:ring-danger-400 hover:bg-danger-200 dark:text-danger-400': variant == 'error',
                        'bg-success-50 text-success-500 focus:ring-success-400 hover:bg-success-200 dark:text-success-400': variant == 'success',
                    }" v-bind:data-dismiss-target="'#' + name + ''" v-bind:aria-label="$t('global.close')">
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
