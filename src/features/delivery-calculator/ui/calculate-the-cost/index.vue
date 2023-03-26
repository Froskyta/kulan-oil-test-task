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
    <TheButton class="submit" @click="calculateCost">
      Рассчитать стоимость
    </TheButton>
  </div>
  <div class="calculating-data" v-if="costDistance">
    <div class="list">
      <div><DistanceIcon /> Расстояние: <b>{{ costDistance }} км</b></div>
      <div><TimeIcon /> Время: <b>{{ costTime }} часов</b></div>
      <div><TengeIcon /> Стоимость: <b>{{ costPrice }} ₸</b></div>
    </div>
    <TheButton typeStyle="secondary" @click="clearCost">
      Сбросить
    </TheButton>
  </div>
</template>

<script lang="ts" setup>
import {ThePopupList} from "@entities/poput-list/index";
import {TheButton} from "@ui/button/index";
import {getCities, CityT} from "@features/delivery-calculator/api";
import {onMounted, ref} from "vue";
import ArrowLeftRightIcon from '@media/icons/arrow-left-right.svg?component';
import {calculateDistance, calculateTime, calculatePrice} from "@shared/hooks/useCost";
import DistanceIcon from '@media/icons/distance-icon.svg?component';
import TimeIcon from '@media/icons/clock-icon.svg?component';
import TengeIcon from '@media/icons/tenge-icon.svg?component';

const cities = ref<CityT[]>([])
const currentFromCity = ref<CityT | null>(null)
const currentToCity = ref<CityT | null>(null)
const costDistance = ref<string | number | null>(null)
const costTime = ref<string | number | null>(null)
const costPrice = ref<string | number | null>(null)

function calculateCost() {
  costDistance.value = calculateDistance(
      Number(currentFromCity.value?.id),
      Number(currentToCity.value?.id)
  )
  costTime.value = calculateTime(
      Number(currentFromCity.value?.id),
      Number(currentToCity.value?.id)
  )
  costPrice.value = calculatePrice(
      Number(currentFromCity.value?.id),
      Number(currentToCity.value?.id)
  )
}

function clearCost() {
  costDistance.value = ''
  costTime.value = ''
  costPrice.value = ''
  currentFromCity.value = null
  currentToCity.value = null
}

onMounted(() => {
  cities.value = getCities()
})
</script>

<script lang="ts">
export default {
  name: "TheCalculateTheCost"
}
</script>

<style scoped lang="scss">
@import "index";
</style>
