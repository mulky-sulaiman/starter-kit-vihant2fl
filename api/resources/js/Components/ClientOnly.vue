<script lang="ts" setup>
// import { useClient } from '@/global-composables'
import useClient from '@/composables/useClient.ts'
const { isClient } = useClient()

</script>
<template>
    <template v-if="isClient">
        <slot />
    </template>
</template>
