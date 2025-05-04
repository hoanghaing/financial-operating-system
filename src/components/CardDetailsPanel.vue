<template>
  <div class="card-detail-panel q-pa-md q-hidden-lg">
    <card-details-section />
    <recent-transactions-section :items="items" />
  </div>
</template>
<script setup lang="ts">
import CardDetailsSection from "./CardDetailsSection.vue";
import RecentTransactionsSection from "./RecentTransactionsSection.vue";

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
  background-color: $accordion-header;
  .q-item-type {
    border-radius: 8px;
  }
  .q-icon {
    background: $classic-blue;
    border-radius: 16px;
    color: red !important;
  }
}
</style>
