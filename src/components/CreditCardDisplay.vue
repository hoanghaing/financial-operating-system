<template>
  <div class="credit-card-display">
    <div
      class="credit-card-display__toggle-card-info row float-right"
      @click.stop="toggleInfo"
    >
      <img src="src/assets/icons/remove_red_eye.svg" />
      <div class="q-ml-xs credit-card-display__toggle-card-text">
        <span v-if="hideInfomation">Show </span><span v-else>Hide </span> card number
      </div>
    </div>
    <q-carousel
      v-model="slide"
      animated
      navigation
      class="custom-carousel-cards"
      control-color="green-4"
    >
      <q-carousel-slide name="style" class="column no-wrap flex-center">
        <credit-card :card="card" :is-hide-infomation="hideInfomation" />
      </q-carousel-slide>
      <q-carousel-slide name="style1" class="column no-wrap flex-center">
        <credit-card :card="card2" :is-hide-infomation="hideInfomation" />
      </q-carousel-slide>
      <q-carousel-slide name="style2" class="column no-wrap flex-center">
        <credit-card :card="card3" :is-hide-infomation="hideInfomation" />
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import CreditCard from "./CreditCard.vue";
const slide = ref("style");
const hideInfomation = ref(true);
const card = {
  owner: "Mark Henry",
  no: "1234 5678 9999",
  year: 2020,
  validDate: "12/26",
  cvv: "933",
};
const card2 = {
  owner: "Mark Henry 2",
  no: "1234 5678 9999",
  year: 2020,
  validDate: "12/26",
  cvv: "933",
};
const card3 = {
  owner: "Mark Henry 3",
  no: "1234 5678 9999",
  year: 2020,
  validDate: "12/26",
  cvv: "933",
};

const toggleInfo = () => {
  hideInfomation.value = !hideInfomation.value;
};
</script>
<style scoped lang="scss">
.custom-carousel-cards {
  max-height: 300px;
  width: 26rem;
}
.custom-carousel-cards .q-carousel__slide {
  justify-content: unset !important;
  flex-direction: unset !important;
  flex-wrap: unset !important;
  width: 26rem;
}
.q-carousel__slide,
.q-carousel .q-carousel--padding {
  padding: unset !important;
}
.q-carousel__slides-container {
  height: unset !important;
  width: 26rem !important;
}
.q-carousel__control {
  width: 26rem !important;
}
// .q-btn__content {
// background: #01d167;
// border-radius: 20px;
// }
// .q-btn__content .q-icon {
//   all: unset !important;
// }
// .q-carousel__control {
//   all: unset !important;
//   position: relative !important;
//   top: -35px !important;
//   background-color: red !important;
// }
.credit-card-display__toggle-card-info {
  cursor: pointer;
}
.credit-card-display__toggle-card-text {
  color: $credit-card-green;
  font-weight: bold;
  line-height: 20px;
}
</style>
