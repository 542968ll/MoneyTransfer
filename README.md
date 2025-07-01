# Vue 3 + TypeScript + Vite

# tailwindCSS
1、安装依赖：npm i tailwindcss postcss autoprefixer
2、创建tailwindcss配置文件【npx tailwindcss init -p】
3、配置tailwind.config.js文件
/** @type {import('tailwindcss').Config} */
	module.exports = {
	content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
	extend: {},
	},
	plugins: [],
	}
4、引入tailwind的基本指令【在 src/assets/tailwind.css 文件中添加】
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
5、在main.js中引入样式：import './assets/tailwind.css'
6、使用自定义样式【使用@apply语法进行复用】



# Mock数据结合Axios：https://juejin.cn/post/7242475298678652988
1、引入axios：npm install axios
    * 封装请求工具类[请求拦截器 & 响应拦截器(主要针对接口返回数据进行Mock的数据进行赋值)]
2、引入Mock.js：npm install --save-dev mockjs @types/mockjs
    * 新建 src/mock目录，新建mock.ts[主要用于定义获取信息的接口]
    * 在main.ts中引入（import './mock/mock.ts'）
    * 新建文件夹src/api，新建
        * request.ts（封装axios）
        * showPop.ts（显示Popup）
        * currency.ts（显示汇率、货币类型）
        

