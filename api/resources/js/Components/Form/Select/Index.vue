<script lang="ts" setup>
import { ref, useAttrs, useSlots, onMounted, watchEffect } from 'vue'
import { randomID } from '@/utils/helpers'
import { Icon } from '@iconify/vue'

const attrs = useAttrs()

const slots = useSlots()

const emits = defineEmits(['is-dirty'])

const props = defineProps({
    identifier: {
        type: String,
        default: null
    },
    hasError: {
        type: Boolean,
        default: false
    },
    isSuccess: {
        type: Boolean,
        default: false
    },
    formIsDirty: {
        type: Boolean,
        default: false
    }
})

const model = defineModel({
    type: String,
    required: true,
})

const input = ref(null)

const generatedID = 'select-' + randomID(15)
const initial = ref(false)
const id = ref(null)
const name = ref(null)
const isRequired = ref(false)
const isDirty = ref(false)

onMounted(() => {
    initial.value = model.value
    id.value = (attrs.id != undefined) ? attrs.id : (props.identifier) ? props.identifier : generatedID
    name.value = (attrs.name != undefined) ? attrs.name : (props.identifier) ? props.identifier : generatedID
    isRequired.value = (attrs.required != undefined) ? true : false
    if (attrs.autofocus != undefined) { input.value.focus() }
})

watchEffect(() => {
    if (props.formIsDirty && (initial.value != model.value)) {
        emits('is-dirty', true)
        isDirty.value = true
    } else {
        emits('is-dirty', false)
        isDirty.value = false
    }
})

defineOptions({
    inheritAttrs: false
})
</script>
<template>
    <!-- Select -->
    <div>
        <select ref="input" v-model="model" class="select" v-bind:class="{
            'select-is-invalid': hasError && !isDirty,
            'select-is-dirty': isDirty,
            'select-is-valid': isSuccess && !isDirty
        }" v-bind="$attrs">
            <slot />
        </select>
    </div>
</template>
