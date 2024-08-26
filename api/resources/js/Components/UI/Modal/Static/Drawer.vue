<script lang="ts" setup>
import { onMounted, ref, computed, reactive, watch } from 'vue'
import { randomID } from '@/utils/helpers'
import { UseFocusTrap } from '@vueuse/integrations/useFocusTrap/component'

const defaultID = 'drawer-' + randomID(15)
const props = defineProps({
    id: {
        type: String,
        default: null,
    },
    name: {
        type: String,
        default: null,
    },
    show: {
        type: Boolean,
        default: false,
    },
    placement: {
        type: String,
        default: 'left',
    },
    extraWidth: {
        type: String,
        default: null,
    },
    closeable: {
        type: Boolean,
        default: true,
    },
});

const placementClass = computed(() => {
    return {
        top: 'fixed top-0 left-0 right-0 z-50 w-full transition-transform -translate-y-full bg-white dark:bg-gray-800',
        right: 'fixed top-0 right-0 z-50 h-screen overflow-y-auto transition-transform translate-x-full bg-white w-80 dark:bg-gray-800 min-w-[100vw]',
        left: 'fixed top-0 left-0 z-50 h-screen overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800 min-w-[100vw]',
        bottom: 'fixed bottom-0 left-0 right-0 z-50 w-full overflow-y-auto transition-transform bg-white dark:bg-gray-800 transform-none',
    }[props.placement];
});

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
    }[props.extraWidth];
});

watch(
    () => props.show,
    () => {
        if (props.show) {
            showDrawer();
        } else {
            hideDrawer();
        }
    }
);

const emit = defineEmits(['close']);
const close = () => {
    if (props.closeable) {
        emit('close');
    }
};


// Drawer Options
const options = {
    placement: props.placement,
    backdrop: false,
    bodyScrolling: false,
    edge: false,
    edgeOffset: '',
    closable: false,
    keyboard: false,
    // backdropClasses:
    //     'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30',
    onHide: () => {
        // console.log('drawer is hidden');
    },
    onShow: () => {
        // console.log('drawer is shown');
    },
    onToggle: () => {
        // console.log('drawer has been toggled');
    },
};
const instanceOptions = {
    id: 'drawerEl',
    override: true
};
// Modal Instances
const drawerEl = ref(null)
const drawer = reactive({
    instance: null
})
// Modal Methods
const showDrawer = () => {
    drawer.instance?.show()
}
const hideDrawer = () => {
    drawer.instance?.hide()
    close()
}

onMounted(() => {
    drawer.instance = new Drawer(drawerEl.value, options, instanceOptions)
    if (props.show) {
        showDrawer()
    } else {
        hideDrawer()
    }
})
defineOptions({
    inheritAttrs: false
})
</script>

<template>
    <Transition leave-active-class="duration-200">
        <div>
            <Transition enter-active-class="duration-300 ease-out" enter-from-class="opacity-0"
                enter-to-class="opacity-100" leave-active-class="duration-200 ease-in" leave-from-class="opacity-100"
                leave-to-class="opacity-0">
                <div ref="drawerEl" class="transition-transform -translate-x-full"
                    v-bind:class="[placementClass, extraWidthClass]" v-show="show" tabindex="-1"
                    v-bind:aria-labelledby="name" v-bind="$attrs">
                    <Transition enter-active-class="duration-300 ease-out"
                        enter-from-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
                        enter-to-class="translate-y-0 opacity-100 sm:scale-100"
                        leave-active-class="duration-200 ease-in"
                        leave-from-class="translate-y-0 opacity-100 sm:scale-100"
                        leave-to-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95">
                        <!-- <UseFocusTrap v-if="show" v-bind:options="{ immediate: true }"> -->
                        <slot />
                        <!-- </UseFocusTrap> -->
                    </Transition>
                </div>
            </Transition>
            <div class="fixed inset-0 z-40 transition duration-100 bg-opacity-50 bg-gray-900/50 dark:bg-gray-900/80 backdrop-filter backdrop-blur-[2.5px] dark:bg-opacity-50"
                v-if="show" v-bind:key="'backdrop-drawer'">
            </div>
        </div>
    </Transition>
</template>
