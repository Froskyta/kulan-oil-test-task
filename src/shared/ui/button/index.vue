<template>
  <button
      :type="type || 'button'"
      :class="[
        typeStyle || 'primary'
      ]"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import {defineProps} from 'vue';

defineProps<{
  typeStyle?: string
  type?: 'button' | 'submit' | 'reset'
}>()
</script>

<script lang="ts">
export default {
  name: "TheButton"
}
</script>

<style scoped lang="scss">
@import "index";
</style>
