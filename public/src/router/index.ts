import { createRouter, createWebHistory } from 'vue-router';
import Home from "@views/home.vue";
import Subscriber from "@views/subscriber.vue";

const routes = [

  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/subscriber',
    name: 'Subscriber',
    component: Subscriber
  },
  {
    path: '/:shortlink?',
    name: 'Subscriber',
    component: Subscriber,
    props: true,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;



// import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
//
// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: HomeView,
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import('../views/AboutView.vue'),
//     },
//   ],
// })
//
// export default router
