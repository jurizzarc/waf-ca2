<template>
    <div class="body-content">
        <b-row>
            <b-col offset-lg="3" col lg="6">
                <div class="form-header">
                    <h1>Edit Lecturer</h1>
                </div>

                <b-form @submit="editLecturer">
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
                                    v-model="lecturer.name"
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
                                    v-model="lecturer.address"
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
                                    v-model="lecturer.email"
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
                                    v-model="lecturer.phone"
                                    required
                                >
                                </b-form-input>
                            </b-form-group>
                        </b-col>

                        <b-col>
                            <b-button type="submit" variant="primary">Edit Lecturer</b-button>
                            <router-link :to="{name: 'lecturersIndex'}">
                                <b-button variant="light">Cancel</b-button>
                            </router-link>
                        </b-col>

                    </b-form-row>
                </b-form>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: 'editLecturer',
        // components: {},
        data() {
            return {
                lecturer: {},
                loggedIn: false
            }
        },
        created() {
            if (localStorage.getItem('token')) {
                this.loggedIn = true;
            } else {
                this.loggedIn = false;
            }

            this.getLecturer();
        },
        methods: {
            getLecturer() {
                let app = this;
                let lecturerId = app.$route.params.id;
                let token = localStorage.getItem('token');
                axios.get(`/api/lecturers/${lecturerId}`, {
                    headers: { Authorization: "Bearer " + token }
                })
                .then(function (response) {
                    app.lecturer = response.data.data[0];
                    console.log(app.lecturer);
                })
                .catch(function (error) {
                    console.log(error);
                });
            },
            editLecturer(evt) {
                evt.preventDefault();

                let app = this;
                let lecturerId = app.$route.params.id;
                let token = localStorage.getItem('token');
                axios.put(`/api/lecturers/${lecturerId}`, {
                    name: app.lecturer.name,
                    address: app.lecturer.address,
                    email: app.lecturer.email,
                    phone: app.lecturer.phone
                },
                {
                    headers: { Authorization: "Bearer " + token }
                })
                .then(function (response) {
                    app.$router.push('/dashboard/lecturers');
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        }
    }
</script>

<style scoped>
    button:not(:last-child) {
        margin-right: 10px;
    }
</style>