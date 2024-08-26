<script lang="ts" setup>
const appName = import.meta.env.VITE_APP_NAME || 'VIFLLATT Starter Kit';
const props = defineProps({
    title: {
        type: String,
        default: null,
    },
    description: {
        type: String,
        default: null,
    },
})
</script>
<template>

    <Head v-bind:title="title ? `${title} - ${appName}` : `${appName}`">
        <template v-if="description">
            <meta name="description" v-bind:content="description ? `${description} - ${appName}` : `${appName}`" />
            <meta name="keywords"
                v-bind:content="description ? `${description}`.toLowerCase().replace(/\s/g, ',') : `${appName}`.toLowerCase().replace(/\s/g, ',')" />
        </template>
        <slot />
    </Head>

</template>
