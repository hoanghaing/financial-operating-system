<template>
  <div class="card-info-panel">
    <credit-card-display />
    <card-action-buttons />
  </div>
</template>
<script setup lang="ts">
import CreditCardDisplay from "./CreditCardDisplay.vue";
import CardActionButtons from "./CardActionButtons.vue";
</script>
<style scoped lang="scss">
.card-info-panel {
  max-width: 416px;
}
</style>
