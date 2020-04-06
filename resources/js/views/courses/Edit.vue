<template>
    <div class="body-content">
        <b-row>
            <b-col offset-lg="3" col lg="6">
                <h1>Edit Course</h1>

                <b-form @submit="editCourse">
                    <b-form-row>

                        <b-col col lg="6" sm="12">
                            <b-form-group
                              id="title"
                              label="Title"
                              label-for="title">
                                <b-form-input
                                  id="title"
                                  type="text"
                                  v-model="course.title"
                                  required
                                >
                                </b-form-input>
                            </b-form-group>
                        </b-col>

                        <b-col col lg="6" sm="12">
                            <b-form-group
                              id="code"
                              label="Code"
                              label-for="code">
                                <b-form-input
                                  id="code"
                                  type="text"
                                  v-model="course.code"
                                  required
                                >
                                </b-form-input>
                            </b-form-group>
                        </b-col>

                        <b-col cols="12">
                            <b-form-group
                              id="description"
                              label="Description"
                              label-for="description"
                            >
                                <b-form-textarea
                                  id="description"
                                  v-model="course.description"
                                >
                                </b-form-textarea>
                            </b-form-group>
                        </b-col>

                        <b-col col lg="6" sm="12">
                            <b-form-group
                              id="points"
                              label="Points"
                              label-for="points">
                                <b-form-input
                                  id="points"
                                  type="text"
                                  v-model="course.points"
                                  required
                                >
                                </b-form-input>
                            </b-form-group>
                        </b-col>

                        <b-col col lg="6" sm="12">
                            <b-form-group
                              id="level"
                              label="Level"
                              label-for="level">
                                <b-form-input
                                  id="level"
                                  type="text"
                                  v-model="course.level"
                                  required
                                >
                                </b-form-input>
                            </b-form-group>
                        </b-col>

                        <b-button type="submit" variant="primary">Edit Course</b-button>

                    </b-form-row>
                </b-form>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: 'editCourse',
        components: {},
        data() {
            return {
                course: {},
                loggedIn: false
            }
        },
        created() {
            if (localStorage.getItem('token')) {
                this.loggedIn = true;
            } else {
                this.loggedIn = false;
            }

            let app = this;
            let courseId = app.$route.params.id;
            let token = localStorage.getItem('token');
            axios.get(`/api/courses/${courseId}`, {
                headers: { Authorization: "Bearer " + token }
            })
            .then(function (response) {
                app.course = response.data.data[0];
                console.log(app.course);
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        methods: {
            editCourse(evt) {
                evt.preventDefault();

                let app = this;
                let courseId = app.$route.params.id;
                let token = localStorage.getItem('token');
                axios.put(`/api/courses/${courseId}`, {
                    title: app.course.title,
                    code: app.course.code,
                    description: app.course.description,
                    points: app.course.points,
                    level: app.course.level
                },
                {
                    headers: { Authorization: "Bearer " + token }
                })
                .then(function (response) {
                    app.$router.push('/dashboard/courses');
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        }
    }
</script>