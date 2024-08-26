<script lang="ts" setup>
// import { computed } from 'vue';
// import { randomID } from '@/Helpers/utils'

const props = defineProps({
    name: {
        type: String,
        default: 'badge-' + randomID(15),
    },
    type: {
        type: String,
        default: 'primary',
    },
    size: {
        type: String,
        default: 'xs',
    },
    as: {
        type: String,
        default: 'span',
    },
    href: {
        type: String,
        default: '#',
    },
    rounded: {
        type: String,
        default: null,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    border: {
        type: Boolean,
        default: false,
    },
    dismissable: {
        type: Boolean,
        default: false,
    },
});

const badgeClass = 'font-semibold me-2 px-2.5 py-0.5 inline-flex items-center justify-center uppercase tracking-widest'
const sizeClass = 'text-' + props.size
const borderClass = computed(() => {
    return {
        true: 'border border-' + props.type + '-400',
        false: '',
    }[props.border]
})
const roundedClass = (props.rounded == null) ? 'rounded' : 'rounded-' + props.rounded
const typeClass = 'text-' + props.type + '-800 bg-' + props.type + '-100 dark:bg-' + props.type + '-900 dark:text-' + props.type + '-300 focus:ring-offset-2 focus:ring-4 focus:ring-' + props.type + '-300 focus:outline-none dark:focus:ring-' + props.type + '-800'
const dismissableClass = 'inline-flex items-center p-1 ' + sizeClass + ' text-' + props.type + '-400 bg-transparent ' + roundedClass + ' ms-2 hover:bg-' + props.type + '-200 hover:text-' + props.type + '-900 dark:hover:bg-' + props.type + '-800 dark:hover:text-' + props.type + '-300'
const disabledClass = computed(() => {
    return {
        true: '!cursor-not-allowed opacity-50',
        false: '',
    }[props.disabled]
});
const hoverClass = 'hover:bg-' + props.type + '-200'
</script>
<template>
    <template v-if="as === 'span'">
        <span v-bind:id="name"
            v-bind:class="[badgeClass, sizeClass, typeClass, disabledClass, borderClass, roundedClass]" v-bind="$attrs"
            v-bind:disabled="disabled">
            <slot />
            <template v-if="dismissable">
                <button type="button" v-bind:class="dismissableClass" v-bind:data-dismiss-target="'#' + name"
                    aria-label="{{ $t('global.close') }}">
                    <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span class="sr-only">{{ $t('global.close') }}</span>
                </button>
            </template>
        </span>
    </template>
    <template v-if="as === 'a'">
        <a v-bind:href="href" v-bind:id="name ?? null"
            v-bind:class="[hoverClass, badgeClass, sizeClass, typeClass, disabledClass, borderClass, roundedClass]"
            v-bind="$attrs" v-bind:disabled="disabled">
            <slot />
            <template v-if="dismissable">
                <button type="button" v-bind:class="dismissableClass" v-bind:data-dismiss-target="'#' + name"
                    aria-label="{{ $t('global.close') }}">
                    <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span class="sr-only">{{ $t('global.close') }}</span>
                </button>
            </template>
        </a>
    </template>
    <template v-if="as === 'link'">
        <Link v-bind:href="href" v-bind:id="name ?? null"
            v-bind:class="[hoverClass, badgeClass, sizeClass, typeClass, disabledClass, borderClass, roundedClass]"
            v-bind="$attrs" v-bind:disabled="disabled">
        <slot />
        <template v-if="dismissable">
            <button type="button" v-bind:class="dismissableClass" v-bind:data-dismiss-target="'#' + name"
                aria-label="{{ $t('global.close') }}">
                <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span class="sr-only">{{ $t('global.close') }}</span>
            </button>
        </template>
        </Link>
    </template>
</template>
<style scoped></style>
