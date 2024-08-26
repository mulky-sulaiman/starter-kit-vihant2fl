<script lang="ts" setup>
import { useConfirmStore } from '@/stores/useConfirmStore'
import { Icon } from '@iconify/vue'
import UIButton from '@/Components/UI/Button.vue'

const confirm = useConfirmStore()

const setValidConfirm = () => {
    if (confirm.target) {
        confirm.isConfirmed = true
        confirm.opened = false
    }
}
</script>
<template>
    <div>
        <!-- Confirm Dialog -->
        <a href="#" class="hidden" data-modal-toggle="confirm-dialog-modal"
            data-modal-target="confirm-dialog-modal"></a>
        <div id="confirm-dialog-modal" data-modal-backdrop="static" tabindex="-1"
            class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 !mt-0 h-full max-h-full">
            <div class="relative w-full max-h-full min-w-[100vw] min-h-[100vh] md:min-w-0 md:min-h-0" v-bind:class="{
                'max-w-md': confirm.size === 'sm',
                'max-w-lg': confirm.size === 'md',
                'max-w-4xl': confirm.size === 'lg',
                'max-w-7xl': confirm.size === 'xl',
            }">
                <div class="relative min-h-screen bg-white border-t-4 md:shadow md:rounded-lg dark:bg-gray-700 md:min-h-0"
                    v-bind:class="{
                        'border-warning-500 dark:border-warning-400': confirm.type == 'warning',
                        'border-success-500 dark:border-success-400': confirm.type == 'success',
                        'border-danger-700 dark:border-danger-600': confirm.type == 'danger',
                        'border-info-500 dark:border-info-400': confirm.type == 'info',
                    }">
                    <!-- Modal header -->
                    <div class="flex items-center justify-between p-4 border-b rounded-t md:p-5 dark:border-gray-600">
                        <h3 class="text-xl font-semibold tracking-widest uppercase" v-bind:class="{
                            'text-warning-500 dark:text-warning-400': confirm.type == 'warning',
                            'text-success-500 dark:text-success-400': confirm.type == 'success',
                            'text-danger-700 dark:text-danger-600': confirm.type == 'danger',
                            'text-info-500 dark:text-info-400': confirm.type == 'info',
                        }" v-text="$t(confirm.headTitle)" v-show="confirm.headTitle != ''"></h3>
                        <button type="button"
                            class="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 ms-auto dark:hover:bg-gray-600 dark:hover:text-white"
                            v-on:click="confirm.$reset()" data-modal-hide="confirm-dialog-modal">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span class="sr-only" v-text="$t('global.close')"></span>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <div class="p-4 space-y-4 text-center md:p-5 min-h-[calc(100vh-147px)] md:min-h-0">
                        <span v-if="confirm.useIcon" class="w-full">
                            <Icon icon="tabler:alert-square-rounded"
                                class="w-12 h-12 mx-auto mb-4 text-warning-500 dark:text-warning-400" aria-hidden="true"
                                v-if="confirm.type == 'warning'" />
                            <Icon icon="tabler:square-rounded-check"
                                class="w-12 h-12 mx-auto mb-4 text-success-500 dark:text-success-400" aria-hidden="true"
                                v-if="confirm.type == 'success'" />
                            <Icon icon="tabler:square-rounded-x"
                                class="w-12 h-12 mx-auto mb-4 text-danger-700 dark:text-danger-600" aria-hidden="true"
                                v-if="confirm.type == 'danger'" />
                            <Icon icon="tabler:info-square-rounded"
                                class="w-12 h-12 mx-auto mb-4 text-info-500 dark:text-info-400" aria-hidden="true"
                                v-if="confirm.type == 'info'" />
                        </span>
                        <h3 class="text-lg font-normal" v-bind:class="{
                            'text-warning-500 dark:text-warning-400': confirm.type == 'warning',
                            'text-success-500 dark:text-success-400': confirm.type == 'success',
                            'text-danger-700 dark:text-danger-600': confirm.type == 'danger',
                            'text-info-500 dark:text-info-400': confirm.type == 'info',
                        }" v-text="$t(confirm.title)" v-show="confirm.title != ''"></h3>
                        <p class="text-gray-500 dark:text-gray-400" v-text="$t(confirm.message)"
                            v-show="confirm.message != ''"></p>
                    </div>
                    <!-- Modal footer -->
                    <div
                        class="flex items-center justify-between p-4 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <span v-if="confirm.useCancel" class="w-full">
                            <UIButton size="sm" class="w-full" as="button" rounded="lg" type="light"
                                data-modal-hide="confirm-dialog-modal" v-on:click="confirm.$reset()">
                                <span v-text="$t(confirm.labelCancel)" class="truncate"></span>
                            </UIButton>
                        </span>
                        <span v-if="confirm.useOk" class="w-full">
                            <UIButton size="sm" class="w-full" as="button" rounded="lg" v-bind:type="confirm.type"
                                data-modal-hide="confirm-dialog-modal" v-on:click="setValidConfirm()"
                                v-bind:x-on:click.prevent="'$dispatch(\'' + confirm.target + '\')'">
                                <span v-text="$t(confirm.labelOk)" class="truncate"></span>
                            </UIButton>
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Confirm Drawer -->
        <a href="#" class="hidden" data-drawer-toggle="confirm-dialog-drawer" data-drawer-target="confirm-dialog-drawer"
            data-drawer-backdrop="false"></a>
        <div id="confirm-dialog-drawer" data-drawer-backdrop="false" class="transition-transform -translate-x-full"
            v-bind:class="{
                'fixed top-0 left-0 right-0 z-50 w-full transition-transform -translate-y-full bg-white dark:bg-gray-800': confirm.placement ==
                    'top',
                'fixed top-0 right-0 z-50 h-screen overflow-y-auto transition-transform translate-x-full bg-white w-80 dark:bg-gray-800 md:min-w-0 min-w-[100vw]': confirm.placement ==
                    'right',
                'fixed top-0 left-0 z-50 h-screen overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800 md:min-w-0 min-w-[100vw]': confirm.placement ==
                    'left',
                'fixed bottom-0 left-0 right-0 z-50 w-full overflow-y-auto transition-transform bg-white dark:bg-gray-800 transform-none': confirm.placement ==
                    'bottom',
                'border-t-4 border-warning-500 dark:border-warning-400': confirm.type == 'warning',
                'border-t-4 border-success-500 dark:border-success-400': confirm.type == 'success',
                'border-t-4 border-danger-700 dark:border-danger-600': confirm.type == 'danger',
                'border-t-4 border-info-500 dark:border-info-400': confirm.type == 'info',
            }" tabindex="-1" aria-labelledby="drawer-label">
            <!-- Header -->
            <div class="p-4">
                <h5 id="drawer-label"
                    class="inline-flex items-center mb-4 text-base font-semibold tracking-widest uppercase"
                    v-bind:class="{
                        'text-warning-500 dark:text-warning-400': confirm.type == 'warning',
                        'text-success-500 dark:text-success-400': confirm.type == 'success',
                        'text-danger-700 dark:text-danger-600': confirm.type == 'danger',
                        'text-info-500 dark:text-info-400': confirm.type == 'info',
                    }" v-text="$t(confirm.headTitle)" v-show="confirm.headTitle != ''">
                </h5>
                <button type="button" data-drawer-hide="confirm-dialog-drawer" v-on:click.prevent="confirm.$reset()"
                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white">
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
            <div class="p-4"
                v-bind:class="{ 'min-h-[calc(100vh-147px)]': confirm.placement == 'left' || confirm.placement == 'right' }">
                <span v-if="confirm.useIcon" class="flex items-center">
                    <Icon icon="tabler:alert-square-rounded"
                        class="w-12 h-12 mx-auto mb-4 text-warning-500 dark:text-warning-400" aria-hidden="true"
                        v-if="confirm.type == 'warning'" />
                    <Icon icon="tabler:square-rounded-check"
                        class="w-12 h-12 mx-auto mb-4 text-success-500 dark:text-success-400" aria-hidden="true"
                        v-if="confirm.type == 'success'" />
                    <Icon icon="tabler:square-rounded-x"
                        class="w-12 h-12 mx-auto mb-4 text-danger-700 dark:text-danger-600" aria-hidden="true"
                        v-if="confirm.type == 'danger'" />
                    <Icon icon="tabler:info-square-rounded"
                        class="w-12 h-12 mx-auto mb-4 text-info-500 dark:text-info-400" aria-hidden="true"
                        v-if="confirm.type == 'info'" />
                </span>
                <div class="flex-row items-center mb-5 text-center gap-y-2">
                    <h3 class="text-lg font-normal" v-bind:class="{
                        'text-warning-500 dark:text-warning-400': confirm.type == 'warning',
                        'text-success-500 dark:text-success-400': confirm.type == 'success',
                        'text-danger-700 dark:text-danger-600': confirm.type == 'danger',
                        'text-info-500 dark:text-info-400': confirm.type == 'info',
                    }" v-text="$t(confirm.title)" v-show="confirm.title != ''"></h3>
                    <p class="text-gray-500 dark:text-gray-400" v-text="$t(confirm.message)"
                        v-show="confirm.message != ''"></p>
                </div>
            </div>
            <hr class="h-px my-0 bg-gray-200 border-0 dark:bg-gray-700">
            <!-- Footer -->
            <div class="flex items-center justify-center p-4 gap-x-3">
                <span v-if="confirm.useCancel" class="w-full">
                    <UIButton size="sm" class="w-full" as="button" rounded="lg" type="light"
                        data-drawer-hide="confirm-dialog-drawer" v-on:click="confirm.$reset()">
                        <span v-text="$t(confirm.labelCancel)" class="truncate"></span>
                    </UIButton>
                </span>
                <span v-if="confirm.useOk" class="w-full">
                    <UIButton size="sm" class="w-full" as="button" rounded="lg" v-bind:type="confirm.type"
                        data-drawer-hide="confirm-dialog-drawer" v-on:click="setValidConfirm()"
                        v-bind:x-on:click.prevent="'$dispatch(\'' + confirm.target + '\')'">
                        <span v-text="$t(confirm.labelOk)" class="truncate"></span>
                    </UIButton>
                </span>
            </div>
        </div>
        <template v-if="confirm.opened">
            <div class="fixed inset-0 z-40 bg-gray-900/50 dark:bg-gray-900/80"
                v-bind:class="{ 'backdrop-filter backdrop-blur-[2.5px] bg-opacity-50 dark:bg-opacity-50 transition duration-100': confirm.backdropBlur }"
                v-if="confirm.opened" v-bind:key="'backdrop-confirm'">
            </div>
        </template>
    </div>
</template>
<style></style>
