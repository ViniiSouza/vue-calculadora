import { defineStore } from 'pinia'

export const useCalculatorStore = defineStore('calculator', {
  state: () => ({
    value: '0',
    firstValue: '0',
    secondValue: '',
    operation: '',
    handling: 'first',
    lastCalc: '',
    invalidOperation: false,
    blockActions: false,
    clearOnNext: false
  }),
  actions: {
    changeValue(newValue) {
      this.value = newValue
    },
    clearValue() {
      this.value = '0'
    },
    changeFirstValue(newValue) {
      this.firstValue = newValue
    },
    changeSecondValue(newValue) {
      this.secondValue = newValue
    },
    changeOperation(newOperation) {
      this.operation = newOperation
    },
    clearOperation() {
      this.operation = ''
    },
    changeHandling(newValue) {
      this.handling = newValue
    },
    changeLastCalc(newValue) {
      this.lastCalc = newValue
    },
    setClearOnNext(newValue) {
      this.clearOnNext = newValue
    },
    removeLastCharacter() {
      this.changeValue(this.value.substring(0, this.value.length - 1))
      if (this.handling == 'first') {
        this.changeFirstValue(this.value)
      } else {
        this.changeSecondValue(this.value)
      }
    }
  },
})