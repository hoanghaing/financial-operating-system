import { defineStore } from "pinia";

export const useBalanceStore = defineStore("balance", {
  state: () => ({
    balance: 3000,
  }),
  actions: {
    setBalance(newBalance: number) {
      this.balance = newBalance;
    },
  },
});
