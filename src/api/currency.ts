import instance from './index'

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
  const response = await instance.get('/currencies')
  console.log(response.data.data)
  return response.data.data
}

export const convertCurrency = async (
  from: string, 
  to: string, 
  amount: number
): Promise<ConversionResult> => {
  const response = await instance.post('/convert', { from, to, amount })
  console.log("1313131", response)
  return response.data.data
}