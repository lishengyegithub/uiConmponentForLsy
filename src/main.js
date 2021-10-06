import { createApp } from 'vue'
import App from './App.vue'
// 引入element-plus\css
import elementPlus from "element-plus"
import 'element-plus/dist/index.css'
import router from "./router/index.js"
const app=createApp(App);
app.use(router);
app.use(elementPlus);
app.mount('#app');