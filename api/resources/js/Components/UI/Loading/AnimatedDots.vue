<template>
    <span class="animated-dots" v-bind="$attrs"></span>
</template>
<style scoped>
@keyframes animated-dots {
    0% {
        transform: translateX(-100%);
    }
}

.animated-dots {
    display: inline-block;
    overflow: hidden;
    vertical-align: bottom;
}

.animated-dots:after {
    display: inline-block;
    content: "...";
    animation: animated-dots 3s steps(4, jump-none) infinite;
}
</style>
