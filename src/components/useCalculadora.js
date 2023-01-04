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
    let newValue
    if (calcStore.getValue == '0')
        newValue = value
      else 
        newValue = calcStore.getValue + value
    calcStore.changeValue(newValue)
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

  const setKeyboardEvents = () => {
    window.addEventListener("keypress", function (e) {
      if (isValidKey(e.keyCode)) {
        if (numberKeys.includes(String.fromCharCode(e.keyCode))) {
          setValue(String.fromCharCode(e.keyCode))
        }
        setHover(String.fromCharCode(e.keyCode))
      }
    });

    window.addEventListener("keydown", function (e) {
      if (isValidCharKey(e.keyCode)) {
        switch (e.keyCode) {
          case 8:
            setHover('backspace')
            break
          case 13:
            setHover('=')
            break
          case 46:
            setHover('c')
          default:
            return
        }
      }
    });
  }

  return {
    setKeyboardEvents
  }
}