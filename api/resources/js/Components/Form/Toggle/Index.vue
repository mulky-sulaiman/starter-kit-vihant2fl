<script lang="ts" setup>
import { ref, useAttrs, useSlots, onMounted, watchEffect } from 'vue'
import { randomID } from '@/utils/helpers'
import { Icon } from '@iconify/vue'
import FormLabel from '@/Components/Form/Label.vue'

const attrs = useAttrs()

const slots = useSlots()

const emits = defineEmits(['is-dirty'])

const props = defineProps({
    identifier: {
        type: String,
        default: null
    },
    size: {
        type: String,
        default: 'sm'
    },
    label: {
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

const model = defineModel({})

const input = ref(null)

const generatedID = 'toggle-' + randomID(15)
const initial = ref(false)
const id = ref(null)
const name = ref(null)
const isRequired = ref(false)
const isDirty = ref(false)
const hasError = ref(false)
const isSuccess = ref(false)

onMounted(() => {
    initial.value = model.value
    id.value = (attrs.id != undefined) ? attrs.id : (props.identifier) ? props.identifier : generatedID
    name.value = (attrs.name != undefined) ? attrs.name : (props.identifier) ? props.identifier : generatedID
    isRequired.value = (attrs.required != undefined) ? true : false
    if (attrs.autofocus != undefined) { input.value.focus() }
})

watchEffect(() => {
    if (props.error) { hasError.value = true } else { hasError.value = false }
    if (props.success) { isSuccess.value = true } else { isSuccess.value = false }
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
    <FormLabel class="flex items-center justify-start gap-3 cursor-pointer" v-bind:for="name"
        v-bind:required="isRequired" v-bind:dirty="isDirty" v-bind:error="hasError" v-bind:success="isSuccess">
        <template #label>
            <input ref="input" type="checkbox" v-model="model" class="sr-only peer" v-bind="$attrs" />
            <div class="toggle peer peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white peer-checked:bg-primary-600"
                v-bind:class="{
                    'w-9 h-5 after:top-[2px] after:start-[2px] after:h-4 after:w-4': size === 'sm',
                    'w-11 h-6 after:top-[2px] after:start-[2px] after:h-5 after:w-5': size === 'md',
                    'w-14 h-7 after:top-0.5 after:start-[4px] after:h-6 after:w-6': size === 'lg',
                    'peer-focus:ring-danger-300 dark:peer-focus:ring-danger-800 peer-checked:bg-danger-600': hasError && !isDirty,
                    'peer-focus:ring-warning-300 dark:peer-focus:ring-warning-800 peer-checked:bg-warning-600': isDirty,
                    'peer-focus:ring-success-300 dark:peer-focus:ring-success-800 peer-checked:bg-success-600': isSuccess && !isDirty
                }">
            </div>
            <span>
                <slot />
            </span>
        </template>
    </FormLabel>
</template>
<style scoped>
.toggle {
    @apply relative bg-gray-200 rounded-full dark:bg-gray-700 after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all dark:border-gray-600;
}
</style>
