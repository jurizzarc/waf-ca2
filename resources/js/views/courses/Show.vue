<template>
    <div class="body-content">
        <b-row>
            <b-col offset-lg="2" col lg="8">
                <h1>View Course</h1>

                <b-table-simple responsive>
                    <b-tr>
                        <b-th>Title</b-th>
                        <b-td>{{ course.title }}</b-td>
                    </b-tr>

                    <b-tr>
                        <b-th>Code</b-th>
                        <b-td>{{ course.code }}</b-td>
                    </b-tr>

                    <b-tr>
                        <b-th>Description</b-th>
                        <b-td>{{ course.description }}</b-td>
                    </b-tr>

                    <b-tr>
                        <b-th>Level</b-th>
                        <b-td>{{ course.level }}</b-td>
                    </b-tr>

                    <b-tr>
                        <b-th>Points</b-th>
                        <b-td>{{ course.points }}</b-td>
                    </b-tr>
                </b-table-simple>

                <h3>Enrolments</h3>

                <b-table-simple responsive>
                    <b-tr>
                        <b-th>Lecturer</b-th>
                        <b-th>Date</b-th>
                        <b-th>Time</b-th>
                        <b-th>Status</b-th>
                    </b-tr>

                    <b-tr v-for="enrolment in enrolments" :key="enrolment.id">
                        <b-td>{{ enrolment.lecturer.name }}</b-td>
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
        name: 'showCourse',
        data() {
            return {
                course: {},
                enrolments: []
            }
        },
        mounted() {
            let app = this;
            let courseId = app.$route.params.id;
            // console.log(courseId);
            let token = localStorage.getItem('token');
            axios.get(`/api/courses/${courseId}`, {
                headers: { Authorization: "Bearer " + token }
            })
            .then(function (response) {
                app.course = response.data.data[0];
                app.enrolments = app.course.enrolments;
                console.log(app.course);
                console.log(app.enrolments);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
</script>