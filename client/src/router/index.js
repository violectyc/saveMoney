import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'main',
        component: () => import('../views/main'),
        children: [
            {
                path: 'home',
                name: 'home',
                component: () => import('../views/home')
            },
            {
                path: 'booking',
                name: 'booking',
                component: () => import('../views/booking')
            },
            {
                path: 'me',
                name: 'me',
                component: () => import('../views/me')
            }, {
                path: '/',
                redirect: '/home'
            }
        ]
    }, {
        path: '/login',
        name: 'login',
        component: () => import('../views/login')
    }, {
        path: '/register',
        name: 'register',
        component: () => import('../views/register')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
