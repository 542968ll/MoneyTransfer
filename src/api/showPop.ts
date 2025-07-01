import request from '../api/request'

export interface showPopup {
  show: boolean,
  img: string,
  title: string,
  text: string,
  but: string
}

export const fetchShowPopup = async (): Promise<showPopup[]> => {
  const response = await request.get('/showPop')
  return response.data
}