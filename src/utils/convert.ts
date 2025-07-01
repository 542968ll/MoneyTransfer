
export function convertFun(from, to, amount, mockRates) {
  const fromRate = mockRates[from]
  const toRate = mockRates[to]

  return {
    result: (amount * toRate / fromRate).toFixed(2)
  }
}
