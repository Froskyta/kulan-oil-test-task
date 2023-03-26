<template>
  <footer>
    <div class="container">
      <TheLogotype style="height: 64px"/>
      <div style="transform: translateX(20%)">
        <a :href="instagramData.link" target="_blank">
          <component :is="instagramData.icon" />
        </a>
        <a :href="youtubeData.link" target="_blank" style="margin-left: 25px">
          <component :is="youtubeData.icon" />
        </a>
        <a :href="facebookData.link" target="_blank" style="margin-left: 25px">
          <component :is="facebookData.icon" />
        </a>
      </div>
      <div>
        © Все права защищены 2023
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import {TheLogotype} from "@ui/logotype/index";
import {instagramData, youtubeData, facebookData} from "@shared/config";
</script>

<script lang="ts">
export default {
  name: "TheFooter"
}
</script>

<style scoped lang="scss">
@import "index";
</style>
