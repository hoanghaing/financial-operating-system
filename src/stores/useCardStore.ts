import { defineStore } from "pinia";
import type { Card } from "../models/credit-card";
export const useCardStore = defineStore("card", {
  state: () => ({
    cards: [
      {
        owner: "Mark Henry",
        no: "1234 5678 9999",
        year: 2020,
        validDate: "12/26",
        cvv: "933",
        isFrozen: false,
      },
      {
        owner: "Lady Gaga",
        no: "1234 5678 9999",
        year: 2020,
        validDate: "12/26",
        cvv: "333",
        isFrozen: true,
      },
      {
        owner: "Mark Twain",
        no: "1234 9900 0000",
        year: 2022,
        validDate: "12/26",
        cvv: "873",
        isFrozen: false,
      },
    ],
    activeCard: null as Card | null,
  }),
  actions: {
    addCard(name: string) {
      const newCard = {
        owner: name,
        no: `${Math.floor(Math.random() * 9000) + 1000} ${Math.floor(Math.random() * 9000) + 1000} ${Math.floor(Math.random() * 9000) + 1000}`, // Generates a random number
        validDate: `${Math.floor(Math.random() * 12) + 1}/26`,
        cvv: `${Math.floor(Math.random() * 900) + 100}`,
        year: 2025,
        isFrozen: false,
      };
      this.cards.push(newCard);
    },
    toggleFreeze(index: number) {
      if (this.cards[index]) {
        this.cards[index].isFrozen = !this.cards[index].isFrozen;
      }
    },
    setActiveCard(index: number) {
      this.activeCard = this.cards[index] || null;
    },
  },
});
