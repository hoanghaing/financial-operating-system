<template>
  <div class="transaction-item row justify-between q-pa-md items-start">
    <div class="transaction-type row" :class="`type--${type}`">
      <img
        :src="getTransactionTypeIconUrl"
        class="transaction-type-img q-ma-auto q-mr-md"
      />
    </div>
    <div class="transaction-info column q-gutter-xs" style="flex: 1">
      <div class="text-black text-bold" style="font-size: 14px">
        <span>{{ from }}</span>
        <span class="amount q-mr-sm" :class="isPositive ? 'text-positive' : 'text-black'">
          {{ amount }}
        </span>
      </div>
      <div style="font-size: 13px; color: #aaaaaa">{{ date }}</div>
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
  border-bottom: 1px solid #f5f5f5;
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
    background: #00d6b51a;
  }
  &.type--advertisement {
    background: #f251951a;
  }
  &.type--refund {
    background: #009dff1a;
  }
}
.transaction-info {
  min-width: 3rem;
}
.bizz-and-fin {
  background-color: #325baf;
  padding: 4px 6px;
  border-radius: 10px;
}
.refund-text {
  color: #325baf;
  font-size: 13px;
  cursor: pointer;
  font-weight: 600;
}
.amount {
  float: right;
  font-size: 14px;
  font-weight: bold;
}
</style>
