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
    type: {
        type: String,
        default: 'text',
        required: true,
    },
    prefix: {
        type: String,
        default: null,
    },
    suffix: {
        type: String,
        default: null,
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

const generatedID = 'input-' + randomID(15)
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

let showPassword = ref(false)

const togglePassword = () => {
    showPassword.value = !showPassword.value
};

defineOptions({
    inheritAttrs: false
})
</script>
<template>
    <div class="flex flex-col space-y-2">
        <!-- Input Block -->
        <template v-if="type == 'password'">
            <div class="relative">
                <div class="relative">
                    <template v-if="prefix || slots.prefix">
                        <!-- Prefix -->
                        <div class="absolute inset-y-0 flex items-center start-0 ps-3">
                            <template v-if="prefix">
                                {{ prefix }}
                            </template>
                            <template v-else>
                                <slot name="prefix" />
                            </template>
                        </div>
                    </template>
                    <!-- Input -->
                    <input ref="input" v-bind:type="showPassword ? 'text' : 'password'" placeholder="••••••••"
                        v-model="model" v-bind:id="id" v-bind:name="name" v-bind="$attrs" class="input" v-bind:class="{
                            'ps-10': prefix || slots.prefix,
                            'pe-10': suffix || slots.suffix,
                            'is-dirty': isDirty && (!hasError && !isSuccess),
                            'is-invalid': hasError,
                            'is-valid': isSuccess
                        }" />
                    <!-- Suffix -->
                    <div class="absolute inset-y-0 flex items-center end-0 pe-3">
                        <div class="flex items-center justify-center">
                            <a href="#" role="button" v-bind:data-tooltip-target="'tooltip-password-' + id"
                                v-bind:title="$t('global.password_tooltip')" v-on:click.prevent="togglePassword">
                                <Icon icon="tabler:eye"
                                    class="w-6 h-6 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                                    v-if="!showPassword" />
                                <Icon icon="tabler:eye-off"
                                    class="w-6 h-6 text-gray-400 hover:text-gray-500 focus:text-gray-500"
                                    v-if="showPassword" />
                            </a>
                            <div v-bind:id="'tooltip-password-' + id" role="tooltip"
                                class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                {{ $t('global.password_tooltip') }}
                                <div class="tooltip-arrow" data-popper-arrow></div>
                            </div>
                            <Icon icon="tabler:alert-triangle"
                                class="w-6 h-6 ml-3 text-warning-500 dark:text-warning-500"
                                v-show="isDirty && (!hasError && !isSuccess)" />
                            <Icon icon="tabler:x" class="w-6 h-6 ml-3 text-danger-700 dark:text-danger-500"
                                v-show="hasError" />
                            <Icon icon="tabler:check" class="w-6 h-6 ml-3 text-success-700 dark:text-success-500"
                                v-show="isSuccess" />
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <template v-else>
            <div class="relative">
                <div class="relative">
                    <template v-if="prefix || slots.prefix">
                        <!-- Prefix -->
                        <div class="absolute inset-y-0 flex items-center start-0 ps-3">
                            <template v-if="prefix">
                                {{ prefix }}
                            </template>
                            <template v-else>
                                <slot name="prefix" />
                            </template>
                        </div>
                    </template>
                    <!-- Input -->
                    <input ref="input" v-bind:type="type" v-model="model" v-bind:id="id" v-bind:name="name"
                        v-bind="$attrs" class="input" v-bind:class="{
                            'ps-10': prefix || slots.prefix,
                            'pe-10': suffix || slots.suffix,
                            'is-dirty': isDirty && (!hasError && !isSuccess),
                            'is-invalid': hasError,
                            'is-valid': isSuccess
                        }" />
                    <template v-if="(suffix || slots.suffix) && (!hasError || !isSuccess)">
                        <!-- Suffix -->
                        <div class="absolute inset-y-0 flex items-center end-0 pe-3">
                            <template v-if="suffix">
                                {{ suffix }}
                            </template>
                            <template v-else>
                                <slot name="suffix" />
                            </template>
                        </div>
                    </template>
                    <template v-if="isDirty && (!suffix || !slots.suffix) && (!hasError && !isSuccess)">
                        <!-- Dirty Suffix -->
                        <div class="absolute inset-y-0 flex items-center justify-center end-0 pe-3">
                            <Icon icon="tabler:alert-triangle" class="w-6 h-6 text-warning-500 dark:text-warning-500" />
                        </div>
                    </template>
                    <template v-if="hasError">
                        <!-- Error Suffix -->
                        <div class="absolute inset-y-0 flex items-center end-0 pe-3">
                            <Icon icon="tabler:x" class="w-6 h-6 text-danger-700 dark:text-danger-500" />
                        </div>
                    </template>
                    <template v-if="isSuccess">
                        <!-- Success Suffix -->
                        <div class="absolute inset-y-0 flex items-center end-0 pe-3">
                            <Icon icon="tabler:check" class="w-6 h-6 text-success-700 dark:text-success-500" />
                        </div>
                    </template>
                </div>
            </div>
        </template>
    </div>

</template>
