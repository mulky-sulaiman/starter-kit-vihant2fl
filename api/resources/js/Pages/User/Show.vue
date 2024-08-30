<script lang="ts" setup>
import LayoutsDefault from '@/Layouts/Default.vue'
import LayoutsLanding from '@/Layouts/Landing.vue'
import UIBadge from '@/Components/UI/Badge.vue'
import UICardProfile from '@/Components/UI/Card/Profile/Index.vue'

const props = defineProps({
    user: Object
})

defineOptions({
    layout: [LayoutsDefault, LayoutsLanding]
})

</script>
<template>
    <UIHead v-bind:title="$t('global.user')" v-bind:description="$t('global.user')" />
    <div class="max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:pb-16 lg:gap-8 xl:gap-0 lg:py-16">
        <div class="flex flex-col items-center justify-center w-full mt-10 space-y-6">

            <UICardProfile v-bind:header-src="user.header_url" v-bind:avatar-src="user.avatar_url"
                v-bind:alt="user.name" />

            <div class="flex flex-col items-center justify-center w-full space-y-2">
                <h1 class="text-2xl font-semibold">{{ user.name }}</h1>
                <p class="text-sm text-gray-500 dark:text:gray-200">@{{ user.username }}</p>
                <UIBadge size="xs" v-bind:border="true" v-bind:type="user.active ? 'success' : 'danger'">
                    {{ user.active ? 'Active' : 'Inactive' }}
                </UIBadge>
            </div>
        </div>
    </div>
</template>
