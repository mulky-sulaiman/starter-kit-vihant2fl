<script lang="ts" setup>
import FormInputGroup from '@/Components/Form/Input/Group.vue'
import { Icon } from '@iconify/vue'
import UIButton from '@/Components/UI/Button.vue'
import UILoadingSpinner from '@/Components/UI/Loading/Spinner.vue'
import { useForm, router } from '@inertiajs/vue3'

const form = useForm({
    current_password: '',
    password: '',
    password_confirmation: '',

});

const submit = () => {
    form.put(route('user-password.update'), {
        preserveScroll: true,
        onSuccess: () => form.reset(),
    });
};

</script>
<template>
    <form class="w-full space-y-4 md:w-2/3 md:space-y-6" v-on:submit.prevent="submit">
        <h1 class="text-lg font-bold leading-tight tracking-tight text-gray-900 text-start md:text-2xl dark:text-white">
            {{ $t('global.change_password') }}
        </h1>
        <div class="">
            <!-- Current Password -->
            <FormInputGroup v-bind:label="$t('register.current_password')"
                v-bind:hint="$t('register.current_password_hint')" type="password" identifier="current_password"
                v-model="form.current_password" v-bind:formIsDirty="form.isDirty"
                v-bind:error="form.errors.current_password" required autofocus autocomplete="current-password">
                <template #prefix>
                    <Icon icon="tabler:key" class="w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500" />
                </template>
            </FormInputGroup>
        </div>
        <div class="">
            <!-- New Password -->
            <FormInputGroup v-bind:label="$t('register.password')" v-bind:hint="$t('register.password_hint')"
                type="password" identifier="password" v-model="form.password" v-bind:formIsDirty="form.isDirty"
                v-bind:error="form.errors.password" required autocomplete="new-password">
                <template #prefix>
                    <Icon icon="tabler:key" class="w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500" />
                </template>
            </FormInputGroup>
        </div>
        <div class="">
            <!-- Password Confirmation -->
            <FormInputGroup v-bind:label="$t('register.password_confirmation')"
                v-bind:hint="$t('register.password_confirmation_hint')" type="password"
                identifier="password_confirmation" v-model="form.password_confirmation"
                v-bind:formIsDirty="form.isDirty" v-bind:error="form.errors.password_confirmation" required
                autocomplete="new-password">
                <template #prefix>
                    <Icon icon="tabler:key" class="w-5 h-5 text-gray-400 hover:text-gray-500 focus:text-gray-500" />
                </template>
            </FormInputGroup>
        </div>
        <div>
            <!-- Submit -->
            <UIButton as="button" type="primary" rounded="lg" v-bind:submit="true" v-bind:disabled="form.processing">
                <Icon icon="tabler:device-floppy" class="mr-2 size-5" v-show="!form.processing" />
                <UILoadingSpinner class="mr-2" size="sm" v-show="form.processing" />
                <span class="truncate">{{ $t('global.save') }}</span>
            </UIButton>
        </div>
    </form>
</template>
