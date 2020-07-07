import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/HelloWorld'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            requiresAuth: false
        }
    },
]

export default routes