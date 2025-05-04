<template>
  <q-dialog v-model="isOpen">
    <q-card>
      <q-card-section>
        <div class="text-h6">Add New Card</div>
      </q-card-section>

      <q-card-section>
        <q-input
          v-model="cardName"
          label="Card Name"
          outlined
          :rules="[(val) => (val && val.trim().length > 0) || 'Card name is required']"
        />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Cancel" @click="closeModal" />
        <q-btn color="green" label="Add Card" @click="submitCard" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";
import { useCardStore } from "../stores/useCardStore";
const emits = defineEmits(["onCloseModal"]);

const isOpen = ref(false);
const cardName = ref("");
const cardStore = useCardStore();

const closeModal = () => {
  emits("onCloseModal");
};

const submitCard = () => {
  if (!cardName.value.trim()) return;
  cardStore.addCard(cardName.value);
  cardName.value = "";
  closeModal();
};
</script>
