<template>
    <h1>Register</h1>
    <form @submit.prevent="registerUser">
        <input v-model="email" placeholder="Enter Email" required />
        <input v-model="password" type="password" placeholder="Enter Password" required />
        <button type="submit">Register</button>
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
        async registerUser() {
            try {
                const response = await axios.post('http://localhost:5000/api/users/register', {
                    email: this.email,
                    password: this.password
                });
                alert('User Registered Successfully');
            } catch (error) {
                alert('Error Registering User');
            }
        }
    }
}
</script>
