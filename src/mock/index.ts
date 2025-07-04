// 模拟货币列表
const currencies = () => {
  return [
    { value: 'USD', name: 'US Dollar', symbol: '$' },
    { value: 'CNY', name: 'Chinese Yuan', symbol: '¥' },
    { value: 'EUR', name: 'Euro', symbol: '€' },
    { value: 'JPY', name: 'Japanese Yen', symbol: '¥' },
    { value: 'MOP', name: 'British Pound', symbol: '£' },
  ]
}

// 模拟弹窗返回内容[成功的]
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

// 模拟弹窗返回内容[成功的]
const showPopFailed = () => {
  return [
    {
      "show": true,
      "img": "../../assets/image/fadai.svg",
      "title": "Convert Failed!",
      "text": "Incorrect trade password.",
      "but": "Try"
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

// 模拟用户列表
const userList = () => {
  return [{
    userId: 1,
    username: 'admin',
    password: '123456',
    token: 'Admin Token'
  }, {
    userId: 2,
    username: 'system',
    password: '123456',
    token: 'Admin Token'
  }]
}

// 模拟转账数据
const transferData = {
  title: "Transfer Reminder",
  content: "Elaine has sent you 100USDT,please review soon.",
  money: 100
}


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
        // data: {
        //   showPop
        // }
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
  }, {
    // 用户登录接口
    url: '/api/user/login',
    method: 'post',
    response: ({ body }: any) => {
      // 获取请求体携带过来的用户名与密码
      const { username, password } = body
      // 调用获取用户信息函数，用于判断是否有此用户
      const checkUser = userList().find(
        (item) => item.username === username && item.password === password
      )
      // 没有用户则返回失败信息
      if (!checkUser) {
        return {
          code: 201,
          data: {
            message: '账号或者密码不正确',
            showPopFailed
          }
        }
      }
      // 如果有返回成功信息
      const { token } = checkUser
      return {
        code: 200,
        data: {
          token,
          message: '登录成功',
          showPop
        }
      }
    }
  }, {
     // 获取汇率接口
     url: '/api/transfer',
     method: 'post',
     response: () => {
       return {
         code: 200,
         data: {
           transferData
         },
         message: '收入到账'
       }
     }
  }
]

