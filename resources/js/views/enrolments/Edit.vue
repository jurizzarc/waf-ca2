<template>
    <div class="body-content">
        <b-row>
            <b-col offset-lg="4" col lg="4">
                <div class="form-header">
                    <h1>Edit Enrolment</h1>
                </div>

                <b-form @submit="editEnrolment">
                    <b-form-row>

                        <b-col cols="12">
                            <b-form-group
                              id="course_id"
                              label="Course"
                              label-for="course_id">
                                <b-form-select
                                  id="course_id"
                                  v-model="enrolment.course_id"
                                  required
                                >
                                    <b-form-select-option 
                                        v-for="course in courses" 
                                        v-bind:value="course.id"
                                        :key="course.id">
                                        {{ course.title }}
                                    </b-form-select-option>
                                </b-form-select>
                            </b-form-group>
                        </b-col> 

                        <b-col cols="12">
                            <b-form-group
                              id="lecturer_id"
                              label="Lecturer"
                              label-for="lecturer_id">
                                <b-form-select
                                  id="lecturer_id"
                                  v-model="enrolment.lecturer_id"
                                  required
                                >
                                    <b-form-select-option 
                                        v-for="lecturer in lecturers" 
                                        v-bind:value="lecturer.id"
                                        :key="lecturer.id">
                                        {{ lecturer.name }}
                                    </b-form-select-option>
                                </b-form-select>
                            </b-form-group>
                        </b-col>

                        <b-col col lg="6" sm="12">
                            <b-form-group
                              id="date"
                              label="Date"
                              label-for="date">
                                <b-form-input
                                  id="date"
                                  type="date"
                                  v-model="enrolment.date"
                                  required
                                >
                                </b-form-input>
                            </b-form-group>
                        </b-col>

                        <b-col col lg="6" sm="12">
                            <b-form-group
                              id="time"
                              label="Time"
                              label-for="time">
                                <b-form-input
                                  id="time"
                                  type="time"
                                  v-model="enrolment.time"
                                  required
                                >
                                </b-form-input>
                            </b-form-group>
                        </b-col> 

                        <b-col cols="12">
                            <b-form-group
                              id="status"
                              label="Status"
                              label-for="status">
                                <b-form-select
                                  id="status"
                                  v-model="enrolment.status"
                                  required
                                >
                                    <b-form-select-option 
                                        v-for="status_type in status_types" 
                                        v-bind:value="status_type.value"
                                        :key="status_type.id">
                                        {{ status_type.text }}
                                    </b-form-select-option>
                                </b-form-select>
                            </b-form-group>
                        </b-col> 

                        <b-col>
                            <b-button type="submit" variant="primary">Edit Enrolment</b-button> 
                            <router-link :to="`/dashboard/enrolments`">
                                <b-button variant="light">
                                    Cancel
                                </b-button>
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
        name: 'editEnrolment',
        data() {
            return {
                enrolment: {},
                loggedIn: false,
                courses: [],
                lecturers: [],
                status_types: [
                    { id: '1', value: 'interested', text: 'Interested'},
                    { id: '2', value: 'assigned', text: 'Assigned' },
                    { id: '3', value: 'associate', text: 'Associate' },
                    { id: '4', value: 'career_break', text: 'Career Break' }
                ],
            }
        },
        created() {
            if (localStorage.getItem('token')) {
                this.loggedIn = true;
            } else {
                this.loggedIn = false;
            }

            this.getEnrolment();
            this.getCourses();
            this.getLecturers();
        },
        methods: {
            getEnrolment() {
                let app = this;
                let enrolmentId = app.$route.params.id;
                let token = localStorage.getItem('token');
                axios.get(`/api/enrolments/${enrolmentId}`, {
                    headers: { Authorization: "Bearer " + token }
                })
                .then(function (response) {
                    app.enrolment = response.data.data;
                    console.log(app.enrolment);
                })
                .catch(function (error) {
                    console.log(error);
                });
            },
            getCourses() {
                let app = this;
                let token = localStorage.getItem('token');
                axios.get('/api/courses', {
                    headers: { Authorization: "Bearer " + token}
                })
                .then(function (response) {
                    console.log(response.data);
                    app.courses = response.data.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
            },
            getLecturers() {
                let app = this;
                let token = localStorage.getItem('token');
                axios.get('/api/lecturers', {
                    headers: { Authorization: "Bearer " + token}
                })
                .then(function (response) {
                    console.log(response.data);
                    app.lecturers = response.data.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
            },
            editEnrolment(evt) {
                evt.preventDefault();

                let app = this;
                let enrolmentId = app.$route.params.id;
                let token = localStorage.getItem('token');
                axios.put(`/api/enrolments/${enrolmentId}`, {
                    course_id: app.enrolment.course_id,
                    lecturer_id: app.enrolment.lecturer_id,
                    date: app.enrolment.date,
                    time: app.enrolment.time,
                    status: app.enrolment.status
                },
                {
                    headers: { Authorization: "Bearer " + token }
                })
                .then(function (response) {
                    app.$router.push('/dashboard/enrolments');
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        }
    }
</script>