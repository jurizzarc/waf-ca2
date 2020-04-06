<template>
    <div class="body-content">
        <b-row>
            <b-col col lg="12">
                <h1>Enrolments</h1>

                <b-table-simple :list-data="enrolments" responsive>
                    <b-tr>
                        <b-th>Course</b-th>
                        <b-th>Lecturer</b-th>
                        <b-th>Date</b-th>
                        <b-th>Time</b-th>
                        <b-th>Status</b-th>
                        <b-th>Actions</b-th>
                    </b-tr>

                    <b-tr v-for="enrolment in enrolments" :key="enrolment.id">
                        <b-td>{{ enrolment.course.title }}</b-td>
                        <b-td>{{ enrolment.lecturer.name }}</b-td>
                        <b-td>{{ enrolment.date }}</b-td>
                        <b-td>{{ enrolment.time }}</b-td>
                        <b-td>{{ enrolment.status }}</b-td>
                        <b-td>
                            <router-link :to="`/dashboard/enrolments/edit/${enrolment.id}`">Edit</router-link>
                            <b-button variant="danger" @click="deleteEnrolment(enrolment.id)">Delete</b-button>
                        </b-td>
                    </b-tr>
                </b-table-simple>

            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: 'enrolmentsIndex',
        data() {
            return {
                enrolments: []
            }
        },
        mounted() {
            if (localStorage.getItem('token') !== null) {
                console.log("User logged in.");
            } else {
                console.log("User not logged in.");
            }
            this.getEnrolments();
        },
        methods: {
            getEnrolments() {
                let app = this;
                let token = localStorage.getItem('token');
                axios.get('/api/enrolments', {
                    headers: { Authorization: "Bearer " + token }
                })
                .then(function (response) {
                    console.log(response.data);
                    app.enrolments = response.data.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
            },
            deleteEnrolment(id) {
                let app = this;
                let token = localStorage.getItem('token');
                axios.delete(`/api/enrolments/${id}`, {
                    headers: { Authorization: "Bearer " + token }
                })
                .then(function (response) {
                    console.log(response);
                    app.getEnrolments();
                });
            }
        }
    }
</script>