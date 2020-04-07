<template>
    <div class="body-content">
        <b-row>
            <b-col offset-lg="1" col lg="10">
                <h3>Welcome, {{ user.name }}.</h3>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: 'dashboard',
        data() {
            return {
                user: {},
                loggedIn: false
            }
        },
        mounted() {
            if (localStorage.getItem('token')) {
                this.loggedIn = true;
            } else {
                this.loggedIn = false;
                this.$router.push('/');
            }
            
            let app = this;
            let token = localStorage.getItem('token');
            axios.get('/api/user', {
                headers: { Authorization: "Bearer " + token }
            })
            .then(function (response) {
                console.log(response.data.user);
                app.user = response.data.user;
            })
            .catch(function (error) {
                console.log(error)
            });
        }
    }
</script>