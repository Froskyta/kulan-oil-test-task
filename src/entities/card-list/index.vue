<template>
  <h2>
    {{ title }}
  </h2>
  <div class="grid-cards">
    <div v-for="card in list" :key="card.title">
      <component :is="card.icon" />
      <p>{{ card.title }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string
  list: {
    title: string
    icon: any
  }[]
}>()
</script>

<script lang="ts">
export default {
  name: "TheCardList"
}
</script>

<style scoped lang="scss">
@import "index";
</style>
