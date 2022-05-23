import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Movie from '../views/Movie.vue'
import LoginProfile from '../views/LoginProfile.vue'
import Profile from '../views/Profile.vue'
import FinalLogin from '../components/FinalLogin.vue'
import AllMovie from '../views/AllMovie.vue'
import { auth } from '../firebase'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/movie',
    name: 'AllMovie',
    component: AllMovie,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/movie/:id',
    name: 'Movie',
    component: Movie,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: LoginProfile
  },
  {
    path: '/login',
    name: 'Login',
    component: FinalLogin
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login' && auth.currentUser) {
    next('/')
    return
  }

  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
    next('/login')
    return
  }

  next()
})

export default router
