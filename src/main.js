import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Quizz from "./components/Quizz.vue";
import Rankings from "./components/ranking/Rankings.vue";

import "tailwindcss/tailwind.css"

const routes = [
  { path: '/rankings', component: Rankings },
  { path: '/quizz', component: Quizz }
]

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
