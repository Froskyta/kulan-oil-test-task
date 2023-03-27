<template>
  <swiper :loop="true"
          :navigation="{
            prevEl: prevNav,
            nextEl: nextNav,
          }"
          :modules="modules">
    <swiper-slide class="slide-wrapper"
                  v-for="slide in slides"
                  :key="slide.title">
      <div class="container slide-content">
        <div>
          <h2>
            {{ slide.title }}
          </h2>
          <p>
            {{ slide.description }}
          </p>
          <TheButton v-if="slide.submit"
                     @click="slide.submit && slide.submit.method()">
            {{ slide.submit.title }}
          </TheButton>
        </div>
        <div>
          <img src="./media/car.png" alt="">
        </div>
      </div>
    </swiper-slide>
    <template v-slot:container-start>
      <div class="container navigations">
        <button class="left" ref="prevNav">
          <ArrowLeftIcon />
        </button>
        <button class="right" ref="nextNav">
          <ArrowRightIcon />
        </button>
      </div>
    </template>
  </swiper>
</template>

<script lang="ts" setup>
import ArrowLeftIcon from '@media/icons/arrow-left.svg?component'
import ArrowRightIcon from '@media/icons/arrow-right.svg?component'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import {ref} from "vue";
import {slides} from "./config";
import {TheButton} from "@ui/button";

const modules = [Navigation]
const prevNav = ref(null)
const nextNav = ref(null)
</script>

<script lang="ts">
export default {
  name: "TheMainSlider"
}
</script>

<style scoped lang="scss">
@import "index";
</style>
