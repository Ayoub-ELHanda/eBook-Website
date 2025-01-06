// Updated for Vue 3 using Vue Router 4
import { createRouter, createWebHistory } from 'vue-router'

// Consistent uppercase naming for components
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Details from '../views/Details.vue'

// Admin Components
import Index from '../views/admin/Index.vue'
import New from '../views/admin/New.vue'
import Products from '../views/admin/Products.vue'
import Edit from '../views/admin/Edit.vue'

// Define routes
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/admin',
        component: Index,
        children: [
            {
                path: 'new',
                name: 'AdminNew',
                component: New
            },
            {
                path: '',
                name: 'AdminProducts',
                component: Products
            },
            {
                path: 'edit/:id',
                name: 'AdminEdit',
                component: Edit
            }
        ]
    },
    {
        path: '/posts/:id',
        name: 'Details',
        component: Details
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    }
]

// Create the router instance with Web History mode
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
