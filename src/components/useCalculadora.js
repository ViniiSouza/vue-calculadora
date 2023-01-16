import { useCalculatorStore } from '../store/calcStore';
import { add, subtract, multiply, divide } from '../services/calculator';

const validKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '%', '=', ',']
const numberKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const validCharKeys = [8, 13, 46] // backspace, enter and delete

function isValidKey (keyCode) {
  return validKeys.includes(String.fromCharCode(keyCode))
}

function isValidCharKey (charKeyCode) {
  return validCharKeys.includes(charKeyCode)
}

export default function useCalculadora (window, keyButtons) {
  const calcs = ['add', 'subtract', 'multiply', 'divide']
  const calcsKeys = ['+', '-', '*', '/']

  const calcStore = useCalculatorStore()

  const setValue = (value, setHandler = true) => {
    calcStore.changeValue(value)
    if (setHandler) {
      if (calcStore.handling == 'first') {
        console.log('first')
        calcStore.firstValue = value
      } else {
        console.log('second')
        console.log(value)
        calcStore.secondValue = value
      }
    }
  }

  const setNumber = value => {
    if (calcStore.getValue.length < 23) {
      let newValue = calcStore.getValue
      if (calcStore.getValue !== '0')
        newValue = calcStore.getValue + value
      else if (value != '0' && value != '00')
        newValue = value
      setValue(newValue)
    }
  }

  const setComma = () => {
    if (!calcStore.getValue.includes(',') && calcStore.getValue.length < 23) {
      let result = calcStore.getValue + ','
      setValue(result)
    }
  }

  const setHover = value => {
    let index = keyButtons.value.findIndex(where => where.value == value)
    if (index != -1) {
      keyButtons.value[index].hover = true
      setTimeout(() => {
        keyButtons.value[index].hover = false
      }, 200)
    }
  }

  const clearValue = () => {
    calcStore.clearValue()
    calcStore.operation = ''
    calcStore.handling = 'first'
    // tratar melhor tudo isso
    calcStore.firstValue = ''
    calcStore.secondValue = ''
  }

  const removeLastCharacter = () => {
    if (calcStore.getValue != '0') {
      if (calcStore.getValue.length > 1)
        calcStore.removeLastCharacter()
      else
        calcStore.changeValue('0')
    }
  }

  const setOperation = (operation) => {
    calcStore.changeOperation(operation)
  }

  const defOperation = (array, value) => {
    if (array.includes(value)) {
      if (calcStore.firstValue && calcStore.handling == 'first') {
        calcStore.value = ''
        calcStore.handling = 'second'
      }
      setValue('', false)
      if (value == 'add' || value == '+') {
        setOperation('+')
      }
      else if (value == 'subtract' || value == '-') {
        setOperation('-')
      }
      else if (value == 'multiply' || value == '*') {
        setOperation('x')
      }
      else if (value == 'divide' || value == '/') {
        setOperation('÷')
      }
    }
  }

  const executeButton = (event, value) => {
    defOperation(calcs, event)
    if (event == 'setComma') {
      setComma()
    }
    else if (event == 'setNumber') {
      setNumber(value)
    }
    else if (event == 'clear') {
      clearValue()
    }
    else if (event == 'clearAll') {
      // tratar clear all (ac)
      clearValue()
    }
    else if (event == 'delete') {
      removeLastCharacter()
    }
    else if (event == 'getResult') {
      console.log('entra 1');
      if (calcStore.firstValue && calcStore.secondValue) {
        let result
        switch (calcStore.operation) {
          case '+':
            console.log('entra 2')
            console.log(calcStore.firstValue, calcStore.secondValue)
            console.log(add(calcStore.firstValue, calcStore.secondValue))
            result = add(calcStore.firstValue, calcStore.secondValue)
            break
          case '-':
            result = subtract(calcStore.firstValue, calcStore.secondValue)
            break
          case 'x':
            result = multiply(calcStore.firstValue, calcStore.secondValue)
            break
          case '÷':
            result = divide(calcStore.firstValue, calcStore.secondValue)
            break
          default:
            break
        }
        
        setValue(result)
        // melhorar tratamento
        calcStore.firstValue = result
        calcStore.secondValue = ''
        calcStore.operation = ''
        calcStore.handling = 'first'
      }
    }
  }

  const setKeyboardEvents = () => {
    window.addEventListener("keypress", function (e) {
      const keyTranslated = String.fromCharCode(e.keyCode)
      if (isValidKey(e.keyCode)) {
        if (keyTranslated == ',') {
          setComma()
        }
        else if (numberKeys.includes(keyTranslated)) {
          setNumber(keyTranslated)
        }
        defOperation(calcsKeys, keyTranslated)
        setHover(keyTranslated)
      }
    });

    window.addEventListener("keydown", function (e) {
      if (isValidCharKey(e.keyCode)) {
        let result
        switch (e.keyCode) {
          case 8:
            result = 'delete'
            setHover('backspace')
            break
          case 13:
            result = 'getResult'
            setHover('=')
            break
          case 46:
            result = 'clear'
            setHover('c')
            break;
          default:
            return
        }
        executeButton(result, null)
      }
    });
  }

  return {
    setKeyboardEvents,
    executeButton
  }
}