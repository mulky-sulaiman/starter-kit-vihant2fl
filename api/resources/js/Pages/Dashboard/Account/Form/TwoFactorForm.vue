<script lang="ts" setup>
import { router } from '@inertiajs/vue3';
import { ref } from 'vue'
import { useToastStore } from '@/stores/useToastStore'
import axios from 'axios'
import FormLabel from '@/Components/Form/Label.vue'
import UIBadge from '@/Components/UI/Badge.vue'
import UIButton from '@/Components/UI/Button.vue'

const toast = useToastStore()

const showRecoveryCodes = ref(false)
const enable = () => {
    axios.post(route('two-factor.enable')).then(() => {
        router.get(route('auth.two-factor'))
    }).catch((e) => {
        if (e.response.status === 423) {
            router.get(route('password.confirm'))
        }
    })
}

const disable = () => {
    router.delete(route('two-factor.disable'))

}

const recoveryCodes = ref([])

const fetchRecoveryCodes = () => {
    axios.get(route('two-factor.recovery-codes')).then((response) => {
        recoveryCodes.value = response.data
    }).catch((e) => {
        if (e.response.status === 423) {
            router.get(route('password.confirm'))
        }
    })
}

const toggleShowRecoveryCodes = () => {
    if (recoveryCodes.value.length === 0) {
        fetchRecoveryCodes()
    }
    showRecoveryCodes.value = !showRecoveryCodes.value
}

const regenerateRecoveryCodes = () => {
    axios
        .post(route('two-factor.recovery-codes'))
        .then(() => fetchRecoveryCodes());
};


</script>
<template>
    <div class="mt-4 space-y-4 md:space-y-6">
        <h1
            class="mt-4 text-lg font-bold leading-tight tracking-tight text-gray-900 text-start md:text-2xl dark:text-white">
            {{ $t('global.two_factor') }}
        </h1>
        <FormLabel>
            <template #label>

                <div class="inline-flex items-center space-x-2">
                    <span>Status</span>

                    <div class="inline-flex items-center space-x-1" v-if="$page.props.auth.user.two_factor_enabled">
                        <span
                            class="font-semibold me-2 px-2.5 py-0.5 inline-flex items-center justify-center uppercase tracking-widest text-xs text-success-800 dark:text-success-300 focus:ring-offset-2 focus:ring-4 focus:ring-success-300 focus:outline-none dark:focus:ring-success-800">
                            <span class="inline-flex items-center space-x-1">
                                <span class="w-2 h-2 rounded-full me-1 bg-success-500"></span>
                                <span>Enabled</span>
                            </span>
                        </span>
                        <UIBadge size="xs" v-bind:border="true" type="danger" as="a" v-on:click.prevent="disable">
                            <span class="truncate">Disable 2FA</span>
                        </UIBadge>
                    </div>

                    <div class="inline-flex items-center space-x-1" v-else>
                        <span
                            class="font-semibold me-2 px-2.5 py-0.5 inline-flex items-center justify-center uppercase tracking-widest text-xs text-success-800 dark:text-danger-300 focus:ring-offset-2 focus:ring-4 focus:ring-danger-300 focus:outline-none dark:focus:ring-danger-800">
                            <span class="inline-flex items-center space-x-1">
                                <span class="w-2 h-2 rounded-full me-1 bg-danger-500"></span>
                                <span>Disabled</span>
                            </span>
                        </span>
                        <UIBadge size="xs" v-bind:border="true" as="a" type="success" v-on:click.prevent="enable">
                            <span class="truncate">Enable 2FA</span>
                        </UIBadge>
                    </div>

                </div>
            </template>
        </FormLabel>
        <div v-if="$page.props.auth.user.two_factor_enabled">
            <div class="space-y-6">
                <!-- <h2 class="font-mono font-bold text-gray-900">Recovery codes</h2> -->
                <div>
                    <div class="flex flex-col w-full mt-4 space-y-4 md:w-1/2">
                        <UIBadge size="xs" v-bind:border="true" as="a" type="primary"
                            v-on:click.prevent="toggleShowRecoveryCodes">
                            <span class="truncate"
                                v-text="showRecoveryCodes && recoveryCodes.length > 0 ? 'Hide Recovery Codes' : 'Show Recovery Codes'"></span>
                        </UIBadge>
                        <div class="flex flex-col space-y-4" v-if="showRecoveryCodes && recoveryCodes.length > 0">
                            <div>
                                <p class="text-sm">Store these recovery codes in a secure password manager. They can be
                                    used
                                    to recover access to your account if your two factor authentication device is lost.
                                </p>
                            </div>
                            <ul class="p-2 space-y-1 font-semibold bg-gray-200 rounded-lg dark:bg-gray-700">
                                <li v-for="recoveryCode in recoveryCodes" :key="recoveryCode" class="text-sm">
                                    {{ recoveryCode }}
                                </li>
                            </ul>
                            <UIBadge size="xs" v-bind:border="true" as="a" type="gray"
                                v-on:click.prevent="regenerateRecoveryCodes">
                                <span class="truncate">Regenerate Recovery Codes</span>
                            </UIBadge>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>
