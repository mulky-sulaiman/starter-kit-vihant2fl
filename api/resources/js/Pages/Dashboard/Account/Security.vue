<script lang="ts" setup>
import LayoutsDashboard from '@/Layouts/Dashboard.vue'
import UICard from '@/Components/UI/Card/Index.vue'
import ChangePasswordForm from './Form/ChangePasswordForm.vue'
import TwoFactorForm from './Form/TwoFactorForm.vue';

const props = defineProps({
    breadCrumbs: {
        type: Object,
        default: {
            0: { label: 'Account', link: 'dashboard.account.index' },
            1: { label: 'Security', link: '' },
        }
    }
})

</script>
<template>
    <LayoutsDashboard v-bind:pageTitle="$t('global.security')" v-bind:breadCrumbs="breadCrumbs">
        <UIHead v-bind:title="$t('global.security')" v-bind:description="$t('global.security')" />
        <UICard class="border-0 border-b border-gray-200 rounded-none dark:border-gray-700" size="full">
            <div class="grid grid-cols-6 gap-12">
                <div class="col-span-6 sm:col-span-3">
                    <ChangePasswordForm v-if="$page.props.features['update-passwords']" />
                </div>
                <div class="col-span-6 sm:col-span-3">
                    <TwoFactorForm v-if="$page.props.features['two-factor-authentication']" />
                </div>
            </div>
        </UICard>
    </LayoutsDashboard>
</template>
