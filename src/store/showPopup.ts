import { defineStore } from 'pinia'
import { fetchShowPopup } from '../api/showPop'

interface showPopup {
  show: boolean,
  img: string,
  title: string,
  text: string,
  but: string
}

export const useShowPopupStore = defineStore('showpop', {
  state: () => ({
    showPopupList: [],
    showPopObj: {} as showPopup,
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