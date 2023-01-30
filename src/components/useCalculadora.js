import { useCalculatorStore } from '../store/calcStore';
import { add, subtract, multiply, divide, power } from '../services/calculator';

const validKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '%', '=', ',', '.']
const numberKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const validCharKeys = [8, 13, 46] // backspace, enter and delete

function isValidKey (keyCode) {
  return validKeys.includes(String.fromCharCode(keyCode))
}

function isValidCharKey (charKeyCode) {
  return validCharKeys.includes(charKeyCode)
}

export default function useCalculadora (window, keyButtons) {
  const calcs = ['add', 'subtract', 'multiply', 'divide', 'power']
  const calcsKeys = ['+', '-', '*', '/']

  const calcStore = useCalculatorStore()

  const setValue = (value, setHandler = true) => {
    calcStore.changeValue(value)
    if (setHandler) {
      if (calcStore.handling == 'first') {
        calcStore.changeFirstValue(value)
      } else {
        calcStore.changeSecondValue(value)
      }
    }
  }

  const setNumber = value => {
    if (calcStore.value.length < 23) {
      let newValue = calcStore.value
      if (calcStore.value !== '0')
        newValue = calcStore.value + value
      else if (value != '0' && value != '00')
        newValue = value
      setValue(newValue)
    }
  }

  const setComma = () => {
    if (!calcStore.value) {
      setValue('0,')
    }
    if (!calcStore.value.includes(',') && calcStore.value.length < 23) {
      let result = calcStore.value + ','
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
    calcStore.clearOperation()
    calcStore.changeHandling('first')
    // tratar melhor tudo isso
    calcStore.changeFirstValue('')
    calcStore.changeSecondValue('')
    calcStore.changeLastCalc('')
  }

  const setValorInvalido = (mensagemErro) => {
    calcStore.invalidOperation = calcStore.blockActions = true
    setValue(mensagemErro)
    // bloquear ações
    setTimeout(() => {
      setValue(0)
      calcStore.invalidOperation = calcStore.blockActions = false
      clearValue()
    }, 1500)
  }

  const removeLastCharacter = () => {
    if (calcStore.value != '0') {
      if (calcStore.value.length > 1)
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
      calcStore.setClearOnNext(true)
      calcStore.changeLastCalc(calcStore.firstValue)
      if (calcStore.firstValue && calcStore.handling == 'first') {
        calcStore.changeHandling('second')
      }
      if (value == 'add' || value == '+') {
        setOperation('+')
        calcStore.lastCalc += ' +'
      }
      else if (value == 'subtract' || value == '-') {
        setOperation('-')
        calcStore.lastCalc += ' -'
      }
      else if (value == 'multiply' || value == '*') {
        setOperation('x')
        calcStore.lastCalc += ' x'
      }
      else if (value == 'divide' || value == '/') {
        setOperation('÷')
        calcStore.lastCalc += ' ÷'
      }
      else if (value == 'power') {
        setOperation('xʸ')
        calcStore.lastCalc += ' xʸ'
      }
    }
  }

  const executeOperation = () => {
    let result
    switch (calcStore.operation) {
      case '+':
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
      case 'xʸ':
        result = power(calcStore.firstValue, calcStore.secondValue)
        break
      default:
        break
    }
    return result
  }

  const validateResult = result => {
    if (result.toString() == 'Infinity' && calcStore.operation == '÷') {
      setValorInvalido('Um número não pode ser dividido por zero')
    }
    else if (result.toString() == 'zero' && calcStore.operation == 'xʸ') {
      setValorInvalido('Zero não pode ser elevado a nenhum número')
    }
    else if (result.toString() == 'Infinity') {
      setValorInvalido('O resultado é incalculável')
    }
    else if (result.toString() == 'NaN') {
      setValorInvalido('O resultado é inválido')
    }
    else {
      console.log(result.toString())
      setValue(result)
    }
  }

  const executeButton = (event, value, array = calcs) => {
    if (!calcStore.blockActions) {
      if (calcStore.clearOnNext) {
        setValue('', false)
        calcStore.setClearOnNext(false)
      }
      if (calcStore.handling == 'second' && (calcs.includes(event) || calcsKeys.includes(event))) {
        const result = executeOperation()
        calcStore.changeLastCalc(result)
        validateResult(result)
        calcStore.changeFirstValue(result)
        defOperation([...calcs, ...calcsKeys], event)
      } else {
        defOperation(array, event)
      }
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
        if (calcStore.firstValue && calcStore.secondValue) {
          const result = executeOperation()
          
          calcStore.lastCalc += ` ${calcStore.secondValue} =`

          validateResult(result)
          
          // melhorar tratamento
          calcStore.changeFirstValue(result)
          calcStore.changeSecondValue('')
          calcStore.clearOperation()
          calcStore.changeHandling('first')
        }
      }
    }
  }

  const setKeyboardEvents = () => {
    window.addEventListener("keypress", function (e) {
      const keyTranslated = String.fromCharCode(e.keyCode)
      if (isValidKey(e.keyCode) && !calcStore.blockActions) {
        if (keyTranslated == ',' || keyTranslated == '.') {
          executeButton('setComma', keyTranslated)
        }
        else if (numberKeys.includes(keyTranslated)) {
          executeButton('setNumber', keyTranslated)
        }
        executeButton(keyTranslated, null, calcsKeys)
        setHover(keyTranslated)
      }
    });

    window.addEventListener("keydown", function (e) {
      if (isValidCharKey(e.keyCode) && !calcStore.blockActions) {
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