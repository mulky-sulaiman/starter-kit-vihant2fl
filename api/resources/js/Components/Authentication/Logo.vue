<script lang="ts" setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue'
const baseClass = 'flex flex-col gap-y-2 items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white uppercase tracking-widest'
</script>
<template>
    <Link v-bind:href="route('home')" v-bind:class="baseClass">
    <ApplicationLogo v-bind="$attrs" />
    <span v-text="$page.props.config['app.name']"></span>
    </Link>
</template>
