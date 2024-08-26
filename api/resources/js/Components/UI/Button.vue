<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
    type: {
        type: String,
        default: 'primary',
    },
    size: {
        type: String,
        default: 'md',
    },
    as: {
        type: String,
        default: 'button',
    },
    href: {
        type: String,
        default: '#',
    },
    submit: {
        type: Boolean,
        default: false,
    },
    rounded: {
        type: String,
        default: 'lg',
    },
    variant: {
        type: String,
        default: 'default',
    },
    // disabled: {
    //     type: Boolean,
    //     default: false,
    // },
});

const btnClass = 'uppercase tracking-widest disabled:!cursor-not-allowed disabled:opacity-50'

const typeClass = computed(() => {
    if (props.variant == 'default') {
        return {
            primary: 'text-white bg-primary-700 hover:bg-primary-800 focus:ring-offset-2 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800',
            alternate: 'text-gray-900 focus:outline-none bg-white border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-offset-2 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700',
            dark: 'text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-offset-2 focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700',
            light: 'text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-offset-2 focus:ring-4 focus:ring-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700',
            secondary: 'text-primary-700 bg-white border border-gray-200 hover:bg-gray-200 focus:ring-offset-2 focus:ring-4 focus:ring-primary-300 dark:bg-gray-50 dark:hover:bg-primary-100 focus:outline-none dark:focus:ring-primary-800 dark:hover:border-gray-400',
            success: 'focus:outline-none text-white bg-success-700 hover:bg-success-800 focus:ring-offset-2 focus:ring-4 focus:ring-success-300 dark:bg-success-600 dark:hover:bg-success-700 dark:focus:ring-success-800',
            danger: 'focus:outline-none text-white bg-danger-700 hover:bg-danger-800 focus:ring-offset-2 focus:ring-4 focus:ring-danger-300 dark:bg-danger-600 dark:hover:bg-danger-700 dark:focus:ring-danger-900',
            warning: 'focus:outline-none text-white bg-warning-400 hover:bg-warning-500 focus:ring-offset-2 focus:ring-4 focus:ring-warning-300 dark:focus:ring-warning-900',
            info: 'focus:outline-none text-white bg-info-700 hover:bg-info-800 focus:ring-4 focus:ring-offset-2 focus:ring-info-300 dark:bg-info-600 dark:hover:bg-info-700 dark:focus:ring-info-900',
        }[props.type];
    } else if (props.variant == 'outline') {
        return {
            primary: 'text-primary-700 hover:text-white border border-primary-700 hover:bg-primary-800 focus:ring-offset-2 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:border-primary-500 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-500 dark:focus:ring-primary-800',
            alternate: '',
            dark: 'text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-offset-2 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800',
            light: '',
            secondary: '',
            success: 'text-success-700 hover:text-white border border-success-700 hover:bg-success-800 focus:ring-offset-2 focus:ring-4 focus:outline-none focus:ring-success-300 dark:border-success-500 dark:text-success-500 dark:hover:text-white dark:hover:bg-success-600 dark:focus:ring-success-800',
            danger: 'text-danger-700 hover:text-white border border-danger-700 hover:bg-danger-800 focus:ring-offset-2 focus:ring-4 focus:outline-none focus:ring-danger-300 dark:border-danger-500 dark:text-danger-500 dark:hover:text-white dark:hover:bg-danger-600 dark:focus:ring-danger-900',
            warning: 'text-warning-400 hover:text-white border border-warning-400 hover:bg-warning-500 focus:ring-offset-2 focus:ring-4 focus:outline-none focus:ring-warning-300 dark:border-warning-300 dark:text-warning-300 dark:hover:text-white dark:hover:bg-warning-400 dark:focus:ring-warning-900',
            info: 'text-info-700 hover:text-white border border-info-700 hover:bg-info-800 focus:ring-offset-2 focus:ring-4 focus:outline-none focus:ring-info-300 dark:border-info-400 dark:text-info-400 dark:hover:text-white dark:hover:bg-info-500 dark:focus:ring-info-900',
        }[props.type];
    } else if (props.variant == 'ghost') {
        return {
            primary: 'text-primary-700 hover:text-white hover:bg-primary-800 focus:ring-offset-2 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-500 dark:focus:ring-primary-800',
            alternate: '',
            dark: 'text-gray-900 hover:text-white hover:bg-gray-900 focus:ring-offset-2 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800',
            light: '',
            secondary: '',
            success: 'text-success-700 hover:text-white hover:bg-success-800 focus:ring-offset-2 focus:ring-4 focus:outline-none focus:ring-success-300 dark:text-success-500 dark:hover:text-white dark:hover:bg-success-600 dark:focus:ring-success-800',
            danger: 'text-danger-700 hover:text-white hover:bg-danger-800 focus:ring-offset-2 focus:ring-4 focus:outline-none focus:ring-danger-300 dark:text-danger-500 dark:hover:text-white dark:hover:bg-danger-600 dark:focus:ring-danger-900',
            warning: 'text-warning-400 hover:text-white hover:bg-warning-500 focus:ring-offset-2 focus:ring-4 focus:outline-none focus:ring-warning-300 dark:text-warning-300 dark:hover:text-white dark:hover:bg-warning-400 dark:focus:ring-warning-900',
            info: 'text-info-700 hover:text-white hover:bg-info-800 focus:ring-offset-2 focus:ring-4 focus:outline-none focus:ring-info-300 dark:text-info-400 dark:hover:text-white dark:hover:bg-info-500 dark:focus:ring-info-900',
        }[props.type];
    }
});

const sizeClass = computed(() => {
    return {
        xs: 'px-3 py-2 text-xs font-medium text-center',
        sm: 'px-3 py-2 text-sm font-medium text-center',
        md: 'px-5 py-2.5 text-sm font-medium text-center',
        lg: 'px-5 py-3 text-base font-medium text-center',
        xl: 'px-6 py-3.5 text-base font-medium text-center',
        '2xl': 'px-7 py-4 text-base font-medium text-center',
    }[props.size];
});

// const disabledClass = computed(() => {
//     return {
//         true: '!cursor-not-allowed opacity-50',
//         false: '',
//     }[props.disabled]
// });

const roundedClass = 'rounded-' + props.rounded
</script>
<template>
    <template v-if="as === 'button'">
        <button v-bind:type="submit ? 'submit' : 'button'"
            class="flex items-center justify-center transition duration-150 ease-in-out"
            v-bind:class="[btnClass, typeClass, sizeClass, roundedClass]" v-bind="$attrs">
            <slot />
        </button>
    </template>
    <template v-if="as === 'a'">
        <a v-bind:href="href" class="flex items-center justify-center transition duration-150 ease-in-out"
            v-bind:class="[btnClass, typeClass, sizeClass, roundedClass]" v-bind="$attrs">
            <slot />
        </a>
    </template>
    <template v-if="as === 'link'">
        <Link v-bind:href="href" class="flex items-center justify-center transition duration-150 ease-in-out"
            v-bind:class="[btnClass, typeClass, sizeClass, roundedClass]" v-bind="$attrs">
        <slot />
        </Link>
    </template>
</template>
<style scoped></style>
