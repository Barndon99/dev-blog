import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'

createApp(App)
  .use(router)
  .use(Vuesax, {})
  .mount('#app')
