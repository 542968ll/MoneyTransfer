// 引入 mock.js
import Mock from 'mockjs'
import showPop from './json/showPop.json'

// Mock.mock 方法有很多重载， 可以接受不同参数
Mock.mock('/show/showPop', 'get', showPop)

