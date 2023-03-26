<template>
  <button :class="[
            typeStyle || 'primary'
          ]"
          :type="type">
    <slot />
  </button>
</template>

<script lang="ts" setup>
defineProps<{
  typeStyle?: string
  type?: string
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
