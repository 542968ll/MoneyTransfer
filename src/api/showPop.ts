import request from '../api/request'
import type { showPopup } from '../types/showPopup'

export const fetchShowPopup = async (): Promise<showPopup[]> => {
  const response = await request.get('/api/showPop')
  // console.log("response", response.data.showPop);
  
  return response.data.showPop
}