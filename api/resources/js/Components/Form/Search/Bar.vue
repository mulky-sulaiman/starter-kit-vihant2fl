<script lang="ts" setup>
import { ref, useAttrs, onMounted, watchEffect } from 'vue'
import FormLabel from '@/Components/Form/Label.vue'
import FormInputField from '@/Components/Form/Input/Field.vue'
import UIButton from '@/Components/UI/Button.vue'
import UILoadingSpinner from '@/Components/UI/Loading/Spinner.vue'
import { Icon } from '@iconify/vue'
import { randomID } from '@/utils/helpers'

const props = defineProps({
    identifier: {
        type: String,
        default: null
    },
    label: {
        type: String,
        default: null
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
    processing: {
        type: Boolean,
        default: false
    },
})

const model = defineModel({
    type: String,
    required: true,
})

const emits = defineEmits(['is-dirty', 'search-submit', 'search-reset'])

const attrs = useAttrs()

const generatedID = 'input-' + randomID(15)
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

    <form class="flex items-center justify-between max-w-md gap-2 mx-auto" v-on:submit.prevent="emits('search-submit')">
        <div>
            <!-- Search Label-->
            <FormLabel v-bind:for="id" label="Search" class="sr-only" />
            <div class="relative">
                <div class="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                    <Icon icon="tabler:search" class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" />
                </div>
                <!-- Search Input -->
                <FormInputField type="search" class="!p-4 !ps-10 !pe-28" v-model="model" v-bind:identifier="identifier"
                    v-bind:id="id" v-bind:name="name" v-bind:formIsDirty="formIsDirty" v-bind:hasError="hasError"
                    v-bind:isSuccess="isSuccess" v-bind="$attrs" v-on:is-dirty="setDirty" />
                <!-- Submit -->
                <UIButton as="button" class="!absolute !end-2.5 !bottom-2.5 !px-4 !py-2" type="primary" rounded="lg"
                    v-bind:submit="true" v-bind:disabled="processing">
                    <UILoadingSpinner class="mr-2" size="sm" v-show="processing" />
                    <span class="truncate">Search</span>
                </UIButton>
            </div>
        </div>
        <div>
            <a href="#" v-on:click.prevent="$emit('search-reset')" class="text-sm font-medium underline">Reset</a>
        </div>
    </form>

</template>
