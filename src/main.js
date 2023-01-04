import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import './assets/main.css'
import icons from './icons/icons'
import { createPinia } from 'pinia'

library.add(icons)

const app = createApp(App)

const pinia = createPinia()

app.use(pinia)

app.use(router)

app.component('fa-icon', FontAwesomeIcon)

app.mount('#app')
