import { useCalculatorStore } from '../store/calcStore';

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
  const calcStore = useCalculatorStore()

  const setValue = value => {
    let newValue = calcStore.getValue
    if (calcStore.getValue !== '0')
      newValue = calcStore.getValue + value
    else if (value != '0' && value != '00')
      newValue = value
    calcStore.changeValue(newValue)
  }

  const setComma = () => {
    if (!calcStore.getValue.includes(',')) {
      let result = calcStore.getValue + ','
      calcStore.changeValue(result)
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
  }

  const removeLastCharacter = () => {
    if (calcStore.getValue != '0') {
      if (calcStore.getValue.length > 1)
        calcStore.removeLastCharacter()
      else
        calcStore.changeValue('0')
    }
  }

  const executeButton = (event, value) => {
    if (event == 'setComma') {
      setComma()
    }
    else if (event == 'setNumber') {
      setValue(value)
    }
    else if (event == 'clear') {
      clearValue()
    }
    else if (event == 'delete') {
      removeLastCharacter()
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
          setValue(keyTranslated)
        }

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
            result = 'result'
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