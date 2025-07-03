import type { mockRatesObject } from "../types/currency";

export function convertFun(from: string, to: string, amount: number, mockRates: mockRatesObject) {
  const fromRate = mockRates[from]
  const toRate = mockRates[to]
  
  return {
    result: parseFloat((amount * toRate / fromRate).toFixed(2))
  }
}
