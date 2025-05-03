<template>
  <div class="card-detail-panel q-pa-md">
    <base-accordion
      title="Card details"
      icon-url="src/assets/icons/card-2.svg"
      :has-footer="false"
    >
      <template #content> Card Details Expand Section </template>
      <template #footer> </template>
    </base-accordion>
    <base-accordion
      title="Recent Transactions"
      icon-url="src/assets/icons/transactions.svg"
      :has-footer="true"
    >
      <template #content>
        <transaction-item v-for="(item, index) in items" :key="index" v-bind="item" />
      </template>
      <template #footer>
        <div class="view-all-transactions">View all card transactions</div>
      </template>
    </base-accordion>
  </div>
</template>
<script setup lang="ts">
import BaseAccordion from "./BaseAccordion.vue";
import TransactionItem from "./TransactionItem.vue";

const items = [
  {
    type: "refund",
    from: "Paid Starbucks",
    date: "20 May 2020",
    isRefund: false,
    refundText: "Refund on debit card",
    amount: "- S$ 5.50",
    isPositive: false,
  },
  {
    type: "expense",
    from: "Grocery Store",
    date: "20 May 2020",
    isRefund: true,
    refundText: "Charged on debit card",
    amount: "+ S$ 34.20",
    isPositive: true,
  },
  {
    type: "advertisement",
    from: "Uber Ride",
    date: "20 May 2020",
    isRefund: true,
    refundText: "Refund on debit card",
    amount: "- S$ 12.75",
    isPositive: false,
  },
  {
    type: "refund",
    from: "Online Purchase",
    date: "20 May 2020",
    isRefund: false,
    refundText: "Charged on debit card",
    amount: "+ S$ 150.00",
    isPositive: true,
  },
];
</script>
<style scoped lang="scss">
.card-detail-panel {
  max-width: 366px;
}
.seperator {
  height: 1rem;
}

.expansion-item {
  border-radius: 8px;
  &:hover {
    border-radius: 8px;
  }
  background-color: #f5f9ff;
  .q-item-type {
    border-radius: 8px;
  }
  .q-icon {
    background: #325baf;
    border-radius: 16px;
    color: red !important;
  }
}

.view-all-transactions {
  cursor: pointer;
  color: #01d167;
  text-align: center;
  padding: 16px 0px;
  font-size: 13px;
  font-weight: 600;
}
</style>
