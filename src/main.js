import Vue from 'vue'
import App from './App.vue'
import router from './router'

//IMPORTING MAIN.SCSS FILE
import "../src/assets/css/main.scss"

//IMPORTING TAILWIND CSS
import "../src/assets/css/index.css"

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')

