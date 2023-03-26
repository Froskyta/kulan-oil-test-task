<template>
  <div class="user-interactive">
    <TheInput v-model:value="invoiceNumber"
              placeholder="Укажите номер накладной"
              :icon="SearchIcon"/>
    <TheButton @click="trackPackage">
      Отследить посылку
    </TheButton>
  </div>
</template>

<script lang="ts" setup>
import {TheInput} from "@ui/input/index";
import {TheButton} from "@ui/button/index";
import SearchIcon from '@media/icons/search.svg'
import {ref} from "vue";

const invoiceNumber = ref<string | number>('')

function trackPackage() {
  alert('Отслеживать нечего')
}
</script>

<script lang="ts">
export default {
  name: "TheTrackThePackage"
}
</script>

<style scoped lang="scss">
@import "index";
</style>
