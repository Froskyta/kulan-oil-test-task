<template>
  <TheHeader />
  <TheMainSlider />
  <TheDeliveryCalculator/>
  <div class="container">
    <TheCardList :title="title"
                 :list="list" />
    <TheHistoryExline />
    <TheWeAreTrusted />
    <TheContacts />
  </div>
  <TheFooter style="margin-top: 20px"/>
</template>

<script lang="ts" setup>
import {TheHeader} from "@features/header";
import {TheMainSlider} from "@features/main-slider";
import {TheDeliveryCalculator} from "@features/delivery-calculator";
import {TheCardList} from "@entities/card-list/index";
import {title, list} from "@shared/config";
import {TheHistoryExline} from "@entities/history-exline/index";
import {TheWeAreTrusted} from "@entities/we-are-trusted/index";
import {TheContacts} from "@entities/contacts/index";
import {TheFooter} from "@features/footer/index";
</script>

<script lang="ts">
export default {
  name: "MainPage"
}
</script>

<style scoped lang="scss">
@import "index";
</style>
