<script lang="ts" setup>
import LayoutsDefault from '@/Layouts/Default.vue'
import LayoutsLanding from '@/Layouts/Landing.vue'
import { useToastStore } from '@/stores/useToastStore'
import { randomElement } from '@/utils/helpers'
const toast = useToastStore()

const addToast = () => {
    toast.add({
        type: randomElement(['info', 'warning', 'error', 'success']),
        message: 'kintil kintilan gobed',
        autodismiss: randomElement([true, false]),
    })
}

defineOptions({ layout: [LayoutsDefault, LayoutsLanding] })
</script>
<template>
    <UIHead v-bind:title="$t('global.home')" v-bind:description="$t('global.home')" />

    <div class="max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:pb-16 lg:gap-8 xl:gap-0 lg:py-16">
        <div x-data="{ open: false }">
            <button x-on:click.prevent="open = !open">{{ $t('auth.failed') }}</button>

            <div x-show="open" x-transition>
                <a href="#" role="button" v-on:click.prevent="addToast">Hello 👋</a>
            </div>
        </div>
        <ClientOnly>
            <div>Kintil</div>
        </ClientOnly>
    </div>
</template>
