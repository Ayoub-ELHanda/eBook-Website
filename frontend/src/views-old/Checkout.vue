<template>
    <h1>Checkout</h1>
    <button @click="completePurchase">Complete Purchase</button>
</template>

<script>
import axios from 'axios';
export default {
    methods: {
        async completePurchase() {
            const token = localStorage.getItem('token');
            await axios.post('http://localhost:5000/api/orders', {}, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert('Purchase completed successfully!');
        }
    }
}
</script>
