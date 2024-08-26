<script lang="ts" setup>
const props = defineProps({
    type: {
        type: String,
        default: 'danger',
    }
})
const countdownNumberEl = ref(null)
const countdown = ref(3)
const initCountdown = () => {
    setInterval(function () {
        countdown.value = --countdown.value <= 0 ? 3 : countdown.value;
        //countdownNumberEl.textContent = countdown;
    }, 1000);
}
const typeClass = 'text-' + props.type + '-600'
onMounted(() => {
    initCountdown()
})
</script>
<template>
    <div id="countdown" v-bind="$attrs">
        <div id="countdown-number" ref="countdownNumberEl" v-text="countdown" v-bind:class="[typeClass]"></div>
        <svg v-bind:class="[typeClass]">
            <circle r="18" cx="20" cy="20" stroke="currentColor"></circle>
        </svg>
    </div>
</template>
<style scoped>
#countdown {
    position: relative;
    margin: auto;
    /* margin-top: 100px; */
    height: 40px;
    width: 40px;
    text-align: center;
}

#countdown-number {
    /* color: black; */
    display: inline-block;
    line-height: 40px;
}

svg {
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 40px;
    transform: rotateY(-180deg) rotateZ(-90deg);
}

svg circle {
    stroke-dasharray: 113px;
    stroke-dashoffset: 0px;
    stroke-linecap: round;
    stroke-width: 3px;
    /* stroke: black; */
    fill: none;
    animation: countdown 3s linear infinite forwards;
}

@keyframes countdown {
    from {
        stroke-dashoffset: 113px;
    }

    to {
        stroke-dashoffset: 0px;
    }
}
</style>
