<script lang="ts" setup>
import { router } from '@inertiajs/vue3';
import { Icon } from '@iconify/vue'
import UIButton from '@/Components/UI/Button.vue'
import { ref } from 'vue'
import { useToastStore } from '@/stores/useToastStore'

const toast = useToastStore()

const showRecoveryCodes = ref(false)
const enable = () => {
    router.post(route('two-factor.enable'), {}, {
        onSuccess: () => {
            router.get(route('auth.two-factor'))
        }
    });
}

const disable = () => {
    router.delete(route('two-factor.disable'), {
        onSuccess: page => {
            toast.add({
                type: 'info',
                message: 'Two Factor Authentication has been successfully disabled',
                autodismiss: true,
            })
        }
    })

}
</script>
<template>
    <div class="mt-4 space-y-4 md:space-y-6">
        <h1
            class="mt-4 text-lg font-bold leading-tight tracking-tight text-gray-900 text-start md:text-2xl dark:text-white">
            {{ $t('global.two_factor') }}
        </h1>
        <div v-if="!$page.props.auth.user.two_factor_enabled">
            <UIButton v-on:click="enable">Enable Two Factor Authentication
            </UIButton>
        </div>
        <div v-if="$page.props.auth.user.two_factor_enabled">
            <UIButton v-on:click="disable">Disable Two Factor Authentication
            </UIButton>
            <div class="space-y-6">
                <!-- <h2 class="font-mono font-bold text-gray-900">Recovery codes</h2> -->
                <div>
                    <button class="text-sm font-semibold text-blue-500"
                        v-on:click.prevent="showRecoveryCodes = !showRecoveryCodes"
                        v-text="showRecoveryCodes ? 'Hide Recovery Codes' : 'Show Recovery Codes'"></button>

                    <ul v-if="showRecoveryCodes" class="space-y-1">
                        <li v-for="recoveryCode in $page.props.auth.user?.two_factor_recovery_codes" :key="recoveryCode"
                            class="text-sm">
                            {{ recoveryCode }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</template>
