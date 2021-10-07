import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import ElementPlus from "element-plus"
import locale from "element-plus/lib/locale/lang/zh-cn"
import 'element-plus/theme-chalk/index.css'
import '@/styles/reset.scss'

const app = createApp(App)
app.use(ElementPlus, { locale, size: "mini" })
app.use(router).mount('#app')
