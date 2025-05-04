<template>
  <div class="credit-card-display">
    <div
      class="credit-card-display__toggle-card-info row float-right q-mb-sm"
      @click.stop="toggleInfo"
    >
      <img src="src/assets/icons/remove_red_eye.svg" />
      <div class="q-ml-xs credit-card-display__toggle-card-text">
        <span v-if="isHideInformation">Show </span><span v-else>Hide </span> card number
      </div>
    </div>
    <q-carousel
      v-model="slide"
      animated
      navigation
      class="custom-carousel-cards"
      control-color="green-4"
    >
      <q-carousel-slide
        v-for="(card, index) in cards"
        :key="index"
        :name="'style' + index"
        class="column no-wrap flex-center"
      >
        <credit-card :card="card" :is-hide-information="isHideInformation" />
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useCardStore } from "../stores/useCardStore";
import { storeToRefs } from "pinia";
import CreditCard from "./CreditCard.vue";
const slide = ref("style0");
const isHideInformation = ref(true);

const cardStore = useCardStore();
const { cards } = storeToRefs(cardStore);

const toggleInfo = () => {
  isHideInformation.value = !isHideInformation.value;
};
onMounted(() => {
  cardStore.setActiveCard(0);
});
watch(slide, (newSlide) => {
  const index = parseInt(newSlide.replace("style", ""), 10);
  cardStore.setActiveCard(index);
});
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
.credit-card-display__toggle-card-info {
  cursor: pointer;
}
.credit-card-display__toggle-card-text {
  color: $credit-card-green;
  font-weight: bold;
  line-height: 20px;
}
</style>
