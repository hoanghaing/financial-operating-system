<template>
  <div class="credit-card-display">
    <div class="credit-card-display__toggle-card-info">Show card number</div>
    <q-carousel
      v-model="slide"
      animated
      navigation
      control-color="rgba(1, 209, 103, 0.2)"
      class="custom-carousel-cards"
    >
      <q-carousel-slide name="style" class="column no-wrap flex-center">
        <credit-card :card="card" class="q-mt-md text-center" />
      </q-carousel-slide>
      <q-carousel-slide name="tv" class="column no-wrap flex-center">
        <credit-card :card="card" class="q-mt-md text-center" />
      </q-carousel-slide>
      <q-carousel-slide name="layers" class="column no-wrap flex-center">
        <credit-card :card="card" class="q-mt-md text-center" />
      </q-carousel-slide>
      <q-carousel-slide name="map" class="column no-wrap flex-center">
        <credit-card :card="card" class="q-mt-md text-center" />
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import CreditCard from "./CreditCard.vue";
const slide = ref("style");
const card = {
  owner: "Mark Henry",
  no: "1234 5678 9999",
  year: 2020,
  validDate: "12/26",
  cvv: "933",
};
</script>
<style scoped>
.custom-carousel-cards {
}
.custom-carousel-cards .q-btn__content {
  background: #01d167;
  border-radius: 20px;
}
.custom-carousel-cards .q-btn__content .q-icon {
  all: unset !important;
}
</style>
