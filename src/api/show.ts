import axios from 'axios'

export interface showPopup {
  show: boolean,
  img: string,
  title: string,
  text: string,
  but: string
}

export const fetchShowPopup = async (): Promise<showPopup[]> => {
  const response = await axios.get('/show/showPop')
  console.log(response.data.data);
  return response.data.data
}