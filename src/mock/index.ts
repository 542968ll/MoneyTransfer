// 引入 mock.js
import Mock from 'mockjs'
import showPop from './json/showPop.json'
import currencies from './json/currencies.json'
import rates from './json/rates.json'

// 模拟返回弹窗内容
Mock.mock('/showPop', 'get', showPop)

// 模拟货币列表
Mock.mock('/currencies', 'get', currencies)

// 拿到usd的相对其他的汇率
Mock.mock('/convert', 'get', rates)



// 模拟汇率转换
// Mock.mock('/convert', 'post', convertFun)

