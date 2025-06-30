import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './assets/css/reset.css'; // 引入全局 Reset CSS 文件
import 'vant/lib/index.css';
import axios from 'axios';
import { createPinia } from 'pinia';
// import "./mock/index.ts";
import { Button, Notify, Field, Popup } from 'vant';

const pinia = createPinia()

createApp(App)
.use(Button)
.use(Field)
.use(Notify)
.use(Popup)
.use(pinia)
.mount('#app')
