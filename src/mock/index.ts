// 引入 mock.js
import Mock from 'mockjs'
import showPop from './json/showPop.json'

// 模拟返回弹窗内容
Mock.mock('/api/showPop', 'get', showPop)

// 模拟货币列表
Mock.mock('/api/currencies', 'get', {
  "data": [
    { 
      "id": "USD",
      "name": "美元",
    }, { 
      "id": "CNY",
      "name": "人民币",
    }, { 
      "id": "HKD",
      "name": "港元",
    }, { 
      "id": "EUR",
      "name": "欧元",
    }, { 
      "id": "JPY",
      "name": "日元",
    }, { 
      "id": "MOP",
      "name": "澳门元",
    },
  ]
})

// 模拟汇率转换
Mock.mock('/api/convert', 'post', function(options: any) {
  const { from, to, amount } = JSON.parse(options.body)
  const mockRates: Record<string, number> = {
    'USD': 1,
    'EUR': 0.85,
    'JPY': 110.15,
    'CNY': 6.45,
    'HKD': 7.85,
    'MOP': 8.09,
  }
    
  const fromRate = mockRates[from]
  const toRate = mockRates[to]
  
  return {
    data: {
      from,
      to,
      amount,
      result: (amount * toRate / fromRate).toFixed(2)
    }
  }
})

