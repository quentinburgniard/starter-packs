import { createApp } from 'vue'
import Component from './Component.vue'
//import router from './router'

const component = createApp(Component)

//app.use(router)

component.mount('#component')
