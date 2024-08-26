<script lang="ts" setup>
import { onMounted } from 'vue'
import UIDashboardHeader from '@/Components/UI/Dashboard/Header/Index.vue'
import UIDashboardSidebar from '@/Components/UI/Dashboard/Sidebar/Index.vue'
import UIDashboardHeaderPage from '@/Components/UI/Dashboard/Header/Page.vue'

// import { useClient } from '@/global-composables'
import useClient from '@/composables/useClient.ts'
const { isClient } = useClient()

const slots = defineSlots()

const props = defineProps({
    header: {
        type: String,
        default: 'light'
    },
    sidebar: {
        type: String,
        default: 'light'
    },
    pageTitle: {
        type: String,
        default: null
    },
    breadCrumbs: {
        type: Object,
        default: {}
    }
})

const toggleSidebar = () => {
    if (isClient.value) {
        const sidebar = document.getElementById("sidebar");

        if (sidebar) {
            const toggleSidebarMobile = (
                sidebar,
                sidebarBackdrop,
                toggleSidebarMobileHamburger,
                toggleSidebarMobileClose
            ) => {
                sidebar.classList.toggle("hidden");
                sidebarBackdrop.classList.toggle("hidden");
                toggleSidebarMobileHamburger.classList.toggle("hidden");
                toggleSidebarMobileClose.classList.toggle("hidden");
            };

            const toggleSidebarMobileEl = document.getElementById(
                "toggleSidebarMobile"
            );
            const sidebarBackdrop = document.getElementById("sidebarBackdrop");
            const toggleSidebarMobileHamburger = document.getElementById(
                "toggleSidebarMobileHamburger"
            );
            const toggleSidebarMobileClose = document.getElementById(
                "toggleSidebarMobileClose"
            );
            const toggleSidebarMobileSearch = document.getElementById(
                "toggleSidebarMobileSearch"
            );

            toggleSidebarMobileSearch.addEventListener("click", () => {
                toggleSidebarMobile(
                    sidebar,
                    sidebarBackdrop,
                    toggleSidebarMobileHamburger,
                    toggleSidebarMobileClose
                );
            });

            toggleSidebarMobileEl.addEventListener("click", () => {
                toggleSidebarMobile(
                    sidebar,
                    sidebarBackdrop,
                    toggleSidebarMobileHamburger,
                    toggleSidebarMobileClose
                );
            });

            sidebarBackdrop.addEventListener("click", () => {
                toggleSidebarMobile(
                    sidebar,
                    sidebarBackdrop,
                    toggleSidebarMobileHamburger,
                    toggleSidebarMobileClose
                );
            });
        }
    }
}

onMounted(() => {
    if (isClient.value) {
        toggleSidebar()
    }
})

</script>
<template>
    <div>
        <!-- Header -->
        <UIDashboardHeader v-bind:header="header" />

        <div class="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
            <!-- Sidebar -->
            <UIDashboardSidebar v-bind:sidebar="sidebar" />

            <div id="main-content" class="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900">
                <main>
                    <!-- Page Header -->
                    <template v-if="pageTitle">
                        <UIDashboardHeaderPage mode="dashboard" v-bind:breadCrumbs="breadCrumbs"
                            v-bind:pageTitle="pageTitle">
                            <template #leftAction v-if="slots.leftAction">
                                <slot name="leftAction" />
                            </template>
                            <template #actions v-if="slots.actions">
                                <slot name="actions" />
                            </template>
                        </UIDashboardHeaderPage>
                    </template>
                    <!-- Content -->
                    <slot />
                </main>
                <!-- Footer -->
                <!-- <x-ui.dashboard.footer /> -->
            </div>
        </div>
    </div>
</template>
