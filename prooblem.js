var divide = function(dividend, divisor) {
  let quotient = 0
  let negative = false

  if (Math.sign(dividend) === -1 && Math.sign(divisor) === -1) {
    negative = false
  } else if (Math.sign(dividend) === -1 || Math.sign(divisor) === -1) {
    negative = true
  }

  dividend = Math.abs(dividend)
  divisor = Math.abs(divisor)
  if (dividend === 0) {
    return 0
  }

  while (divisor <= dividend) {
    dividend -= divisor
    quotient++
  }

  if (quotient > ((2 ** 31) - 1)) {
    return negative ? -(2 ** 31) : 2 ** 31 - 1
  }
  return negative ? -quotient : quotient
}

console.log(divide(10, -3))