<template>
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
                        <router-link :to="`/dashboard/lecturers/${lecturer.id}`">View</router-link>
                        <router-link to="/">Edit</router-link>
                        <b-button variant="danger">Delete</b-button>
                    </b-td>
                </b-tr>
            </b-table-simple>
        </b-col>
    </b-row>
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
            }
        }
    }
</script>

<style scoped>

</style>