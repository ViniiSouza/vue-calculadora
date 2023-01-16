export function add(x, y) {
  return parseFloat(x) + parseFloat(y)
}

export function subtract(x, y) {
  return parseFloat(x) - parseFloat(y)
}

export function multiply(x, y) {
  return parseFloat(x) * parseFloat(y)
}

export function divide(x, y) {
  return parseFloat(x) / parseFloat(y)
}

export function power(x, y) {
  const result = x
  for(let i = 0; i < y; i++) {
    result *= x
  }
  return result
}

export function squareRoot(x, y) {
  // ?
}

export function percentage(x, y) {
  // ?
}
