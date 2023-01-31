import { createApp } from 'vue'
import { plugin as dialogPlugin } from 'gitart-vue-dialog'

import App from './App.vue'


import './assets/main.css'
import 'gitart-vue-dialog/dist/style.css'

const app = createApp(App).use(dialogPlugin)



app.mount('#app')
