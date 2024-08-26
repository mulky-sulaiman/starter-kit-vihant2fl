<script lang="ts" setup>
const props = defineProps({
    size: {
        type: String,
        default: 'sm', // xs, sm,md,lg,xl
    },
    variant: {
        type: String,
        default: 'primary', // primary, success, warning, danger, info, dark, light
    },
    rounded: {
        type: String,
        default: null, // null, none, sm, md, lg, xl, full
    },
})

const sizeClass = computed(() => {
    return {
        xs: 'h-1',
        sm: 'h-1.5',
        md: 'h-2.5',
        lg: 'h-4',
        xl: 'h-6',
    }[props.size];
})

const variantBgClass = computed(() => {
    return {
        primary: 'bg-primary-200',
        success: 'bg-success-200',
        warning: 'bg-warning-200',
        danger: 'bg-danger-200',
        error: 'bg-danger-200',
        info: 'bg-info-200',
        dark: 'bg-gray-200 dark:bg-white',
    }[props.variant];
});

const variantClass = computed(() => {
    return {
        primary: 'bg-primary-600',
        success: 'bg-success-600',
        warning: 'bg-warning-600',
        danger: 'bg-danger-600',
        error: 'bg-danger-600',
        info: 'bg-info-600',
        dark: 'bg-gray-900 dark:bg-gray-800',
    }[props.variant];
});

const roundedClass = (props.rounded != null) ? 'rounded-' + props.rounded : ''

</script>
<template>

    <div class="progress-bar" v-bind:class="[sizeClass, variantBgClass, roundedClass]">
        <div class="progress-bar-indeterminate" v-bind:class="[roundedClass, variantClass]">
        </div>
    </div>

</template>
<style scoped>
.progress-bar {
    /*height: 4px;*/
    /*background-color: rgba(5, 114, 206, 0.2);*/
    width: 100%;
    overflow: hidden;
}

.progress-bar-indeterminate {
    width: 100%;
    height: 100%;
    /* background-color: rgb(5, 114, 206); */
    animation: indeterminateAnimation 1s infinite linear;
    transform-origin: 0% 50%;
}

@keyframes indeterminateAnimation {
    0% {
        transform: translateX(0) scaleX(0);
    }

    40% {
        transform: translateX(0) scaleX(0.4);
    }

    100% {
        transform: translateX(100%) scaleX(0.5);
    }
}
</style>
