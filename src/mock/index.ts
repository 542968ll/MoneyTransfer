const currencies = () => {
  return [
    // 模拟货币列表
    { code: 'USD', name: 'US Dollar', symbol: '$' },
    { code: 'CNY', name: 'Chinese Yuan', symbol: '¥' },
    { code: 'EUR', name: 'Euro', symbol: '€' },
    { code: 'JPY', name: 'Japanese Yen', symbol: '¥' },
    { code: 'MOP', name: 'British Pound', symbol: '£' },
  ]
}

const showPop = () => {
  return [
    {
      "show": true,
      "img": "../../assets/image/guzhang.svg",
      "title": "Convert Successfully!",
      "text": "You have converted 0.01 BTC to 1.234 ETH,please review soon.",
      "but": "Review"
    }
  ]
}

// 模拟的货币汇率数据[from是USD]
const mockExchangeRates = [
  {
    "USD": 1,
    "EUR": 0.85,
    "JPY": 110.15,
    "CNY": 6.45,
    "HKD": 7.85,
    "MOP": 8.09
  }
]

export default [
  // 获取货币列表接口
  {
    url: '/api/currencies',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: currencies,
        message: 'success'
      }
    }
  }, {
    // 获取弹窗内容接口
    url: '/api/showPop',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: {
          showPop
        }
      }
    }
  }, {
    // 获取汇率接口
    url: '/api/exchangeRate',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: {
          mockExchangeRates
        },
        message: '获取成功'
      }
    }
  }
]

