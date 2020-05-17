import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/AthletesView.vue'),
  },
  {
    path: '/athletes',
    name: 'Athletes',
    component: () => import('../views/AthletesView.vue'),
  },
  {
    path: '/athletes/:id',
    name: 'Athlete',
    component: () => import('../views/AthleteView.vue'),
    props: true,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
