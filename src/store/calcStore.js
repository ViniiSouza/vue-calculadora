import { defineStore } from 'pinia'

export const useCalculatorStore = defineStore('calculator', {
  state: () => ({
    value: '0',
    firstValue: '0',
    secondValue: '0',
    operation: '',
    handling: 'first',
    lastResult: ''
  }),
  getters: {
    getValue: state => state.value
  },
  actions: {
    changeValue(newValue) {
      this.value = newValue
    },
    clearValue() {
      this.value = '0'
    },
    changeOperation(newOperation) {
      this.operation = newOperation
    },
    clearOperation() {
      this.operation = '0'
    },
    removeLastCharacter() {
      this.value = this.value.substring(0, this.value.length - 1)
    }
  },
})