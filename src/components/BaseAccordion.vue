<template>
  <div class="accordion border rounded q-mb-md">
    <div
      class="accordion-header row items-center justify-between q-px-md q-py-sm cursor-pointer"
      @click="toggle"
    >
      <div class="row items-center gap-sm">
        <img class="accordion-image-icon" :src="iconUrl" />
        <span class="text-subtitle1 q-ml-sm">{{ title }}</span>
      </div>
      <img
        class="accordion-image-icon"
        :class="{ 'accordion-is-open': isOpen }"
        src="src/assets/icons/down-arrow.svg"
      />
    </div>
    <div v-if="isOpen" class="accordion-content">
      <slot name="content" />
      <div v-if="hasFooter" class="accordion-footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";

const props = defineProps<{
  title: string;
  iconUrl: string;
  hasFooter: boolean;
  isOpen: boolean;
  openSectionName: string;
}>();

const emits = defineEmits(["toggle"]);

const toggle = () => {
  emits("toggle", props.openSectionName);
};
</script>

<style scoped lang="scss">
.accordion {
  transition: all 0.3s ease;
  border: 1px solid $white-3;
  border-radius: 8px;
  min-width: 366px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1); /* adjust as needed */
  stroke-linecap: butt;
  stroke-linejoin: miter;
  opacity: 1;
}
.accordion-header {
  background: $accordion-header;
  border-radius: 8px;
  min-height: 72px;
}
.accordion-image-icon {
  width: 1.5rem;
  height: 1.5rem;
}
.text-subtitle1 {
  color: #0c365a;
  font-size: 14px;
  line-height: 18px;
}
.accordion-content {
  min-height: 4rem;
}

.accordion-image-icon {
  transition: transform 0.3s ease;
}
.accordion-is-open {
  transform: rotate(180deg);
}
.accordion-footer {
  background: #edfff5;
  border: 1px solid #ddffec;
}
</style>
