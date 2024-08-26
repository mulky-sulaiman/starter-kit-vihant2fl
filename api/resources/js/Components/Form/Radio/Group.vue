<script lang="ts" setup>

import { ref, useSlots, useAttrs, onMounted, watchEffect } from 'vue'
import FormLabel from '@/Components/Form/Label.vue'
import FormRadio from '@/Components/Form/Radio/Index.vue'
import FormMessage from '@/Components/Form/Message.vue'
import { randomID } from '@/utils/helpers';

const props = defineProps({
    identifier: {
        type: String,
        default: null
    },
    label: {
        type: String,
        default: null
    },
    hint: {
        type: String,
        default: null,
    },
    success: {
        type: String,
        default: null,
    },
    error: {
        type: String,
        default: null,
    },
    formIsDirty: {
        type: Boolean,
        default: false
    },
    useMessage: {
        type: Boolean,
        default: true
    }
})

const model = defineModel({})

const attrs = useAttrs()
const slots = useSlots()

const generatedID = 'radio-' + randomID(15)
const id = ref(null)
const name = ref(null)
const isRequired = ref(false)
const isDirty = ref(false)
const hasError = ref(false)
const isSuccess = ref(false)

onMounted(() => {
    id.value = (attrs.id != undefined) ? attrs.id : (props.identifier) ? props.identifier : generatedID
    name.value = (attrs.name != undefined) ? attrs.name : (props.identifier) ? props.identifier : generatedID
    isRequired.value = (attrs.required != undefined) ? true : false
})

defineOptions({
    inheritAttrs: false
})

watchEffect(() => {
    if (props.error) { hasError.value = true } else { hasError.value = false }
    if (props.success) { isSuccess.value = true } else { isSuccess.value = false }
})

const setDirty = (e) => {
    if (e) {
        isDirty.value = true
    } else {
        isDirty.value = false
    }
}
</script>
<template>
    <div class="flex flex-col space-y-2">
        <!-- Label Block -->
        <FormLabel v-bind:for="name" v-bind:required="isRequired" v-bind:dirty="isDirty" v-bind:error="hasError"
            v-bind:success="isSuccess" class="flex items-center justify-start gap-3 cursor-pointer">
            <template #label>
                <!-- Radio Block -->
                <FormRadio v-model="model" v-bind:identifier="identifier" v-bind:id="id" v-bind:name="name"
                    v-bind:formIsDirty="formIsDirty" v-bind:hasError="hasError" v-bind:isSuccess="isSuccess"
                    v-bind="$attrs" v-on:is-dirty="setDirty" />
                <template v-if="label">{{ label }}</template>
                <template v-else-if="slots.label"><slot name="label"/></template>
            </template>
        </FormLabel>
        <template v-if="useMessage">
            <!-- Message Block -->
            <!-- Error -->
            <template v-if="hasError && !isDirty">
                <FormMessage type="error">
                    <template #message>
                        {{ error }}
                    </template>
                </FormMessage>
            </template>
            <!-- Dirty -->
            <template v-if="isDirty">
                <FormMessage type="dirty">
                    <template #message>
                        {{ $t('auth.dirty_message') }}
                    </template>
                </FormMessage>
            </template>
            <!-- Success -->
            <template v-if="isSuccess && !isDirty">
                <FormMessage type="success">
                    <template #message>
                        {{ success }}
                    </template>
                </FormMessage>
            </template>
            <!-- Hint -->
            <template v-if="hint || slots.hint">
                <FormMessage type="hint">
                    <template #message>
                        <template v-if="hint">
                            {{ hint }}
                        </template>
                        <template v-else-if="slots.hint">
                            <slot name="hint" />
                        </template>
                    </template>
                </FormMessage>
            </template>
        </template>
    </div>
</template>
