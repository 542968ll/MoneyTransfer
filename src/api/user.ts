import request from '../api/request'
export const Login = async (params: any) => {
  const response = await request.post('/api/user/login', params)
  if(response.data.code === 200) {
    localStorage.setItem('token', response.data.code)
  }
  return response.data
}