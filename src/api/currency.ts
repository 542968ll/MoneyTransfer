import request from '../api/request'

export interface Currency {
  id: string
  name: string
  image?: string
}

export interface ConversionResult {
  result: Object
}

export const fetchCurrencies = async (): Promise<Currency[]> => {
  const response = await request.get('/currencies')
  return response.data.data
}

export const convertCurrency = async (): Promise<ConversionResult> => {
  const response = await request.get('/convert')
  console.log(response.data.data[0]);
  return response.data.data[0]
}