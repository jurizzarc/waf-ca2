<template>
    <div class="body-content">
        <b-row>
            <b-col offset-lg="1" col lg="10">
                <h1>Lecturers</h1>

                <b-table-simple responsive>
                    <b-tr>
                        <b-th>Name</b-th>
                        <b-th>E-mail Address</b-th>
                        <b-th>Actions</b-th>
                    </b-tr>

                    <b-tr v-for="lecturer in lecturers" :key="lecturer.id">
                        <b-td>{{ lecturer.name }}</b-td>
                        <b-td>{{ lecturer.email }}</b-td>
                        <b-td>
                            <router-link :to="`/dashboard/lecturers/${lecturer.id}`">
                                <b-button variant="outline-secondary">
                                    <jam-eye/>View
                                </b-button>
                            </router-link>
                            <router-link :to="`/dashboard/lecturers/edit/${lecturer.id}`">
                                <b-button variant="outline-secondary">
                                    <jam-pencil/>Edit
                                </b-button>
                            </router-link>
                            <b-button variant="outline-secondary" @click="deleteLecturer(lecturer.id)">
                                <jam-trash-alt/>Delete
                            </b-button>
                        </b-td>
                    </b-tr>
                </b-table-simple>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: 'lecturersIndex',
        data() {
            return {
                lecturers: []
            }
        },
        mounted() {
            if (localStorage.getItem('token')) {
                console.log("User logged in.");
            } else {
                console.log("User not logged in.");
            }

            this.getLecturers();
        },
        methods: {
            getLecturers() {
                let app = this;
                let token = localStorage.getItem('token');
                axios.get('/api/lecturers', {
                    headers: { Authorization: "Bearer " + token }
                })
                .then(function (response) {
                    console.log(response.data);
                    app.lecturers = response.data.data;
                })
                .catch(function (error) {
                    console.log(error);
                })
            },
            deleteLecturer(id) {
                let app = this;
                let token = localStorage.getItem('token');
                axios.delete(`/api/lecturers/${id}`, {
                    headers: { Authorization: "Bearer " + token }
                })
                .then(function (response) {
                    console.log(response);
                    app.getLecturers();
                });
            }
        }
    }
</script>