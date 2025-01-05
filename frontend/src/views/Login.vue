<template>
    <h1>Login</h1>
    <form @submit.prevent="loginUser">
        <input v-model="email" placeholder="Enter Email" required />
        <input v-model="password" type="password" placeholder="Enter Password" required />
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
            try {
                const response = await axios.post('http://localhost:5000/api/users/login', {
                    email: this.email,
                    password: this.password
                });
                alert('Login Successful');
            } catch (error) {
                alert('Invalid Credentials');
            }
        }
    }
}
</script>
