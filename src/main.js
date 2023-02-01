import { createApp } from 'vue'
import App from './App.vue'
import { plugin, defaultConfig } from '@formkit/vue'
import '/src/assets/formulate.css'


import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'



createApp(App).use(plugin, defaultConfig).mount('#app')

VueClipboard.config.autoSetContainer = true // add this line
Vue.use(VueClipboard)