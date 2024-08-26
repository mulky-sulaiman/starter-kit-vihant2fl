import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
    // States
    const id = ref(null)
    const show = ref(false)
    const maxWidth = ref('sm')
    const closeable = ref(true)
    const fullScreen = ref(false)
    const payload = ref(null)
    const props = ref(null)
    // Getters
    const maxWidthClass = computed(() => {
        return {
            xs: 'sm:max-w-xs',
            sm: 'sm:max-w-sm',
            md: 'sm:max-w-md',
            lg: 'sm:max-w-lg',
            xl: 'sm:max-w-xl',
            '2xl': 'sm:max-w-2xl',
            '3xl': 'sm:max-w-3xl',
            '4xl': 'sm:max-w-4xl',
            '5xl': 'sm:max-w-5xl',
            '6xl': 'sm:max-w-6xl',
            '7xl': 'sm:max-w-7xl',
            full: 'sm:max-w-full',
        }[maxWidth.value];
    })
    const fullScreenClass = computed(() => {
        return {
            false: 'md:min-w-0 md:min-h-0',
            true: '',
        }[fullScreen.value];
    })
    // Actions
    const $reset = () => {
        id.value = null
        show.value = false
        maxWidth.value = 'sm'
        closeable.value = true
        fullScreen.value = false
        payload.value = null
        props.value = null
    }
    return {
        id,
        show,
        maxWidth,
        closeable,
        fullScreen,
        payload,
        props,
        maxWidthClass,
        fullScreenClass,
        $reset
    }
})
