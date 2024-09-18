import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import i18n from './i18n';
//@ts-ignore
import App from './App.vue'
//@ts-ignore
import router from './router';

import 'element-plus/dist/index.css'
import './App.css'

createApp(App).use(ElementPlus).use(router).use(i18n).mount('#app')
