<template>
  <div class="my-debit-cards-section row justify-start items-stretch q-gutter-md">
    <div class="col">
      <card-info-panel />
    </div>
    <div class="col">
      <card-details-panel />
    </div>
  </div>
</template>

<script lang="ts" setup>
import CardInfoPanel from "./CardInfoPanel.vue";
import CardDetailsPanel from "./CardDetailsPanel.vue";
</script>

<style lang="scss" scoped></style>
