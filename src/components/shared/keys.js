export default [
  { icons: ['fa-c'], width: 1, keyDetect: 'del', event: 'clear' },
  { icons: ['fa-a', 'fa-c'], width: 1, keyDetect: 'none', event: 'clearAll' },
  { icons: ['fa-arrow-left-long'], width: 1, keyDetect: 'backspace', event: 'delete' },
  { icons: ['fa-clock-rotate-left'], width: 1, keyDetect: 'none', event: 'history' },
  { icons: ['fa-divide'], width: 1, keyDetect: '/', event: 'divide' },
  { icons: ['fa-7'], width: 1, keyDetect: '7', event: 'setNumber' },
  { icons: ['fa-8'], width: 1, keyDetect: '8', event: 'setNumber' },
  { icons: ['fa-9'], width: 1, keyDetect: '9', event: 'setNumber' },
  { icons: ['fa-square-root-variable'], width: 1, keyDetect: 'none', event: 'squareRoot' },
  { icons: ['fa-xmark'], width: 1, keyDetect: '*', event: 'multiply' },
  { icons: ['fa-4'], width: 1, keyDetect: '4', event: 'setNumber' },
  { icons: ['fa-5'], width: 1, keyDetect: '5', event: 'setNumber' },
  { icons: ['fa-6'], width: 1, keyDetect: '6', event: 'setNumber' },
  { icons: ['fa-xmark'], extraText: '²', width: 1, keyDetect: 'none', event: 'power' },
  { icons: ['fa-minus'], width: 1, keyDetect: '-', event: 'subtract' },
  { icons: ['fa-1'], width: 1, keyDetect: '1', event: 'setNumber' },
  { icons: ['fa-2'], width: 1, keyDetect: '2', event: 'setNumber' },
  { icons: ['fa-3'], width: 1, keyDetect: '3', event: 'setNumber' },
  { icons: ['fa-percent'], width: 1, keyDetect: '%', event: 'percentage' },
  { icons: ['fa-plus'], width: 1, keyDetect: '+', event: 'add' },
  { icons: ['fa-0'], width: 1, keyDetect: '0', event: 'setNumber' },
  { icons: ['fa-0', 'fa-0'], width: 1, keyDetect: 'none', event: 'setNumber' },
  { extraText: ',', width: 1, keyDetect: ',', event: 'setComma' },
  { icons: ['fa-equals'], width: 2, keyDetect: '=', event: 'getResult' },
]