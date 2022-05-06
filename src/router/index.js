import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cadastro from '../views/Cadastro.vue'
import Agendamento from '../views/Agendamento.vue'
import Academia from '../views/Academia.vue'
import Grafico from '../views/Grafico.vue'
import Login from '../views/Login.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro
  },
  {
    path: '/agendamento',
    name: 'Agendamento',
    component: Agendamento
  },
  {
    path: '/academia',
    name: 'Academia',
    component: Academia
  },
  {
    path: '/grafico',
    name: 'Grafico',
    component: Grafico
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  let login = JSON.parse(localStorage.getItem("login"));
  if (to.fullPath !== "/login" && login === null) {
    next({ name: "login" });
  }
  next();
});

export default router
