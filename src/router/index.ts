import { createRouter, createWebHistory } from 'vue-router'
import Subscriber from "../../public/subscriber/views/subscriber.vue";
import Home from "../../public/subscriber/views/home.vue"

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/subscriber',
        name: 'Subscriber',
        component: Subscriber
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router