<template>
  <div class="tabs-section full-width">
    <div class="tab-headers q-mb-md">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ active: index === activeIndex }"
        @click="activeIndex = index"
      >
        {{ tab.label }}
      </button>
    </div>
    <div class="tab-content window-height">
      <slot :name="tabs[activeIndex]?.slotName" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { onMounted } from "vue";

interface Tab {
  label: string;
  slotName: string;
}
defineProps<{
  tabs: Tab[];
}>();

const activeIndex = ref(0);
onMounted(() => {});
</script>

<style scoped lang="scss">
.tabs-section {
  flex: 1;
}

.tab-headers {
  display: flex;
  gap: 1rem;
  button {
    background: none;
    border: none;
    padding: 0.25rem 0;
    cursor: pointer;
    color: #2222224d;
    font-size: 14px;
    border-bottom: 2px solid transparent;
    &:hover {
      color: #23cefd;
    }
  }
}

.tab-headers button.active {
  color: $text-black;
  border-bottom-color: #23cefd;
  font-weight: 600;
}

.tab-content {
  padding: 2rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0);
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1);
  stroke-linecap: butt;
  stroke-linejoin: miter;
  opacity: 1;
}
</style>
