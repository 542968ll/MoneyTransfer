
export function convertFun(from: string, to: string, amount: number, mockRates: any) {
  const fromRate = mockRates[from]
  const toRate = mockRates[to]

  return {
    result: (amount * toRate / fromRate).toFixed(2)
  }
}
