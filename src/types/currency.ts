export interface ExchangeRate {
  code?: number,
  data: any,
  message?: string
}
  

export interface CurrencySymbol {
  value: string;
  name: string;
  symbol: string;
}

export interface mockRatesObject {
  [key: string]: number
}

export interface mockTransferRemainder {
  title: string,
  content: string,
  money: number
}