require('./bootstrap');
import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue' // npm install vue bootstrap-vue bootstrap
import VueJamIcons from 'vue-jam-icons' // npm install jam-icons
import VueFilterDateFormat from 'vue-filter-date-format' // npm install vue-filter-date-format
import VueFilterDateParse from 'vue-filter-date-parse' // npm install vue-filter-date-parse
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'

Vue.use(BootstrapVue)
Vue.use(VueJamIcons)
Vue.use(VueFilterDateFormat)
Vue.use(VueFilterDateParse)

// Create Vue instance
new Vue({
    router,
    render: h => h(App) // Render the App component
}).$mount('#app') // Mount to div#app