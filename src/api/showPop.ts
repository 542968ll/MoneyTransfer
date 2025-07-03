import request from '../api/request'
import type { showPop } from '../types/showPopup'

export const fetchShowPopup = async (): Promise<showPop[]> => {
  const response = await request.get('/api/showPop')
  return response.data.showPop
}