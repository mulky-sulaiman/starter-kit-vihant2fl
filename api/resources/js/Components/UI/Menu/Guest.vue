<script lang="ts" setup>
import UIButton from '@/Components/UI/Button.vue'
import { Icon } from '@iconify/vue/dist/iconify.js'

</script>
<template>
    <div class="hidden md:flex">
        <UIButton type="light" as="link" v-bind:href="route('auth.login')" rounded="lg"
            class="w-full mr-2 tracking-widest uppercase">
            <Icon icon="tabler:login-2" class="mr-2 size-5" />
            {{ $t('header.login') }}
        </UIButton>
        <UIButton as="link" type="primary" v-bind:href="route('auth.register')" rounded="lg"
            class="w-full tracking-widest uppercase" v-if="$page.props.features.registration">
            <Icon icon="tabler:user-plus" class="mr-2 size-5" />
            {{ $t('header.register') }}
        </UIButton>
    </div>
    <div class="flex mr-1 md:hidden">
        <UIButton size="sm" type="light" as="link" v-bind:href="route('auth.login')" rounded="lg"
            class="w-full mr-2 tracking-widest uppercase">
            <Icon icon="tabler:login-2" class="size-5" />
        </UIButton>
        <UIButton size="sm" as="link" v-bind:href="route('auth.register')" rounded="lg"
            class="w-full tracking-widest uppercase" v-if="$page.props.features.registration">
            <Icon icon="tabler:user-plus" class="size-5" />
        </UIButton>
    </div>
</template>
