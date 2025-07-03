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
    * 新建 src/mock目录，新建mock.ts[主要用于定义请求接口与mock的一个映射，mock响应的数据等]
    * 在main.ts中引入（import './mock/mock.ts'）
    * 新建文件夹src/api，新建
        * request.ts（封装axios）
        * showPop.ts（显示Popup）
        * currency.ts（显示汇率、货币类型
3、配置好viteMockServe[主要用于指定mock文件夹的路径，进行axios请求时，用于响应mock数据，进行对请求接口进行拦截，从而响应返回mock数据]
	({
      mockPath: './src/mock', // mock文件夹路径
    }),

# Pro：
1、select选择框，赋予了默认值，为啥没有默认值显示？  【已解决，一开始使用reactive来定义响应式数据，后面改成ref即可实现】【ref可以直接替换整个对象，还能保持响应性；但reactive直接替换整个对象会破坏响应性】
使用场景：
	1、axios请求后，可以将结果赋给ref定义的对象
	2、ref在TS中的类型推断，需要显式声明；而reactive自动推断类型，无需显式声明
2、showPop的时候，为什么绑定了showobj，虽然一开始为空，为啥后面不传递过去？【已解决，弹出给弹窗赋值一个条件判断，来进行一个等获取到值后，showobj的数据已经更新了】
3、【优化】点击confirm按键的时候，可以做一个登录验证，然后再进行showPop弹出展示
4、【优化】对请求返回的TS类型进行类型缩小，替换any，除非无法取代


        

