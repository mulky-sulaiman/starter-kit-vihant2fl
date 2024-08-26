<script lang="ts" setup>
const baseClass = 'flex flex-col items-center justify-center mx-auto'
</script>
<template>
    <div v-bind:class="baseClass" v-bind="$attrs">
        <slot />
    </div>
</template>
