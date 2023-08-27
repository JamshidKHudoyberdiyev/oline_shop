import './assets/main.css'
import { DatePicker } from 'ant-design-vue'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import naive from 'naive-ui'
import 'ant-design-vue/dist/reset.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(naive)
app.use(router)
app.use(DatePicker)
app.mount('#app')