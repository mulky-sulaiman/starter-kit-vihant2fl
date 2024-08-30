<script lang="ts" setup>
import UICardProfileHeader from '@/Components/UI/Card/Profile/Header.vue'
import UICardProfileAvatar from '@/Components/UI/Card/Profile/Avatar.vue'

const props = defineProps({
    headerSrc: {
        type: String,
        default: 'https://picsum.photos/1280/720'
    },
    avatarSrc: {
        type: String,
        default: 'https://picsum.photos/1280/720'
    },
    headerClass: {
        type: String,
        default: ''
    },
    avatarClass: {
        type: String,
        default: ''
    },
    alt: {
        type: String,
        default: 'Avatar'
    }

})
</script>
<template>
    <div class="flex flex-col items-center justify-center w-full -space-y-20">
        <UICardProfileHeader v-bind:src="headerSrc" v-bind:class="headerClass">
            <slot name="header" />
        </UICardProfileHeader>
        <UICardProfileAvatar v-bind:src="avatarSrc" v-bind:class="avatarClass" v-bind:alt="alt">
            <slot name="avatar" />
        </UICardProfileAvatar>
    </div>
</template>
