import { defineStore } from 'pinia'

export const useCalculatorStore = defineStore('calculator', {
  state: () => ({
    value: 0
  }),
  actions: {
    changeValue(newValue) {
      this.value = newValue
    },
  },
})