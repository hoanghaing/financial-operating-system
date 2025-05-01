<template>
  <q-page class="column items-center q-pt-xl q-pl-xl q-pr-xl q-gutter-md">
    <header-section :balance="3000" />
    <tabs-section
      class="fit"
      :tabs="[
        { label: 'My debit cards', slotName: 'mycards' },
        { label: 'All company cards', slotName: 'allcards' },
      ]"
    >
      <template #mycards>
        <div>
          <my-debit-cards />
          <!-- 🟢 Content for My Debit Cards -->
        </div>
      </template>

      <template #allcards>
        <div>🏢 Content for All Company Cards</div>
      </template>
    </tabs-section>
  </q-page>
</template>

<script setup lang="ts">
// import { ref } from 'vue';
// import type { Todo, Meta } from 'components/models';
import HeaderSection from "src/components/HeaderSection.vue";
import TabsSection from "src/components/TabsSection.vue";
import MyDebitCards from "src/components/MyDebitCards.vue";
</script>
