<template>
  <div class="card">
    <div class="card--logo__header"></div>
    <div class="card__info">
      <div class="card-owner">{{ card.owner }}</div>
      <div class="card-number">
        <div class="card-number-no">{{ card.no }}</div>
        <div class="card-number-year">{{ card.year }}</div>
      </div>
      <div class="card-validation">
        <div class="valid-through">{{ card.validDate }}</div>
        <div class="cvv-num">{{ card.cvv }}</div>
      </div>
    </div>
    <div class="card-logo__footer"></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  card: {
    owner: string;
    no: string;
    year: number;
    validDate: string;
    cvv: string;
  };
}>();
</script>
<style scoped>
.card {
  width: 26rem;
  height: 15.5rem;
  background: #01d167;
  border-radius: 12px;
}
</style>
