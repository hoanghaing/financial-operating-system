<template>
  <div class="header-section full-width">
    <div class="balance-info">
      <span class="label">Available balance</span>
      <div class="amount">
        <span class="currency">S$</span>
        <span class="value">{{ balance.toLocaleString() }}</span>
      </div>
    </div>
    <button class="new-card-btn" @click="onNewCardClick">
      <img src="src/assets/icons/box.svg" alt="icon" class="new-card-btn__icon q-mr-sm" />
      <span class="new-card-btn__title"> New card </span>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";

defineProps<{
  balance: number;
}>();

const emit = defineEmits<{
  (e: "new-card-click"): void;
}>();

const onNewCardClick = () => {
  emit("new-card-click");
};
</script>

<style scoped>
.header-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.balance-info .label {
  font-size: 0.875rem;
  color: #222222;
}

.amount {
  display: flex;
  align-items: center;
  font-weight: bold;
}

.currency {
  background-color: #01d167;
  color: #ffffff;
  border-radius: 4px;
  margin-right: 0.25rem;
  font-size: 13px;
  padding: 4px 8px;
}
.value {
  font-size: 26px;
}
.new-card-btn {
  display: flex;
  justify-content: center;
  background-color: #325baf;
  color: white;
  font-size: 13px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  padding: 10px 12px;
  cursor: pointer;
}
</style>
