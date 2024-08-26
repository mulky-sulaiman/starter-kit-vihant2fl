import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDrawerStore = defineStore('drawer', () => {
    // States
    const id = ref(null)
    const show = ref(false)
    const placement = ref(null)
    const extraWidth = ref(null)
    const closeable = ref(true)
    const payload = ref(null)
    const props = ref(null)
    // Getters
    const placementClass = computed(() => {
        return {
            null: '',
            top: 'fixed top-0 left-0 right-0 z-50 w-full bg-white dark:bg-gray-800',
            right: 'fixed top-0 right-0 z-50 h-screen overflow-y-auto bg-white w-80 dark:bg-gray-800 min-w-[100vw]',
            left: 'fixed top-0 left-0 z-50 h-screen overflow-y-auto bg-white w-80 dark:bg-gray-800 min-w-[100vw]',
            bottom: 'fixed bottom-0 left-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-800',
        }[placement.value];
    })
    const transitionClass = computed(() => {
        if (show.value == false) {
            return {
                null: '',
                top: 'transition-transform -translate-y-full',
                right: 'transition-transform translate-x-full',
                left: 'transition-transform -translate-x-full',
                bottom: 'transition-transform transform-none',
            }[placement.value];
        } else {
            return '';
        }
    })
    const extraWidthClass = computed(() => {
        return {
            null: 'md:min-w-min',
            10: 'md:min-w-[10vw]',
            20: 'md:min-w-[20vw]',
            30: 'md:min-w-[30vw]',
            40: 'md:min-w-[40vw]',
            50: 'md:min-w-[50vw]',
            60: 'md:min-w-[60vw]',
            70: 'md:min-w-[70vw]',
            80: 'md:min-w-[80vw]',
            90: 'md:min-w-[90vw]',
        }[extraWidth.value];
    })
    // Actions
    const $reset = () => {
        id.value = null
        show.value = false
        placement.value = null
        extraWidth.value = null
        closeable.value = true
        payload.value = null
        props.value = null
    }
    return {
        id,
        show,
        placement,
        extraWidth,
        closeable,
        payload,
        props,
        placementClass,
        transitionClass,
        extraWidthClass,
        $reset
    }
})
