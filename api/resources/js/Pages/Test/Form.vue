<script lang="ts" setup>
import { ref } from 'vue'
import { useForm } from '@inertiajs/vue3'
import ContainerCenter from '@/Components/ContainerCenter.vue'
import AuthenticationCard from '@/Components/Authentication/Card.vue'
import UIButton from '@/Components/UI/Button.vue'

import FormGroup from '@/Components/Form/Group.vue'
import FormInputGroup from '@/Components/Form/Input/Group.vue'
import FormSelectGroup from '@/Components/Form/Select/Group.vue'
import FormCheckboxGroup from '@/Components/Form/Checkbox/Group.vue'
import FormRadioGroup from '@/Components/Form/Radio/Group.vue'
import FormTextareaGroup from '@/Components/Form/Textarea/Group.vue'
import FormToggleGroup from '@/Components/Form/Toggle/Group.vue'

import FormInput from '@/Components/Form/Input/Index.vue'
import FormSelect from '@/Components/Form/Select/Index.vue'

import FormPinGroup from '@/Components/Form/Pin/Group.vue'


defineOptions({
    layout: false
})

const props = defineProps({
    genders: {
        type: Object
    }
})
const form = useForm({
    email: '',
    password: '',
    remember: true,
    gender: '',
    code: '',
})

const submit = () => {
    console.log(form)
}

const isDirty = ref(false)
const setDirty = (e) => {
    if (e) {
        isDirty.value = true
    } else {
        isDirty.value = false
    }
}
</script>
<template>
    <UIHead :title="$t('register.register')" :description="$t('register.register')" />
    <ContainerCenter class="px-6 py-8 md:h-screen lg:py-0 dark:bg-gray-900">
        <AuthenticationCard>

            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <form class="space-y-4 md:space-y-6" v-on:submit.prevent="submit">
                    {{ form.email }}
                    <FormTextareaGroup identifier="email" v-bind:formIsDirty="form.isDirty" v-bind:error="'error email'"
                        v-model="form.email" type="email" row="4" required>
                        <template #label><span>Email Cuy</span></template>
                        <template #hint>Araranjing lah</template>
                    </FormTextareaGroup>
                    {{ form.password }}
                    <FormInputGroup label="Password" v-model="form.password" v-bind:formIsDirty="form.isDirty"
                        type="password" required />
                    {{ form.gender }}

                    <FormSelectGroup identifier="gender" label="Gender" v-model="form.gender"
                        v-bind:formIsDirty="form.isDirty" class="tracking-widest uppercase"
                        v-bind:success="'success gender'">
                        <option value="" selected disabled>Select your gender</option>
                        <template v-for="gender, index in genders" v-bind:key="index">
                            <option v-bind:value="gender.value" v-text="gender.label"></option>
                        </template>
                    </FormSelectGroup>

                    <FormGroup identifier="gender" label="Gender" v-bind:formIsDirty="form.isDirty"
                        v-bind:isDirty="isDirty">
                        <div class="flex items-center justify-start gap-4">
                            <template v-for="g, index in genders" v-bind:key="index">
                                <FormRadioGroup v-bind:value="g.value" v-bind:identifier="g.value"
                                    v-bind:label="g.label" v-model="form.gender" v-bind:formIsDirty="form.isDirty"
                                    v-bind:useMessage="false" v-on:is-dirty="setDirty" />
                            </template>
                        </div>
                    </FormGroup>



                    {{ form.remember }}
                    <FormCheckboxGroup identifier="remember" v-model="form.remember" v-bind:formIsDirty="form.isDirty"
                        v-bind:useMessage="false" required>
                        <template #label><span>Remember Me?</span></template>
                    </FormCheckboxGroup>



                    <FormToggleGroup identifier="remember" v-model="form.remember" v-bind:formIsDirty="form.isDirty" />

                    {{ form.code }}
                    <FormPinGroup label="Code" alignment="center" v-bind:formIsDirty="form.isDirty"
                        hint="Enter your code" required v-model="form.code" />

                    <UIButton v-bind:submit="true" size="sm">Submit</UIButton>
                </form>
            </div>
        </AuthenticationCard>
    </ContainerCenter>
</template>
