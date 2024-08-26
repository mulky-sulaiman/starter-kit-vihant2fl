<script lang="ts" setup>
import LayoutsDefault from '@/Layouts/Default.vue'
import LayoutsLanding from '@/Layouts/Landing.vue'

const props = defineProps({
    users: Object
})
defineOptions({
    layout: [LayoutsDefault, LayoutsLanding]
})
</script>
<template>
    <UIHead v-bind:title="$t('global.user')" v-bind:description="$t('global.user')" />
    <div class="max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:pb-16 lg:gap-8 xl:gap-0 lg:py-16">
        <div>{{ users }}</div>
    </div>
</template>
