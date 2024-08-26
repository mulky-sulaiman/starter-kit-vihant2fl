<script lang="ts" setup>
import UILandingHeader from '@/Components/UI/Landing/Header.vue'
import UILandingFooter from '@/Components/UI/Landing/Footer.vue'
</script>

<template>
    <!-- Header -->
    <UILandingHeader />
    <!-- Body -->
    <main>
        <slot />
    </main>
    <div><span data-slot="memek" /></div>
    <!-- Footer -->
    <UILandingFooter />
</template>
