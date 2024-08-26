<script setup>
import UIDashboardHeaderLight from '@/Components/UI/Dashboard/Header/Light.vue'
import UIDashboardHeaderDark from '@/Components/UI/Dashboard/Header/Dark.vue'
import UIDashboardHeaderPrimary from '@/Components/UI/Dashboard/Header/Primary.vue'
import UIDashboardHeaderDanger from '@/Components/UI/Dashboard/Header/Danger.vue'
import UIDashboardHeaderBorderPrimary from '@/Components/UI/Dashboard/Header/BorderPrimary.vue'
import UIDashboardHeaderBorderDanger from '@/Components/UI/Dashboard/Header/BorderDanger.vue'
import UIDashboardHeaderBorderPrimaryMinimal from '@/Components/UI/Dashboard/Header/BorderPrimaryMinimal.vue'
import UIDashboardHeaderBorderDangerMinimal from '@/Components/UI/Dashboard/Header/BorderDangerMinimal.vue'

const props = defineProps({
    header: {
        type: String,
        default: 'light'
    }
})
</script>
<template>
    <template v-if="header === 'light'">
        <UIDashboardHeaderLight />
    </template>
    <template v-else-if="header === 'dark'">
        <UIDashboardHeaderDark />
    </template>
    <template v-else-if="header === 'primary'">
        <UIDashboardHeaderPrimary />
    </template>
    <template v-else-if="header === 'danger'">
        <UIDashboardHeaderDanger />
    </template>
    <template v-else-if="header === 'border-primary'">
        <UIDashboardHeaderBorderPrimary />
    </template>
    <template v-else-if="header === 'border-danger'">
        <UIDashboardHeaderBorderDanger />
    </template>
    <template v-else-if="header === 'border-primary-minimal'">
        <UIDashboardHeaderBorderPrimaryMinimal />
    </template>
    <template v-else-if="header === 'border-danger-minimal'">
        <UIDashboardHeaderBorderDangerMinimal />
    </template>
</template>
