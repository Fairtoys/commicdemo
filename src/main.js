import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { ConfigProvider, Icon, Image, Button } from 'vant'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ConfigProvider)
    .use(Icon)
    .use(Image)
    .use(Button)

app.mount('#app')
