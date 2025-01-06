<template>
    <h1>Login</h1>
    <form @submit.prevent="loginUser">
        <input v-model="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
    </form>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        async loginUser() {
            const response = await axios.post('http://localhost:5000/api/users/login', {
                email: this.email,
                password: this.password
            });
            localStorage.setItem('token', response.data.token);
            alert('Login successful!');
            this.$router.push('/library');
        }
    }
}
</script>
