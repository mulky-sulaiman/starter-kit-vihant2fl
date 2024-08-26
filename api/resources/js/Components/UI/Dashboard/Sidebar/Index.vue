<script setup>
import UIDashboardSidebarLight from '@/Components/UI/Dashboard/Sidebar/Light.vue'
import UIDashboardSidebarDark from '@/Components/UI/Dashboard/Sidebar/Dark.vue'
import UIDashboardSidebarPrimary from '@/Components/UI/Dashboard/Sidebar/Primary.vue'
import UIDashboardSidebarDanger from '@/Components/UI/Dashboard/Sidebar/Danger.vue'

const props = defineProps({
    sidebar: {
        type: String,
        default: 'light'
    }
})
</script>
<template>
    <template v-if="sidebar === 'light'">
        <UIDashboardSidebarLight />
    </template>
    <template v-else-if="sidebar === 'dark'">
        <UIDashboardSidebarDark />
    </template>
    <template v-else-if="sidebar === 'primary'">
        <UIDashboardSidebarPrimary />
    </template>
    <template v-else-if="sidebar === 'danger'">
        <UIDashboardSidebarDanger />
    </template>
</template>
