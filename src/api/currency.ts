import axios from 'axios'

export interface Currency {
  id: string
  name: string
  image?: string
}

export interface ConversionResult {
  from: string
  to: string
  amount: number
  result: string
}

export const fetchCurrencies = async (): Promise<Currency[]> => {
  const response = await axios.get('/api/currencies')
  return response.data.data
}

export const convertCurrency = async (
  from: string, 
  to: string, 
  amount: number
): Promise<ConversionResult> => {
  const response = await axios.post('/api/convert', { from, to, amount })
  return response.data.data
}