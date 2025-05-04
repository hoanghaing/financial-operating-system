<template>
  <base-accordion
    :is-open="openSection === sectionName"
    :open-section-name="sectionName"
    @toggle="toggle"
    title="Card details"
    icon-url="src/assets/icons/card-2.svg"
    :has-footer="false"
  >
    <template #content> </template>
  </base-accordion>
</template>

<script setup lang="ts">
import BaseAccordion from "./BaseAccordion.vue";
import { useAccordionStore } from "../stores/useAccordionStore";
import { storeToRefs } from "pinia";

const accordion = useAccordionStore();
const { openSection } = storeToRefs(accordion);

const sectionName = "cardDetails";

function toggle() {
  accordion.toggleSection(sectionName);
}
</script>

<style scoped></style>
