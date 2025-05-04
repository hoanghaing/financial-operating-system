<template>
  <div class="card">
    <div class="card--logo__header full-width q-ml-auto">
      <img
        class="float-right"
        src="src/assets/logos/logo-white.svg"
        alt="credit-card-logo"
      />
    </div>
    <div class="card__info">
      <div class="card-owner">{{ card.owner }}</div>
      <div class="card-number row">
        <div class="card-number-no">
          <span v-if="isHideInfomation" class="dotdotdot">●●●● ●●●● ●●●●</span>
          <span v-else>
            {{ card.no }}
          </span>
        </div>
        <div class="card-number-year q-ml-xl">{{ card.year }}</div>
      </div>
      <div class="card-validation row">
        <div class="valid-through">Thru: {{ card.validDate }}</div>
        <div class="cvv-num row">
          CVV: <span v-if="isHideInfomation" class="asterisk q-ml-xs">***</span
          ><span v-else>{{ card.cvv }}</span>
        </div>
      </div>
    </div>
    <div class="card-logo__footer q-ml-auto q-mt-auto">
      <img src="src/assets/logos/logo-visa.svg" alt="credit-card-visa-logo" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
defineProps<{
  card: {
    owner: string;
    no: string;
    year: number;
    validDate: string;
    cvv: string;
  };
  isHideInfomation?: boolean;
}>();
</script>
<style lang="scss" scoped>
.card {
  width: 26rem;
  height: 15.5rem;
  background: $credit-card-green;
  border-radius: 12px;
  position: absolute;
  top: 0px;
  padding: 27px;
  cursor: default;
}
.card__info {
  margin-top: 27px;
}
.card-owner {
  font-size: 1.5rem;
  color: $white;
  font-weight: bold;
  text-align: left;
}
.card-number {
  align-items: center;
  margin-top: 27px;
}
.card-number-no {
  font-size: 1.5rem;
  color: $white;
  font-weight: bold;
  word-spacing: 1rem;
  letter-spacing: normal;
}
.card-number-year {
  font-size: 0.875rem;
  color: $white;
  font-weight: 600;
  letter-spacing: 4px;
}
.card-validation {
  margin-top: 12px;
  font-size: 13px;
  color: $white;
  font-weight: 600;
  line-height: 18px;
  gap: 36px;
}
.card-logo__footer {
  position: absolute;
  bottom: 27px;
  left: 27px;
  right: 27px;
  width: 100%;
}
.card-logo__footer img {
  float: right;
}
.cvv-num {
  align-items: center;
}
.dotdotdot {
}
.asterisk {
  font-size: 1.5rem;
  line-height: 13px;
}
</style>
