// src/stores/useAccordionStore.ts
import { defineStore } from 'pinia';

export const useAccordionStore = defineStore('accordion', {
  state: () => ({
    openSection: '' as 'cardDetails' | 'recentTransactions' | ''
  }),
  actions: {
    toggleSection(section: 'cardDetails' | 'recentTransactions') {
      this.openSection = this.openSection === section ? '' : section;
    },
    isOpen(section: 'cardDetails' | 'recentTransactions') {
      return this.openSection === section;
    }
  }
});
