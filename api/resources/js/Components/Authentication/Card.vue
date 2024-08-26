<script lang="ts" setup>
const baseClass = 'w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'
</script>
<template>
    <div v-bind:class="baseClass" v-bind="$attrs">
        <slot />
    </div>
</template>
