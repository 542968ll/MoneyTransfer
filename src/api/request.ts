import axios from 'axios'
import showPopup from '../mock/json/showPop.json';
import currencies from '../mock/json/currencies.json'
import rates from "../mock/json/rates.json"

const instance = axios.create({
  baseURL: 'http://localhost:5173/',
  timeout: 5000,
})

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 请求成功做点什么

    // 设置默认 Content-Type
    if (!config.headers['Content-Type']) {
      config.headers['Content-Type'] = 'application/json';
    }
    return config
  },
  function (error) {
    // 对请求错误做点什么
    return Promise.reject(error)
  }
)
// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 对响应成功做点什么
    // 检查是否是模拟的请求
    // 针对showPop模拟数据
    if(response.config.url?.includes('/showPop')) {
      response.data = showPopup
    } else if (response.config.url?.includes('/currencies')) {
      response.data = currencies
    } else if (response.config.url?.includes('/convert')) {
      response.data = rates
    }
    return response
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)





export default instance
