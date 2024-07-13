import { defineStore } from 'pinia'

export const useImageStore = defineStore('imageStore', {
  state: () => ({
    changenum: 0
  }),
  actions: {
    changeImageSet: (setNumber) => {
      this.changenum = setNumber
    }
  }
})
