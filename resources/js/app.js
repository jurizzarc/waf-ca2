require('./bootstrap');
import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'

Vue.use(BootstrapVue)

// Create Vue instance
new Vue({
    router,
    render: h => h(App) // Render the App component
}).$mount('#app') // Mount to div#app