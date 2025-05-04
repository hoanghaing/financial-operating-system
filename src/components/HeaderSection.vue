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
    <add-new-card-modal v-model="isModalOpen" @onCloseModal="isModalOpen = false" />
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useBalanceStore } from "../stores/useBalanceStore";
import AddNewCardModal from "./AddNewCardModal.vue";

const balanceStore = useBalanceStore();
const { balance } = storeToRefs(balanceStore);
const isModalOpen = ref(false);

const onNewCardClick = () => {
  isModalOpen.value = true;
};
</script>

<style scoped lang="scss">
.header-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.balance-info .label {
  font-size: 0.875rem;
  color: $text-black;
}

.amount {
  display: flex;
  align-items: center;
  font-weight: bold;
}

.currency {
  background-color: $text-green;
  color: $white;
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
  background-color: $classic-blue;
  color: white;
  font-size: 13px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  padding: 10px 12px;
  cursor: pointer;
  &:hover {
    background-color: #608be0;
  }
}
</style>
