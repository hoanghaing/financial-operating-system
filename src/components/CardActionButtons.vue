<template>
  <div class="card-action-buttons row">
    <div class="card-action-item" @click="freezeToggle">
      <div class="action-image">
        <img src="src/assets/icons/deactivate-card.svg" alt="deactivate-card" />
      </div>
      <div class="action-name">
        <span v-if="!activeCard?.isFrozen">Freeze</span><span v-else>Unfreeze</span>
        card
      </div>
    </div>
    <div class="card-action-item">
      <div class="action-image">
        <img src="src/assets/icons/freeze-card.svg" alt="freeze-card" />
      </div>
      <div class="action-name">Set spend limit</div>
    </div>
    <div class="card-action-item">
      <div class="action-image">
        <img src="src/assets/icons/set-spend-limit.svg" alt="set-spend-limit" />
      </div>
      <div class="action-name">Add to GPay</div>
    </div>
    <div class="card-action-item">
      <div class="action-image">
        <img src="src/assets/icons/GPay.svg" alt="GPay" />
      </div>
      <div class="action-name">Replace card</div>
    </div>
    <div class="card-action-item">
      <div class="action-image">
        <img src="src/assets/icons/replace-card.svg" alt="replace-card" />
      </div>
      <div class="action-name">Cancel card</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCardStore } from "../stores/useCardStore";

const cardStore = useCardStore();
const { activeCard } = storeToRefs(cardStore);
const freezeToggle = () => {
  const index = cardStore.cards.findIndex(
    // @ts-expect-error: : Function might return a non-string value
    (card) => card.cvv === activeCard.value.cvv
  );
  if (index !== -1) {
    cardStore.toggleFreeze(index);
  }
};
</script>
<style scoped lang="scss">
.card-action-buttons {
  width: 416px;
  background: $card-action-background;
  border-radius: 1rem;
  justify-content: space-between;
  padding: 20px 24px;
}
.action-name {
  color: $text-action-color;
  font-size: 13px;
  line-height: 14px;
}
.card-action-item {
  cursor: pointer;
  padding: 4px 0px;
  border-radius: 8px;
  max-width: 60px;
  text-align: center;
  &:hover {
    background-color: #c1d3f7ed;
  }
}
</style>
