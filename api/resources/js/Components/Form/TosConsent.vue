<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import FormCheckboxGroup from '@/Components/Form/Checkbox/Group.vue'
import UIModalDrawer from '@/Components/UI/Modal/Drawer.vue'
import PartialsTermsAndConditions from '@/Partials/TermsAndConditions.vue'
import PartialsPrivacyPolicy from '@/Partials/PrivacyPolicy.vue'
import UIButton from '@/Components/UI/Button.vue'
import { Icon } from '@iconify/vue'

const showTermsAndCondition = ref(false);
const showPrivacyPolicy = ref(false);

const openTermsAndCondition = () => {
    showTermsAndCondition.value = true;
};
const closeTermsAndCondition = () => {
    showTermsAndCondition.value = false;
};

const openPrivacyPolicy = () => {
    showPrivacyPolicy.value = true;
};
const closePrivacyPolicy = () => {
    showPrivacyPolicy.value = false;
};

</script>
<template>
    <div class="flex items-center justify-between">
        <FormCheckboxGroup identifier="terms" v-bind="$attrs">
            <template #label>
                <span>{{ $t('register.agree_to_the') }}
                    <a class="text-sm text-gray-600 underline rounded-md dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-offset-gray-800"
                        href="#" v-on:click.prevent="openTermsAndCondition">{{ $t('register.tos')
                        }}</a>
                    {{ $t('register.and') }}
                    <a class="text-sm text-gray-600 underline rounded-md dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-offset-gray-800"
                        href="#" v-on:click.prevent="openPrivacyPolicy">{{ $t('register.privacy_policy')
                        }}</a>
                </span>
            </template>
        </FormCheckboxGroup>
    </div>
    <UIModalDrawer v-bind:show="showTermsAndCondition" v-on:close="closeTermsAndCondition" id="terms-and-conditions"
        name="terms-and-conditions" placement="right" extraWidth="20">
        <div class="border-t-4 border-info-500 dark:border-info-400">
            <!-- Header -->
            <div class="flex items-center justify-between p-4">
                <h3 class="text-xl font-semibold tracking-widest uppercase text-info-500 dark:text-info-400">
                    {{ $t('register.tos') }}</h3>
                <button type="button" v-on:click.prevent="closeTermsAndCondition"
                    class="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 ms-auto dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span class="sr-only" v-text="$t('global.close')"></span>
                </button>
            </div>
            <hr class="h-px my-0 bg-gray-200 border-0 dark:bg-gray-700">
            <!-- Body -->
            <div class="p-4 min-h-[calc(100vh-147px)] max-h-[calc(100vh-147px)] overflow-y-auto">
                <PartialsTermsAndConditions />
            </div>
            <hr class="h-px my-0 bg-gray-200 border-0 dark:bg-gray-700">
            <!-- Footer -->
            <div class="flex items-center justify-center p-4 gap-x-3">
                <UIButton as="button" class="w-full" rounded="lg" type="light"
                    v-on:click.prevent="closeTermsAndCondition">
                    <Icon icon="tabler:x" class="mr-2 size-5" />
                    <span class="truncate">{{ $t('Close') }}</span>
                </UIButton>
            </div>
        </div>
    </UIModalDrawer>
    <UIModalDrawer v-bind:show="showPrivacyPolicy" v-on:close="closePrivacyPolicy" id="privacy-policy"
        name="privacy-policy" placement="right" extraWidth="20">
        <div class="border-t-4 border-info-500 dark:border-info-400">
            <!-- Header -->
            <div class="flex items-center justify-between p-4">
                <h3 class="text-xl font-semibold tracking-widest uppercase text-info-500 dark:text-info-400">
                    {{ $t('register.privacy_policy') }}</h3>
                <button type="button" v-on:click.prevent="closePrivacyPolicy"
                    class="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 ms-auto dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span class="sr-only" v-text="$t('global.close')"></span>
                </button>
            </div>
            <hr class="h-px my-0 bg-gray-200 border-0 dark:bg-gray-700">
            <!-- Body -->
            <div class="p-4 min-h-[calc(100vh-147px)] max-h-[calc(100vh-147px)] overflow-y-auto">
                <PartialsPrivacyPolicy />
            </div>
            <hr class="h-px my-0 bg-gray-200 border-0 dark:bg-gray-700">
            <!-- Footer -->
            <div class="flex items-center justify-center p-4 gap-x-3">
                <UIButton as="button" class="w-full" rounded="lg" type="light" v-on:click.prevent="closePrivacyPolicy">
                    <Icon icon="tabler:x" class="mr-2 size-5" />
                    <span class="truncate">{{ $t('Close') }}</span>
                </UIButton>
            </div>
        </div>
    </UIModalDrawer>

</template>
