<template>
    <div class="body-content">
        <b-row>
            <b-col col lg="6">
                <h2>{{ course.title }}</h2>
                
                <b-list-group horizontal>
                    <b-list-group-item>{{ course.code }}</b-list-group-item>
                    <b-list-group-item>Level {{ course.level }}</b-list-group-item>
                    <b-list-group-item>{{ course.points }} Points</b-list-group-item>
                </b-list-group>

                <p class="description">
                    {{ course.description }}
                </p>

                <div class="item-buttons">
                    <router-link :to="`/dashboard/courses/edit/${course.id}`">
                        <b-button variant="primary">
                            Edit Course
                        </b-button>
                    </router-link>
                    <b-button variant="light" @click="deleteCourse(course.id)">
                        Delete Course
                    </b-button>
                </div>
            </b-col>

            <b-col offset-lg="1" col lg="5">
                <h2>Enrolments</h2>

                <b-table-simple responsive v-if="enrolments.length > 0">
                    <b-tr>
                        <b-th>Lecturer</b-th>
                        <b-th>Status</b-th>
                    </b-tr>

                    <b-tr v-for="enrolment in enrolments" :key="enrolment.id">
                        <b-td>{{ enrolment.lecturer.name }}</b-td>
                        <b-td>
                            <h6 class="status" v-if="enrolment.status == 'career_break'">Career Break</h6>
                            <h6 class="status" v-else>
                                {{ enrolment.status }}
                            </h6>
                        </b-td>
                    </b-tr>
                </b-table-simple>

                <p class="array-results" v-else>No lecturer is enrolled in this course.</p>
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
                enrolments: [],
                loggedIn: false
            }
        },
        mounted() {
            if (localStorage.getItem('token')) {
                this.loggedIn = true;
            } else {
                this.loggedIn = false;
                this.$router.push('/');
            }

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
        },
        methods: {
            deleteCourse(id) {
                let app = this;
                let token = localStorage.getItem('token');
                axios.delete(`/api/courses/${id}`, {
                    headers: { Authorization: "Bearer " + token }
                })
                .then(function (response) {
                    console.log(response);
                    app.$router.push('/dashboard/courses');
                });
            }
        }
    }
</script>