import { createRouter, createWebHistory } from 'vue-router';

// Import the views
import Home from '../views/Home.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import Cart from '../views/Cart.vue';
import Checkout from '../views/Checkout.vue';
import Details from '../views/Details.vue';
import OrderHistory from '../views/OrderHistory.vue';
import Search from '../views/Search.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/cart', component: Cart },
    { path: '/checkout', component: Checkout },
    { path: '/details', component: Details },
    { path: '/order-history', component: OrderHistory },
    { path: '/search', component: Search }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
