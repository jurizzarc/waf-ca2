<template>
    <div class="body-content">
        <b-row>
            <b-col col lg="4">
                <h2>{{ lecturer.name }}</h2>

                <b-list-group>
                    <b-list-group-item>
                        <jam-pin-alt/>{{ lecturer.address }}
                    </b-list-group-item>
                    <b-list-group-item>
                        <jam-inbox/>{{ lecturer.email }}
                    </b-list-group-item>
                    <b-list-group-item>
                        <jam-phone/>{{ lecturer.phone }}
                    </b-list-group-item>
                </b-list-group>

                <div class="item-buttons">
                    <router-link :to="`/dashboard/lecturers/edit/${lecturer.id}`">
                        <b-button variant="primary">
                            Edit Lecturer
                        </b-button>
                    </router-link>
                    <b-button variant="light" @click="deleteLecturer(lecturer.id)">
                        Delete Lecturer
                    </b-button>
                </div>
            </b-col>

            <b-col offset-lg="1" col lg="7">
                <h3>Enrolments</h3>

                <b-table-simple responsive v-if="enrolments.length > 0">
                    <b-tr>
                        <b-th>Course</b-th>
                        <b-th>Date</b-th>
                        <b-th>Time</b-th>
                        <b-th>Status</b-th>
                    </b-tr>

                    <b-tr v-for="enrolment in enrolments" :key="enrolment.id">
                        <b-td>{{ enrolment.course.title }}</b-td>
                        <b-td>{{ enrolment.date | dateParse('YYYY.MM.DD') | dateFormat('DD.MM.YYYY') }}</b-td>
                        <b-td>{{ enrolment.time | dateParse('HH.mm.ss') | dateFormat('HH:mm') }}</b-td>
                        <b-td>
                            <h6 class="status" v-if="enrolment.status == 'career_break'">Career Break</h6>
                            <h6 class="status" v-else>
                                {{ enrolment.status }}
                            </h6>
                        </b-td>
                    </b-tr>
                </b-table-simple>

                <p class="array-results" v-else>This lecturer is not enrolled in any course.</p>
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
        },
        methods: {
            deleteLecturer(id) {
                let app = this;
                let token = localStorage.getItem('token');
                axios.delete(`/api/lecturers/${id}`, {
                    headers: { Authorization: "Bearer " + token }
                })
                .then(function (response) {
                    console.log(response);
                    app.$router.push('/dashboard/lecturers');
                });
            }
        }
    }
</script>

<style scoped>
    .list-group {
        margin-top: 15px;
    }
</style>