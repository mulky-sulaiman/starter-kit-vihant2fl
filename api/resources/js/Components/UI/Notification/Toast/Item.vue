<script lang="ts" setup>
import { onMounted, computed, ref } from "vue"

const props = defineProps({
    type: {
        type: String,
        default: 'info',
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
        default: 3000
    }
});

let hover = ref(false)

const countdownNumberEl = ref(null)
const countdown = ref(3)
const initCountdown = () => {
    setInterval(function () {
        countdown.value = --countdown.value <= 0 ? 3 : countdown.value;
    }, 1000);
}

const btnClass = computed(() => {
    return {
        info: 'bg-info-50 text-info-500 focus:ring-info-400 hover:bg-info-200 dark:text-info-400 dark:hover:bg-info-100',
        warning: 'bg-warning-50 text-warning-500 focus:ring-warning-400 hover:bg-warning-200 dark:text-warning-400 dark:hover:bg-warning-100',
        error: 'bg-danger-50 text-danger-500 focus:ring-danger-400 hover:bg-danger-200 dark:text-danger-400 dark:hover:bg-danger-100',
        success: 'bg-success-50 text-success-500 focus:ring-success-400 hover:bg-success-200 dark:text-success-400 dark:hover:bg-success-100',
    }[props.type]
})

const typeBgClass = computed(() => {
    return {
        info: 'text-info-500 bg-info-100 dark:bg-info-800 dark:text-info-200',
        warning: 'text-warning-500 bg-warning-100 dark:bg-warning-800 dark:text-warning-200',
        error: 'text-danger-500 bg-danger-100 dark:bg-danger-800 dark:text-danger-200',
        success: 'text-success-500 bg-success-100 dark:bg-success-800 dark:text-success-200',
    }[props.type];
})

const typeClass = computed(() => {
    return {
        info: 'border text-info-500 dark:text-info-400 border-info-500 dark:border-info-400',
        warning: 'border text-warning-500 dark:text-warning-400 border-warning-500 dark:border-warning-400',
        error: 'border text-danger-500 dark:text-danger-400 border-danger-400 dark:border-danger-500',
        success: 'border text-success-500 dark:text-success-400 border-success-500 dark:border-success-400',
    }[props.type];
})

const typeBtnClass = computed(() => {
    return {
        info: 'text-info-400 hover:text-info-900 dark:text-info-500 dark:hover:text-info-300',
        warning: 'text-warning-400 hover:text-warning-900 dark:text-warning-500 dark:hover:text-warning-300',
        error: 'text-danger-400 hover:text-danger-900 dark:text-danger-500 dark:hover:text-danger-300',
        success: 'text-success-400 hover:text-success-900 dark:text-success-500 dark:hover:text-success-300',
    }[props.type];
})

const countdownClass = computed(() => {
    return {
        info: 'text-info-600',
        warning: 'text-warning-600',
        error: 'text-danger-600',
        success: 'text-success-600',
    }[props.type];
})

const countdownHoverClass = computed(() => {
    return {
        info: 'hover:bg-info-100 dark:hover:bg-info-200 focus:ring-info-300',
        warning: 'hover:bg-warning-100 dark:hover:bg-warning-200 focus:ring-warning-300',
        error: 'hover:bg-danger-100 dark:hover:bg-danger-200 focus:ring-danger-300',
        success: 'hover:bg-success-100 dark:hover:bg-success-200 focus:ring-success-300',
    }[props.type];
})

onMounted(() => {
    initCountdown()
    if (props.autodismiss) {
        setTimeout(() => emit("remove"), props.duration)
    }
});

const emit = defineEmits(["remove"]);
</script>
<template>
    <div class="flex flex-col bg-white border rounded-lg shadow dark:bg-gray-800" v-bind:class="[typeClass]"
        role="alert">
        <div class="flex items-center justify-between p-4">
            <div class="flex items-center justify-start w-full">
                <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg" v-bind:class="{
                    'text-info-500 bg-info-100 border border-info-300 dark:bg-info-800 dark:text-info-200': type ==
                        'info',
                    'text-warning-500 bg-warning-100 border border-warning-300 dark:bg-warning-800 dark:text-warning-200': type ==
                        'warning',
                    'text-danger-500 bg-danger-100 border border-danger-300 dark:bg-danger-800 dark:text-danger-200': type ==
                        'error',
                    'text-success-500 bg-success-100 border border-success-300 dark:bg-success-800 dark:text-success-200': type ==
                        'success',
                }">
                    <!-- Info -->
                    <svg v-show="type == 'info'" class="flex-shrink-0 w-4 h-4" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                        viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z"
                            clip-rule="evenodd" />
                    </svg>
                    <!-- Success -->
                    <svg v-show="type == 'success'" class="flex-shrink-0 w-4 h-4" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <!-- Danger -->
                    <svg v-show="type == 'error'" class="flex-shrink-0 w-4 h-4" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
                    </svg>
                    <!-- Warning -->
                    <svg v-show="type == 'warning'" class="flex-shrink-0 w-4 h-4" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
                    </svg>
                    <span class="sr-only" v-text="type"></span>
                </div>
                <div class="text-sm font-medium ms-3" v-html="message"></div>

            </div>
            <template v-if="autodismiss">
                <button type="button" v-on:click.prevent="emit('remove')" id="countdown"
                    class="ms-auto -mx-1.5 -my-1.5 rounded-full focus:ring-2 p-1.5 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:hover:bg-gray-700"
                    v-bind:class="btnClass" v-bind:aria-label="$t('global.close')" v-on:mouseenter="hover = true"
                    v-on:mouseleave="hover = false">
                    <span class="sr-only" v-text="$t('global.close')"></span>
                    <div id="countdown-number" class="font-bold" v-bind:class="{
                        'text-info-600': type == 'info',
                        'text-warning-600': type == 'warning',
                        'text-danger-600': type == 'error',
                        'text-success-600': type == 'success',
                    }">
                        <span class="mr-1" v-text="countdown" v-show="!hover"></span>
                        <svg v-show="hover" class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </div>
                    <svg class="svg" v-bind:class="{
                        'text-info-600': type == 'info',
                        'text-warning-600': type == 'warning',
                        'text-danger-600': type == 'error',
                        'text-success-600': type == 'success',
                    }">
                        <circle r="18" cx="20" cy="20" stroke="currentColor"></circle>
                    </svg>
                </button>
            </template>
            <template v-else>
                <button type="button" v-on:click.prevent="emit('remove')"
                    class="ms-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:hover:bg-gray-700"
                    v-bind:class="{
                        'bg-info-50 text-info-500 focus:ring-info-400 hover:bg-info-200 dark:text-info-400': type == 'info',
                        'bg-warning-50 text-warning-500 focus:ring-warning-400 hover:bg-warning-200 dark:text-warning-400': type == 'warning',
                        'bg-danger-50 text-danger-500 focus:ring-danger-400 hover:bg-danger-200 dark:text-danger-400': type == 'error',
                        'bg-success-50 text-success-500 focus:ring-success-400 hover:bg-success-200 dark:text-success-400': type == 'success',
                    }" v-bind:aria-label="$t('global.close')">
                    <span class="sr-only" v-text="$t('global.close')"></span>
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                </button>
            </template>
        </div>
    </div>
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
