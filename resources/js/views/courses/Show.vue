<template>
    <b-container>
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
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: 'showCourse',
        data() {
            return {
                course: {}
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
                app.course = response.data.data;
                console.log(app.course);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
</script>

<style scoped>
    .container {
        padding-top: 80px;
    }
</style>