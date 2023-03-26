<template>
  <header class="container">
    <TheLogotype class="logotype"/>
    <div class="content">
      <nav>
        <router-link :to="{ name: item.routeName }"
                     v-for="item in menu" :key="item.routeName">
          {{ item.title }}
        </router-link>
      </nav>
      <div class="separator"></div>
      <a :href="`mailto:${emailData.link}`"
         class="contact-link">
        {{ emailData.title }}
      </a>
      <a :href="`tel:${phoneData.link}`"
         class="contact-link">
        {{ phoneData.title }}
      </a>
    </div>
  </header>
</template>

<script lang="ts" setup>
import {TheLogotype} from "@ui/logotype";
import {menu} from "./config";
import {emailData, phoneData} from "@/shared/config";
</script>

<script lang="ts">
export default {
  name: "TheHeader"
}
</script>

<style scoped lang="scss">
@import "index";
</style>
