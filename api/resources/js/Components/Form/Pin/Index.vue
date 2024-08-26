<script lang="ts" setup>
import { ref, useAttrs, useSlots, onMounted, watch, watchEffect } from 'vue'
import { randomID } from '@/utils/helpers'

import useClient from '@/composables/useClient.ts'
const { isClient } = useClient()

const attrs = useAttrs()

const slots = useSlots()

const emits = defineEmits(['is-dirty'])

const props = defineProps({
    identifier: {
        type: String,
        default: null
    },
    alignment: {
        type: String,
        default: 'start'
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

const alignmentClass = ref(`justify-${props.alignment}`)

const model = defineModel({})

const input = ref(null)

const generatedID = 'pin-' + randomID(15)
const initial = ref(null)
const id = ref(null)
const name = ref(null)
const isDirty = ref(false)

// Codes
const code1 = ref('')
const code2 = ref('')
const code3 = ref('')
const code4 = ref('')
const code5 = ref('')
const code6 = ref('')

// Auto focus to the next input
const focusNextInput = (el, prevId, nextId) => {
    if (isClient.value) {
        if (el.value.length === 0) {
            if (prevId) {
                document.getElementById(prevId).focus();
            }
        } else {
            if (nextId) {
                document.getElementById(nextId).focus();
            }
        }
    }
}

// Initalize Codes
const initCodes = () => {
    if (isClient.value) {
        document.querySelectorAll('[data-focus-input-init]').forEach(function (element) {
            element.addEventListener('keyup', function () {
                const prevId = this.getAttribute('data-focus-input-prev');
                const nextId = this.getAttribute('data-focus-input-next');
                focusNextInput(this, prevId, nextId);
            });
        });
    }
}

// Update Model with the codes value
const updateCodes = () => {
    const codes = code1.value + code2.value + code3.value + code4.value + code5.value + code6.value
    model.value = codes
}

// Watchers
watch(code1, () => {
    updateCodes()
})
watch(code2, () => {
    updateCodes()
})
watch(code3, () => {
    updateCodes()
})
watch(code4, () => {
    updateCodes()
})
watch(code5, () => {
    updateCodes()
})
watch(code6, () => {
    updateCodes()
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

onMounted(() => {
    initial.value = model.value
    id.value = (attrs.id != undefined) ? attrs.id : (props.identifier) ? props.identifier : generatedID
    name.value = (attrs.name != undefined) ? attrs.name : (props.identifier) ? props.identifier : generatedID
    initCodes()
})

defineOptions({
    inheritAttrs: false
})
</script>
<template>
    <div class="flex items-center mb-2 space-x-2 rtl:space-x-reverse" v-bind:class="[alignmentClass]" v-bind="$attrs">
        <div>
            <label for="code-1" class="sr-only">First code</label>
            <input type="text" maxlength="1" autofocus data-focus-input-init data-focus-input-next="code-2" id="code-1"
                v-model="code1" class="pin input" v-bind:class="{
                    'is-dirty': isDirty && (!hasError && !isSuccess),
                    'is-invalid': hasError,
                    'is-valid': isSuccess
                }" required />
        </div>
        <div>
            <label for="code-2" class="sr-only">Second code</label>
            <input type="text" maxlength="1" data-focus-input-init data-focus-input-prev="code-1"
                data-focus-input-next="code-3" id="code-2" v-model="code2" class="pin input" v-bind:class="{
                    'is-dirty': isDirty && (!hasError && !isSuccess),
                    'is-invalid': hasError,
                    'is-valid': isSuccess
                }" required />
        </div>
        <div>
            <label for="code-3" class="sr-only">Third code</label>
            <input type="text" maxlength="1" data-focus-input-init data-focus-input-prev="code-2"
                data-focus-input-next="code-4" id="code-3" v-model="code3" class="pin input" v-bind:class="{
                    'is-dirty': isDirty && (!hasError && !isSuccess),
                    'is-invalid': hasError,
                    'is-valid': isSuccess
                }" required />
        </div>
        <div>
            <label for="code-4" class="sr-only">Fourth code</label>
            <input type="text" maxlength="1" data-focus-input-init data-focus-input-prev="code-3"
                data-focus-input-next="code-5" id="code-4" v-model="code4" class="pin input" v-bind:class="{
                    'is-dirty': isDirty && (!hasError && !isSuccess),
                    'is-invalid': hasError,
                    'is-valid': isSuccess
                }" required />
        </div>
        <div>
            <label for="code-5" class="sr-only">Fifth code</label>
            <input type="text" maxlength="1" data-focus-input-init data-focus-input-prev="code-4"
                data-focus-input-next="code-6" id="code-5" v-model="code5" class="pin input" v-bind:class="{
                    'is-dirty': isDirty && (!hasError && !isSuccess),
                    'is-invalid': hasError,
                    'is-valid': isSuccess
                }" required />
        </div>
        <div>
            <label for="code-6" class="sr-only">Sixth code</label>
            <input type="text" maxlength="1" data-focus-input-init data-focus-input-prev="code-5" id="code-6"
                v-model="code6" class="pin input" v-bind:class="{
                    'is-dirty': isDirty && (!hasError && !isSuccess),
                    'is-invalid': hasError,
                    'is-valid': isSuccess
                }" required />
        </div>
    </div>
    <input v-bind:id="id" v-bind:name="name" type="text" class="sr-only" v-model="model" />
</template>
<style scoped>
.pin {
    @apply !block !py-3 !text-sm !font-extrabold !text-center !rounded-lg !w-9 !h-9;
}
</style>
