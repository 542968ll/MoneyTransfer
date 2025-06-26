import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './assets/css/reset.css'; // 引入全局 Reset CSS 文件
import 'vant/lib/index.css';
import { Button } from 'vant';

createApp(App).use(Button).mount('#app')
