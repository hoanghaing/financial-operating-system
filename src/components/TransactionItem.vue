<template>
  <div class="transaction-item row justify-between q-pa-md items-start">
    <div class="transaction-type row" :class="`type--${type}`">
      <img
        :src="getTransactionTypeIconUrl"
        class="transaction-type-img q-ma-auto q-mr-md"
      />
    </div>
    <div class="transaction-info column q-gutter-xs flex-1">
      <div class="text-black text-bold" style="font-size: 14px">
        <span>{{ from }}</span>
        <span class="amount q-mr-sm" :class="isPositive ? 'text-positive' : 'text-black'">
          {{ amount }}
        </span>
      </div>
      <div class="date">{{ date }}</div>
      <div class="row items-center">
        <img class="bizz-and-fin" src="src/assets/icons/business-and-finance.svg" />
        <span class="refund-text q-ml-sm">
          {{ refundText }}
        </span>
      </div>
    </div>
    <div class="items-end">
      <img src="src/assets/icons/next.svg" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const { type } = defineProps<{
  type?: string;
  from?: string;
  date?: string;
  refundText?: string;
  amount?: string;
  isPositive?: boolean;
}>();

const getTransactionTypeIconUrl = computed(() => {
  if (type === "refund") {
    return "src/assets/icons/file-storage.svg";
  }
  if (type === "advertisement") {
    return "src/assets/icons/megaphone.svg";
  }
  return "src/assets/icons/flights.svg";
});
</script>
<style lang="scss" scoped>
.transaction-item {
  border-bottom: 1px solid $white-2;
  .transaction-type-img {
    margin: auto;
  }
}
.transaction-type {
  width: 3rem;
  height: 3rem;
  border-radius: 2rem;
  margin-right: 8px;

  &.type--expense {
    background: $type-expense-color;
  }
  &.type--advertisement {
    background: $type-advertisement-color;
  }
  &.type--refund {
    background: $type-refund-color;
  }
}
.transaction-info {
  min-width: 3rem;
}
.bizz-and-fin {
  background-color: $classic-blue;
  padding: 4px 6px;
  border-radius: 10px;
}
.refund-text {
  color: $classic-blue;
  font-size: 13px;
  cursor: pointer;
  font-weight: 600;
}
.amount {
  float: right;
  font-size: 14px;
  font-weight: bold;
}
.date {
  font-size: 13px;
  color: #aaaaaa;
}
</style>
