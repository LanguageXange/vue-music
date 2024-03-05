import './assets/base.css'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// app.use() allows us to register plugins
app.use(createPinia())
app.use(router)

app.mount('#app')
