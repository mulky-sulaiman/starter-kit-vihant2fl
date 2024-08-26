<script lang="ts" setup>
// import LayoutsDefault from '@/Layouts/Default.vue'
import LayoutsDashboard from '@/Layouts/Dashboard.vue'
// defineOptions({ layout: [LayoutsDefault, LayoutsDashboard] })
</script>
<template>
    <LayoutsDashboard pageTitle="Dashboard">
        <UIHead v-bind:title="$t('global.dashboard')" v-bind:description="$t('global.dashboard')" />
        <section>
            <div class="max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:pb-16 lg:gap-8 xl:gap-0 lg:py-16">
                <div x-data="{ open: false }">
                    <button x-on:click.prevent="open = !open">Dashboard</button>

                    <div x-show="open" x-transition>
                        Hello 👋
                    </div>
                </div>
            </div>
        </section>
    </LayoutsDashboard>
</template>
