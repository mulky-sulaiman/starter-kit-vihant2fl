<script lang="ts" setup>
import { ref, reactive, onMounted, watch } from 'vue'
import { randomID } from '@/utils/helpers'
import { useDrawerStore } from '@/stores/useDrawerStore'
import { UseFocusTrap } from '@vueuse/integrations/useFocusTrap/component'

const drawer = useDrawerStore()
const drawerID = drawer.id ?? 'drawer-' + randomID(15)

watch(
    () => drawer.show,
    () => {
        if (drawer.show) {
            showDrawer();
        } else {
            hideDrawer();
        }
    }
);

// watchEffect(() => {
//     if (drawer.show) {
//         showDrawer();
//     } else {
//         hideDrawer();
//     }
// })

const emit = defineEmits(['close']);
const close = () => {
    if (drawer.closeable) {
        emit('close');
    }
};


// Drawer Options
const options = {
    placement: drawer.placement,
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
const drawerInstance = reactive({
    instance: null
})
// Modal Methods
const showDrawer = () => {
    drawerInstance.instance?.show()
}
const hideDrawer = () => {
    drawerInstance.instance?.hide()
    close()
}

const initDrawer = () => {
    drawerInstance.instance = new Drawer(drawerEl.value, options, instanceOptions)
}
onMounted(() => {

    if (drawer.show) {
        showDrawer()
    } else {
        hideDrawer()
    }
})

</script>

<template>
    <Transition leave-active-class="duration-200">
        <div>
            <Transition enter-active-class="duration-300 ease-out" enter-from-class="opacity-0"
                enter-to-class="opacity-100" leave-active-class="duration-200 ease-in" leave-from-class="opacity-100"
                leave-to-class="opacity-0">
                <div ref="drawerEl" v-bind:id="drawerID" v-bind:name="drawerID" class=""
                    v-bind:class="[drawer.placementClass, drawer.extraWidthClass, drawer.transitionClass]"
                    v-show="drawer.show && drawer.placement" tabindex="-1" v-bind:aria-labelledby="drawerID"
                    v-bind="$attrs" v-bind:key="drawerID">
                    <!-- <Transition enter-active-class="duration-300 ease-out"
                        enter-from-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
                        enter-to-class="translate-y-0 opacity-100 sm:scale-100"
                        leave-active-class="duration-200 ease-in"
                        leave-from-class="translate-y-0 opacity-100 sm:scale-100"
                        leave-to-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"> -->
                    <template v-if="drawer.payload">
                        <UseFocusTrap v-if="drawer.show" :options="{ immediate: true }">
                            <component :is="drawer.payload" v-bind="drawer.props ?? null" />
                        </UseFocusTrap>
                    </template>
                    <template v-else>
                        <UseFocusTrap v-if="drawer.show" :options="{ immediate: true }">
                            <slot />
                        </UseFocusTrap>
                    </template>
                    <!-- </Transition> -->
                </div>
            </Transition>
            <div class="fixed inset-0 z-40 transition duration-100 bg-opacity-50 bg-gray-900/50 dark:bg-gray-900/80 backdrop-filter backdrop-blur-[2.5px] dark:bg-opacity-50"
                v-if="drawer.show && drawer.placement" v-bind:key="'backdrop-drawer'">
            </div>
        </div>
    </Transition>
</template>
