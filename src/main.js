import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Quizz from "./components/Quizz.vue";
import Rankings from "./components/ranking/Rankings.vue";
import Home from "./components/Home.vue";
import Entry from "./components/Entry.vue";

import "tailwindcss/tailwind.css"

const routes = [
  { path: '/', component: Home },
  { path: '/rankings', component: Rankings },
  { path: '/quizz', component: Quizz },
  { path: '/entry', name: 'entry', component: Entry, props: true },
  { path: '*', redirect: '/' }
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
