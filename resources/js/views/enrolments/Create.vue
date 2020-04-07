<template>
    <div class="body-content">
        <b-row>
            <b-col offset-lg="4" col lg="4">
                <div class="form-header">
                    <h1>Add Enrolment</h1>
                </div>

                <b-form @submit="addEnrolment">
                    <b-form-row>

                        <b-col cols="12">
                            <b-form-group
                              id="course_id"
                              label="Course"
                              label-for="course_id">
                                <b-form-select
                                  id="course_id"
                                  v-model="form.course_id"
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
                                  v-model="form.lecturer_id"
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
                                  v-model="form.date"
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
                                  v-model="form.time"
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
                                  v-model="form.status"
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
                            <b-button type="submit" variant="primary">Add Enrolment</b-button>
                            <router-link :to="{ name: 'enrolmentsIndex' }">
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
        name: 'createEnrolment',
        data() {
            return {
                form: {
                    course_id: '',
                    lecturer_id: '',
                    date: '',
                    time: '',
                    status: ''
                },
                loggedIn: false,
                courses: [],
                lecturers: [],
                status_types: [
                    { id: '1', value: 'interested', text: 'Interested'},
                    { id: '2', value: 'assigned', text: 'Assigned' },
                    { id: '3', value: 'associate', text: 'Associate' },
                    { id: '4', value: 'career_break', text: 'Career Break' }
                ],
                errors: []
            }
        },
        created() {
            if (localStorage.getItem('token')) {
                this.loggedIn = true;
            } else {
                this.loggedIn = false;
                this.$router.push('/');
            }
            this.getCourses();
            this.getLecturers();
        },
        methods: {
            addEnrolment(evt) {
                evt.preventDefault();
                let app = this;
                let token = localStorage.getItem('token');

                axios.post('/api/enrolments', {
                    course_id: app.form.course_id,
                    lecturer_id: app.form.lecturer_id,
                    date: app.form.date,
                    time: app.form.time,
                    status: app.form.status
                }, {
                    headers: { Authorization: "Bearer " + token}
                })
                .then(function(response) {
                    app.$router.push('/dashboard/enrolments');
                })
                .catch(function(error) {
                    console.log(error.response.data);
                    app.errors = error.response.data.errors;
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
            }
        }
    }
</script>