<template>
  <base-accordion
    :is-open="openSection === sectionName"
    :open-section-name="sectionName"
    @toggle="toggle"
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
</template>

<script setup lang="ts">
import type { TransactionItemType } from "../models/transaction";
import { useAccordionStore } from "../stores/useAccordionStore";
import { storeToRefs } from "pinia";
import BaseAccordion from "./BaseAccordion.vue";
import TransactionItem from "./TransactionItem.vue";
const accordion = useAccordionStore();
const { openSection } = storeToRefs(accordion);
defineProps<{
  items: TransactionItemType[];
}>();

const sectionName = "recentTransactions";
function toggle() {
  accordion.toggleSection(sectionName);
}
</script>

<style scoped lang="scss">
.view-all-transactions {
  cursor: pointer;
  color: #01d167;
  text-align: center;
  padding: 16px 0px;
  font-size: 13px;
  font-weight: 600;
}
</style>
