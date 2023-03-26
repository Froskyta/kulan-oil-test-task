<template>
  <h2>
    Нам доверяют
  </h2>
  <div class="partners-grid">
    <img :src="partner.image"
         alt=""
         v-for="partner in listPartners"
         :key="partner.image">
  </div>
</template>

<script lang="ts" setup>
import {listPartners} from "@shared/config";
</script>

<script lang="ts">
export default {
  name: "TheWeAreTrusted"
}
</script>

<style scoped lang="scss">
@import "index";
</style>
