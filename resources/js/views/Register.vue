<template>
    <div class="vertical-centre">
        <b-container>
            <b-row>
                <b-col offset-lg="4" col lg="4">
                    <div class="form-header">
                        <h1>Sign Up</h1>
                        <p>Already have an account? <router-link :to="{name: 'login'}">Sign In</router-link></p> 
                    </div>

                    <b-form @submit="register">
                        <b-form-row>

                            <b-col cols="12">
                                <b-form-group
                                id="name"
                                label="Name"
                                label-for="name"
                                >
                                    <b-form-input
                                    id="name"
                                    v-model="name"
                                    type="text"
                                    required
                                    ></b-form-input>
                                </b-form-group>
                            </b-col>

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
                                <b-button type="submit" variant="primary">Sign Up</b-button>
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
        name: 'register',
        components: {},
        data() {
            return {
                name: '',
                email: '',
                password: ''
            }
        },
        methods: {
            register(evt) {
                evt.preventDefault();
                let app = this;
                axios.post('/api/register', {
                    name: app.name,
                    email: app.email,
                    password: app.password
                })
                .then(function(response) {
                    console.log(response.data);
                    app.name = response.data.name;
                    app.email = response.data.email;
                    localStorage.setItem('token', response.data.token);
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

    button.btn {
        padding: 10px 20px;
    }   
</style>