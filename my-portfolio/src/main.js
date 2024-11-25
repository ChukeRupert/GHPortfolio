import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import AboutMe from './views/AboutMe.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About-Me',
    component: AboutMe
  },
  {
    path: '/projects',
    name: 'Projects-Landing',
    component: Projects
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')