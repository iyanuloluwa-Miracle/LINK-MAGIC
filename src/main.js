import { createApp } from 'vue'
import App from "./App.vue"
import { createPinia } from "pinia"
import { createHead } from '@vueuse/head'
import "./style.css";

const app = createApp(App)
const head = createHead()
const pinia = createPinia()

app.use(head)
app.use(pinia)
app.mount('#app')
