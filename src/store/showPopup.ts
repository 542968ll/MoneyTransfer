import { defineStore } from 'pinia'
import { fetchShowPopup } from '../api/showPop'


export const useShowPopupStore = defineStore('showpop', {
  state: () => ({
    showPopupList: [],
    error: ''
  }),
  
  actions: {
    async showPopupList() {
      try {
        return await fetchShowPopup()
      } catch (error) {
        this.error = 'show failed'
      }
    }
  },
  
  getters: {
  }
})