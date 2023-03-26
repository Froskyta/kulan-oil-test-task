<template>
  <h2>
    История Exline
  </h2>
  <div class="cards-grid">
    <div>
      <div class="content">
        <h3>
          Курьерская компания Exline основана 31 июля 2003 года
        </h3>
        <p>
          За время работы компания Exline заняла достойную нишу на рынке почтовых услуг, зарекомендовав себя как надежного партнера, которому доверяют свои отправления многие компании казахстанского и международного бизнеса
        </p>
      </div>
      <img :src="Courier1"
           alt=""
           style="margin-top: 24px"/>
    </div>
    <div>
      <img :src="Courier2"
           alt=""
           style="margin-bottom: 24px">
      <div class="content">
        <h3>
          Курьерская компания Exline, оказывая доступные услуги всем, предлагает индивидуальный подход к каждому клиенту!
        </h3>
        <p>
          Развивая свой бизнес, мы хотим быть полезными в развитие Вашего бизнеса!
          Профессиональный опыт сотрудников курьерской компании Exline и опыт наших партнеров дает нам право быть уверенными в том, что наше сотрудничество обеспечит сторонам экономию средств и времени!
          ExLine — линия надежной доставки!
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Courier1 from '@media/images/courier-1.png'
import Courier2 from '@media/images/courier-2.png'
</script>

<script lang="ts">
export default {
  name: "TheHistoryExline"
}
</script>

<style scoped lang="scss">
@import "index";
</style>
