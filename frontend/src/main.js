import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import { createPinia } from 'pinia' 
import { useForm, Field, ErrorMessage, configure } from 'vee-validate'  // Correct imports for VeeValidate v4

// Create Vue application instance
const app = createApp(App)

// ✅ Replace Vuex with Pinia for Vue 3
const pinia = createPinia()

// ✅ Configure Axios for global usage
app.config.globalProperties.$http = axios
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

// ✅ VeeValidate Configuration (Optional Custom Messages)
configure({
  validateOnInput: true,
  validateOnBlur: true
})

// ✅ Register Plugins
app.use(router)
app.use(pinia)

// ✅ Globally register VeeValidate components (v4+)
app.component('VForm', useForm)
app.component('VField', Field)
app.component('ErrorMessage', ErrorMessage)

// ✅ Mount the App
app.mount('#app')
