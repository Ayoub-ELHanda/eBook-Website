import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import Cart from '../views/Cart.vue';
import Checkout from '../views/Checkout.vue';
import UserLibrary from '../views/UserLibrary.vue';
import Details from '../views/Details.vue';
import OrderHistory from '../views/OrderHistory.vue';
import Search from '../views/Search.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/cart', component: Cart },
    { path: '/checkout', component: Checkout },
    { path: '/library', component: UserLibrary, meta: { requiresAuth: true } },
    { path: '/details//details/:id', component: Details },
    { path: '/order-history', component: OrderHistory, meta: { requiresAuth: true } },
    { path: '/search', component: Search }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

// Protect routes that require authentication
router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('token');
    if (to.meta.requiresAuth && !isAuthenticated) {
        next('/login');
    } else {
        next();
    }
});

export default router;
