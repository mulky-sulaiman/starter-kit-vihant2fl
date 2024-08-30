<script lang="ts" setup>
import UIMenuDropdownTrigger from '@/Components/UI/Menu/Dropdown/Trigger.vue'
import UIMenuDropdownMenu from '@/Components/UI/Menu/Dropdown/Menu.vue'
import { randomID } from '@/utils/helpers'

const props = defineProps({
    id: {
        type: String,
        default: 'dropdown-' + randomID(15)
    },
    useArrow: {
        type: Boolean,
        default: true,
    },
    menuClass: {
        type: String,
        default: null
    },
    itemClicked: {
        type: Boolean,
        default: false,
    }

})

defineOptions({
    inheritAttrs: false
})
</script>
<template>
    <UIMenuDropdownTrigger v-bind:id="id" v-bind:useArrow="useArrow" v-bind:itemClicked="itemClicked" v-bind="$attrs">
        <slot name="trigger" />
    </UIMenuDropdownTrigger>
    <UIMenuDropdownMenu v-bind:id="id" v-bind:class="menuClass">
        <slot />
    </UIMenuDropdownMenu>
</template>
<style></style>
