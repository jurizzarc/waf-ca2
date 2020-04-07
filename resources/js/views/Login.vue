<template>
    <div class="vertical-centre">
        <b-container>
            <b-row>
                <b-col offset-lg="4" col lg="4">
                    <div class="form-header">
                        <h1>Sign In</h1>
                        <p>Don't have an account yet? <router-link :to="{name: 'register'}">Sign up</router-link></p>
                    </div>

                    <b-form @submit="login">
                        <b-form-row>

                            <b-col cols="12">
                                <b-form-group
                                id="email"
                                label="E-mail Address"
                                label-for="email"
                                >
                                    <b-form-input
                                    id="email"
                                    v-model="email"
                                    type="email"
                                    required
                                    ></b-form-input>
                                </b-form-group>
                            </b-col>

                            <b-col cols="12">
                                <b-form-group
                                id="password"
                                label="Password"
                                label-for="password"
                                >
                                    <b-form-input
                                    id="password"
                                    v-model="password"
                                    type="password"
                                    required
                                    ></b-form-input>
                                </b-form-group>
                            </b-col>

                            <b-col>
                                <b-button type="submit" variant="primary">Sign In</b-button>
                            </b-col>

                        </b-form-row>
                    </b-form>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: 'login',
        components: {},
        data() {
            return {
                email: '',
                password: '',
                name: ''
            }
        },
        methods: {
            login(evt) {
                evt.preventDefault();
                let app = this;
                axios.post('/api/login', {
                    email: app.email,
                    password: app.password,
                })
                .then(function(response) {
                    console.log(response.data);
                    app.name = response.data.name;
                    localStorage.setItem('token', response.data.token);
                    // Redirect to this url
                    app.$router.push('/dashboard');
                })
                .catch(function(error) {
                    console.log(error);
                });
            }
        }
    }
</script>

<style scoped>
    p a {
        font-weight: 500;
    }

    .form-header h1 {
        margin-bottom: 5px;
    }
</style>