<template>
    <h1>Book Details</h1>
    <p>{{ book.title }}</p>
    <p>{{ book.description }}</p>
    <p>Price: ${{ book.price }}</p>
    <button @click="addToCart">Add to Cart</button>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return { book: {} };
    },
    mounted() {
        axios.get(`http://localhost:5000/api/books/${this.$route.params.id}`)
            .then(response => { this.book = response.data; });
    },
    methods: {
        addToCart() {
            alert(`${this.book.title} added to cart!`);
        }
    }
}
</script>
