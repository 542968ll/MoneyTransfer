import instance from './index'

export interface showPopup {
  show: boolean,
  img: string,
  title: string,
  text: string,
  but: string
}

export const fetchShowPopup = async (): Promise<showPopup[]> => {
  const response = await instance.get('/showPop')
  console.log(response.data);
  return response.data
}