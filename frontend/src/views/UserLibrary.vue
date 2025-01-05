<template>
    <h1>My Purchased Books</h1>
    <div v-for="book in purchasedBooks" :key="book.id">
        <p>{{ book.title }} - <a :href="book.pdfUrl" target="_blank">Download PDF</a></p>
        <button @click="deleteBook(book.id)">Delete Book</button>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return { purchasedBooks: [] };
    },
    mounted() {
        const token = localStorage.getItem('token');
        axios.get('http://localhost:5000/api/library', {
            headers: { Authorization: `Bearer ${token}` }
        }).then(response => { this.purchasedBooks = response.data; });
    },
    methods: {
        async deleteBook(bookId) {
            const token = localStorage.getItem('token');
            await axios.delete(`http://localhost:5000/api/library/${bookId}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            this.purchasedBooks = this.purchasedBooks.filter(book => book.id !== bookId);
        }
    }
}
</script>
