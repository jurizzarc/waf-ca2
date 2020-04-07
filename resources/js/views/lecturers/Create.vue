<template>
    <div class="body-content">
        <b-row>
            <b-col offset-lg="3" col lg="6">
                <h1>Add Lecturer</h1>

                <b-form @submit="addLecturer">
                    <b-form-row>

                        <b-col cols="12">
                            <b-form-group
                                id="name"
                                label="Name"
                                label-for="name"
                            >
                                <b-form-input
                                    id="name"
                                    type="text"
                                    v-model="form.name"
                                    required
                                >
                                </b-form-input>
                            </b-form-group>
                        </b-col>

                        <b-col cols="12">
                            <b-form-group
                                id="address"
                                label="Address"
                                label-for="address"
                            >
                                <b-form-input
                                    id="address"
                                    type="text"
                                    v-model="form.address"
                                    required
                                >
                                </b-form-input>
                            </b-form-group>
                        </b-col>

                        <b-col col lg="6" sm="12">
                            <b-form-group
                                id="email"
                                label="E-mail Address"
                                label-for="email">
                                <b-form-input
                                    id="email"
                                    type="email"
                                    v-model="form.email"
                                    required
                                >
                                </b-form-input>
                            </b-form-group>
                        </b-col>

                        <b-col col lg="6" sm="12">
                            <b-form-group
                                id="phone"
                                label="Phone"
                                label-for="phone">
                                <b-form-input
                                    id="phone"
                                    type="text"
                                    v-model="form.phone"
                                    required
                                >
                                </b-form-input>
                            </b-form-group>
                        </b-col>

                        <b-button type="submit" variant="primary">Add Lecturer</b-button>
                        <router-link :to="{name: 'lecturersIndex'}">
                            <b-button variant="secondary">Cancel</b-button>
                        </router-link>

                    </b-form-row>
                </b-form>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: 'createLecturer',
        // components: {},
        data() {
            return {
                form: {
                    name: '',
                    address: '',
                    email: '',
                    phone: ''
                },
                loggedIn: false,
                errors: []
            }
        },
        created() {
            if (localStorage.getItem('token')) {
                this.loggedIn = true;
            } else {
                this.loggedIn = false;
                this.$router.push('/');
            }
        },
        methods: {
            addLecturer(evt) {
                evt.preventDefault();
                let app = this;
                let token = localStorage.getItem('token');

                axios.post('/api/lecturers', {
                    name: app.form.name,
                    address: app.form.address,
                    email: app.form.email,
                    phone: app.form.phone
                }, {
                    headers: { Authorization: "Bearer " + token }
                })
                .then(function (response) {
                    console.log(response);
                    app.$router.push('/dashboard/lecturers');
                })
                .catch(function (error) {
                    console.log(error.response.data);
                    app.errors = error.response.data.errors;
                })
            }
        }
    }
</script>

<style scoped>
    button:not(:last-child) {
        margin-right: 10px;
    }
</style>