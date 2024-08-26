<script lang="ts" setup>
import { onMounted, ref, computed, reactive, watch } from 'vue'
import { randomID } from '@/utils/helpers'
import { UseFocusTrap } from '@vueuse/integrations/useFocusTrap/component'

const props = defineProps({
    name: {
        type: String,
        default: 'modal-' + randomID(15),
    },
    show: {
        type: Boolean,
        default: false,
    },
    maxWidth: {
        type: String,
        default: 'sm',
    },
    closeable: {
        type: Boolean,
        default: true,
    },
    fullScreen: {
        type: Boolean,
        default: false,
    },

});

const maxWidthClass = computed(() => {
    return {
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
    }[props.maxWidth];
});

const fullScreenClass = computed(() => {
    return {
        false: 'md:min-w-0 md:min-h-0',
        true: '',
    }[props.fullScreen];
});

watch(
    () => props.show,
    () => {
        if (props.show) {
            showModal();
        } else {
            hideModal();
        }
    }
);

const emit = defineEmits(['close']);
const close = () => {
    if (props.closeable) {
        emit('close');
    }
};


// Modal Options
const options = {
    placement: 'center-center',
    backdrop: 'static',
    backdropClasses:
        'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40 backdrop-filter backdrop-blur-[2.5px] bg-opacity-50 dark:bg-opacity-50 transition duration-100',
    closable: false,
    keyboard: false,
    onHide: () => {
        // console.log('modal is hidden');
    },
    onShow: () => {
        // console.log('modal is shown');
    },
    onToggle: () => {
        // console.log('modal has been toggled');
    },
};
const instanceOptions = {
    id: 'modalEl',
    override: true
};
// Modal Instances
const modalEl = ref(null)
const modal = reactive({
    instance: null
})
// Modal Methods
const showModal = () => {
    modal.instance?.show()
}
const hideModal = () => {
    modal.instance?.hide()
    close()
}

onMounted(() => {
    modal.instance = new Modal(modalEl.value, options, instanceOptions)
    if (props.show) {
        showModal()
    } else {
        hideModal()
    }
})

defineOptions({
    inheritAttrs: false
})

</script>

<template>
    <Transition leave-active-class="duration-200">
        <div>
            <div ref="modalEl" tabindex="-1" aria-hidden="true"
                class="fixed top-0 bottom-0 left-0 right-0 z-50 hidden w-full h-full max-h-full p-0 overflow-x-hidden overflow-y-auto md:p-4 md:inset-0">
                <Transition enter-active-class="duration-300 ease-out" enter-from-class="opacity-0"
                    enter-to-class="opacity-100" leave-active-class="duration-200 ease-in"
                    leave-from-class="opacity-100" leave-to-class="opacity-0">
                    <div class="relative w-full max-h-full min-w-[100vw] min-h-[100vh]"
                        v-bind:class="[fullScreenClass, maxWidthClass]">
                        <Transition enter-active-class="duration-300 ease-out"
                            enter-from-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
                            enter-to-class="translate-y-0 opacity-100 sm:scale-100"
                            leave-active-class="duration-200 ease-in"
                            leave-from-class="translate-y-0 opacity-100 sm:scale-100"
                            leave-to-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95">
                            <UseFocusTrap v-if="show" :options="{ immediate: true }">
                                <slot />
                            </UseFocusTrap>
                        </Transition>
                    </div>
                </Transition>
            </div>
        </div>
    </Transition>
</template>
