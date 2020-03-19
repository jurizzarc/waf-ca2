<template>
    <div>
        Test Login<br/>
        <button @click="login()">Log In</button><br/>
        Test Courses<br/>
        <button @click="getCourses()">Get Courses</button><br/>
        Test Logout<br/>
        <button @click="logout()">Log Out</button>
    </div>
</template>

<script>
    export default {
        name: 'example',
        components: {

        },
        data() {
            return {
                name: "",
                email: "",
                courses: []
            }
        },
        mounted() {
            if (localStorage.getItem('token') !== null) {
                // this.$router.replace({ name: 'home' });
                console.log("USER LOGGED IN");
            }
        },
        methods: {
            login() {
                let app = this;
                axios.post('/api/login', {
                    email: "sam@bloggs.com",
                    password: "secret"
                })
                .then(function (response) {
                    console.log(response.data);
                    app.name = response.data.name;
                    app.email = response.data.email;
                    localStorage.setItem('token', response.data.token);
                })
                .catch(function (error) {
                    console.log(error);
                });
            },
            getCourses() {
                let app = this;
                let token = localStorage.getItem('token');
                axios.get('/api/courses', {
                    headers: { Authorization: "Bearer " + token }
                })
                .then(function (response) {
                    console.log(response);
                    app.courses = response.data.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
            },
            logout() {
                let token = localStorage.getItem('token');
                axios.get('/api/logout', {
                    headers: { Authorization: "Bearer " + token }
                })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
                console.log("USER LOGGED OUT");
                localStorage.removeItem('token');
            }
        }
    }
</script>

<style>
    .container {
        margin-top: 30px;
    }
</style>