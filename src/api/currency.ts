import request from '../api/request'
import type { CurrencySymbol, ExchangeRate, mockTransferRemainder } from '../types/currency'

// 获取货币列表
export const fetchCurrencies = async (): Promise<CurrencySymbol[]> => {
  const response = await request.get('/api/currencies')
  return response.data
}

// 获取汇率
export const getExchangeRate = async (from: string, to: string): Promise<ExchangeRate> => {
  const response = await request.get('/api/exchangeRate', { params: { from, to } })
  return response
}

// 转出接口
export const transfer = async (money: number): Promise<any> => {
  const response = await request.post('/api/transfer', {money})
  return response
}

