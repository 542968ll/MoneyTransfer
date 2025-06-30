import { defineStore } from 'pinia'
import { fetchCurrencies, convertCurrency } from "../api/currency";
export interface Currency {
    id: string
    name: string
    image?: string
  }

export const useCurrencyStore = defineStore('currency', {
  state: () => ({
    currencies: [] as Currency[],
    loading: false,
    error: null as string | null
  }),
  
  actions: {
    async loadCurrencies() {
      this.loading = true
      this.error = null
      try {
        this.currencies = await fetchCurrencies()
      } catch (err) {
        this.error = 'Failed to load currencies'
      } finally {
        this.loading = false
      }
    },
    
    async convert(from: string, to: string, amount: number) {
      try {
        return await convertCurrency(from, to, amount)
      } catch (err) {
        this.error = 'Conversion failed'
        throw err
      } finally { }
    }
  },
  
  getters: {
    currencyCodes: (state) => state.currencies.map(c => c.code),
    getCurrencyByCode: (state) => (code: string) => 
      state.currencies.find(c => c.code === code)
  }
})