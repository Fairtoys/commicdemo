import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'vant/lib/index.css';
import { ConfigProvider, Icon, Image, Button, Loading, Tab, Tabs } from 'vant'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ConfigProvider)
    .use(Icon)
    .use(Image)
    .use(Button)
    .use(Loading)
    .use(Tab)
    .use(Tabs)

app.mount('#app')
