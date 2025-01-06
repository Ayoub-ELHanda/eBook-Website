// ./src/store/cartStore.js
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCartStore = defineStore('cart', {
    state: () => ({
        products: []
    }),
    getters: {
        allProducts: (state) => state.products
    },
    actions: {
        async fetchProducts() {
            try {
                const response = await axios.get('http://localhost:5000/api/products')
                this.products = response.data
            } catch (error) {
                console.error('Error fetching products:', error)
            }
        }
    }
})
