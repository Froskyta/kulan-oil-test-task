<template>
  <div class="user-interactive">
    <div class="from-city">
      <ThePopupList :list="cities"
                    key="from-city"
                    v-model:value="currentFromCity"
                    placeholder="Выберите город"
                    trackBy="id"
                    labelKey="address"
      />
      <div class="chips">
        <div class="chip"
             @click="currentFromCity = city"
             :class="[
                 currentFromCity?.id === city.id && 'active'
             ]"
             :key="'from' + city.address"
             v-for="city in cities"
        >
          {{ city.address }}
        </div>
      </div>
    </div>
    <ArrowLeftRightIcon class="change-icon" />
    <div class="to-city">
      <ThePopupList :list="cities"
                    key="to-city"
                    v-model:value="currentToCity"
                    placeholder="Выберите город"
                    trackBy="id"
                    labelKey="address"
      />
      <div class="chips">
        <div class="chip"
             @click="currentToCity = city"
             :class="[
                 currentToCity?.id === city.id && 'active'
             ]"
             :key="'from' + city.address"
             v-for="city in cities"
        >
          {{ city.address }}
        </div>
      </div>
    </div>
    <TheButton class="submit"
               @click="callCourier">
      Вызвать курьера
    </TheButton>
  </div>
</template>

<script lang="ts" setup>
import {ThePopupList} from "@entities/poput-list/index";
import {TheButton} from "@ui/button/index";
import {getCities, CityT} from "@features/delivery-calculator/api";
import ArrowLeftRightIcon from '@media/icons/arrow-left-right.svg?component';
import {onMounted, ref} from "vue";

const cities = ref<CityT[]>([])
const currentFromCity = ref<CityT | null>(null)
const currentToCity = ref<CityT | null>(null)

function callCourier() {
  alert('А что мне делать?')
}

onMounted(() => {
  cities.value = getCities()
})
</script>

<script lang="ts">
export default {
  name: "TheCallACourier"
}
</script>

<style scoped lang="scss">
@import "index";
</style>
