<script lang="ts" setup>
import { ref, reactive, onMounted, watch } from 'vue'
import { randomID } from '@/utils/helpers'
import { useModalStore } from '@/stores/useModalStore'
import { UseFocusTrap } from '@vueuse/integrations/useFocusTrap/component'

const modal = useModalStore()
const modalID = modal.id ?? 'modal-' + randomID(15)
watch(
    () => modal.show,
    () => {
        if (modal.show == true) {
            showModal();
        } else {
            hideModal();
        }
    }
)
const emit = defineEmits(['close']);
const close = () => {
    if (modal.closeable == true) {
        emit('close');
    }
}

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
const modalInstance = reactive({
    instance: null
})
// Modal Methods
const showModal = () => {
    modalInstance.instance?.show()
}
const hideModal = () => {
    modalInstance.instance?.hide()
    close()
}

onMounted(() => {
    modalInstance.instance = new Modal(modalEl.value, options, instanceOptions)
    if (modal.show == true) {
        showModal()
    } else {
        hideModal()
    }
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
                        v-bind:class="[modal.fullScreenClass, modal.maxWidthClass]" v-bind:id="modalID"
                        v-bind:name="modalID" v-bind:key="modalID" v-bind:aria-labelledby="modalID" aria-modal="true"
                        aria-role="dialog">
                        <Transition enter-active-class="duration-300 ease-out"
                            enter-from-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
                            enter-to-class="translate-y-0 opacity-100 sm:scale-100"
                            leave-active-class="duration-200 ease-in"
                            leave-from-class="translate-y-0 opacity-100 sm:scale-100"
                            leave-to-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95">
                            <template v-if="modal.payload">
                                <UseFocusTrap v-if="modal.show" :options="{ immediate: true }">
                                    <component :is="modal.payload" v-bind="modal.props ?? null" />
                                </UseFocusTrap>
                            </template>
                            <template v-else>
                                <UseFocusTrap v-if="modal.show" :options="{ immediate: true }">
                                    <slot />
                                </UseFocusTrap>
                            </template>
                        </Transition>
                    </div>
                </Transition>
            </div>
        </div>
    </Transition>
</template>
