<template>
    <div class="body-content">
        <b-row>
            <b-col offset-lg="2" col lg="8">
                <h1>View Lecturer</h1>

                <b-table-simple responsive>
                    <b-tr>
                        <b-th>Name</b-th>
                        <b-td>{{ lecturer.name }}</b-td>
                    </b-tr>

                    <b-tr>
                        <b-th>Address</b-th>
                        <b-td>{{ lecturer.address }}</b-td>
                    </b-tr>

                    <b-tr>
                        <b-th>E-mail Address</b-th>
                        <b-td>{{ lecturer.email }}</b-td>
                    </b-tr>

                    <b-tr>
                        <b-th>Phone</b-th>
                        <b-td>{{ lecturer.phone }}</b-td>
                    </b-tr>
                </b-table-simple>

                <h3>Enrolments</h3>

                <b-table-simple responsive>
                    <b-tr>
                        <b-th>Course</b-th>
                        <b-th>Date</b-th>
                        <b-th>Time</b-th>
                        <b-th>Status</b-th>
                    </b-tr>

                    <b-tr v-for="enrolment in enrolments" :key="enrolment.id">
                        <b-td>{{ enrolment.course.title }}</b-td>
                        <b-td>{{ enrolment.date }}</b-td>
                        <b-td>{{ enrolment.time }}</b-td>
                        <b-td>{{ enrolment.status }}</b-td>
                    </b-tr>
                </b-table-simple>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: 'showLecturer',
        data() {
            return {
                lecturer: {},
                enrolments: []
            }
        },
        mounted() {
            let app = this;
            let lecturerId = app.$route.params.id;
            let token = localStorage.getItem('token');
            axios.get(`/api/lecturers/${lecturerId}`, {
                headers: { Authorization: "Bearer " + token }
            })
            .then(function (response) {
                app.lecturer = response.data.data[0];
                app.enrolments = app.lecturer.enrolments;
                console.log(app.lecturer);
            })
            .catch(function (error) {
                console.log(error)
            });
        }
    }
</script>