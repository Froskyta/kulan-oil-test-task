<template>
  <section class="container switcher-wrapper">
    <div class="switcher">
      <button v-for="tab in tabs"
              @click="setCurrentTab(tab)"
              :class="[
                  currentTab?.title === tab.title && 'active'
              ]"
              :key="tab.title">
        {{ tab.title }}
      </button>
    </div>
    <div class="content">
      <component :is="currentTab?.component"/>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {currentTab, setDefaultTab, setCurrentTab} from "@features/delivery-calculator/ui/switcher/model";
import {tabs} from "@features/delivery-calculator/ui/switcher/config";

setDefaultTab()
</script>

<script lang="ts">
export default {
  name: "TheDeliveryCalculatorSwitcher"
}
</script>

<style scoped lang="scss">
@import "index";
</style>
