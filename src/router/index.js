import { createRouter, createWebHistory } from 'vue-router';

var routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', name: 'home', component: () => import('../components/Home') }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
