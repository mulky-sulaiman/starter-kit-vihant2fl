<script lang="ts" setup>
import UISpeedDialHorizontal from '@/Components/UI/SpeedDial/Horizontal.vue'
import UISpeedDialVertical from '@/Components/UI/SpeedDial/Vertical.vue'
import UISpeedDialCentered from '@/Components/UI/SpeedDial/Centered.vue'

const props = defineProps({
  mode: {
    type: String,
    default: 'vertical'
  }
})
</script>

<template>
  <div>
    <template v-if="mode === 'horizontal'">
      <UISpeedDialHorizontal />
    </template>
    <template v-if="mode === 'vertical'">
      <UISpeedDialVertical />
    </template>
    <template v-if="mode === 'centered'">
      <UISpeedDialCentered />
    </template>
  </div>
</template>
