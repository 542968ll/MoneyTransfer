import { defineStore } from 'pinia'
import { fetchCurrencies } from "../api/currency";

export const useCurrencyStore = defineStore('currency', {
  state: () => ({
    currencies: [] as any[],
    error: null as string | null
  }),
  
  actions: {
    async loadCurrencies() {
      this.error = null
      try {
        this.currencies = await fetchCurrencies()
      } catch (err) {
        this.error = 'Failed to load currencies'
      } finally { }
    },
  },
  
  getters: {

  }
})