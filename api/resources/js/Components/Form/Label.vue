<script lang="ts" setup>
import { useSlots } from 'vue'
const slots = useSlots()
const props = defineProps({
    label: {
        type: String,
        default: null,
    },
    required: {
        type: Boolean,
        default: false,
    },
    dirty: {
        type: Boolean,
        default: false,
    },
    error: {
        type: Boolean,
        default: false,
    },
    success: {
        type: Boolean,
        default: false,
    },
})
</script>
<template>
    <label class="label" v-bind:class="{
        'label-is-invalid': error,
        'label-is-valid': success,
        'label-is-dirty': dirty && (!error && !success),
        'required': required
    }" v-bind="$attrs">
        <template v-if="label">
            {{ label }}
        </template>
        <template v-else-if="slots.label">
            <slot name="label" />
        </template>
    </label>
</template>
