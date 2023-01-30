function parseToNumber(value) {
  return parseFloat(value.replace(/,/g, '.'))
}

function parseToRead(value) {
  return value.toString().replace('.', ',')
}

export function add(x, y) {
  return parseToRead(parseToNumber(x) + parseToNumber(y))
}

export function subtract(x, y) {
  return parseToRead(parseToNumber(x) - parseToNumber(y))
}

export function multiply(x, y) {
  return parseToRead(parseToNumber(x) * parseToNumber(y))
}

export function divide(x, y) {
  return parseToRead(parseToNumber(x) / parseToNumber(y))
}

export function power(x, y) {
  let result = parseToNumber(x)
  if (result == 0) {
    return 'zero'
  }
  for(let i = 1; i < parseToNumber(y); i++) {
    result *= x
  }
  return parseToRead(result)
}

export function squareRoot(x, y) {
  const raiz = parseToNumber(y)
  if (raiz == 2) {
    return Math.sqrt(parseToNumber(x))
  }
  if (raiz == 3) {
    return Math.cbrt(parseToNumber(x))
  }
  return Math.pow(25, 1 / raiz)
}

export function percentage(x, y) {
  // ?
}
