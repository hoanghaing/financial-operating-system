<template>
  <div class="tabs-section full-width">
    <div class="tab-headers">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ active: index === activeIndex }"
        @click="activeIndex = index"
      >
        {{ tab.label }}
      </button>
    </div>
    <div class="tab-content col overflow-auto shadow-up-4 q-mt-md">
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

<style scoped>
.tabs-section {
  border-bottom: 2px solid #ddd;
}

.tab-headers {
  display: flex;
  gap: 1rem;
}

.tab-headers button {
  background: none;
  border: none;
  padding: 0.25rem 0;
  cursor: pointer;
  color: #2222224d;
  font-size: 14px;
  border-bottom: 2px solid transparent;
}

.tab-headers button.active {
  color: #222222;
  border-bottom-color: #23cefd;
  font-weight: 600;
}

.tab-content {
}
</style>
