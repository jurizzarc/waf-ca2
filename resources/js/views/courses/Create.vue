<template>
    <div class="body-content">
        <b-row>
            <b-col offset-lg="3" col lg="6">
                <h1>Add Course</h1>

                <b-form @submit="addCourse">
                    <b-form-row>

                        <b-col col lg="6" sm="12">
                            <b-form-group
                              id="title"
                              label="Title"
                              label-for="title">
                                <b-form-input
                                  id="title"
                                  type="text"
                                  v-model="form.title"
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
                                  v-model="form.code"
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
                                  v-model="form.description"
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
                                  v-model="form.points"
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
                                  v-model="form.level"
                                  required
                                >
                                </b-form-input>
                            </b-form-group>
                        </b-col>

                        <b-button type="submit" variant="primary">Add Course</b-button>

                    </b-form-row>
                </b-form>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: 'createCourse',
        components: {},
        data() {
            return {
                form: {
                    title: '',
                    code: '',
                    description: '',
                    points: '',
                    level: ''
                },
                loggedIn: false,
                errors: []
            }
        },
        computed: {
            codeValid() {
                return this.form.code.length <= 5 && this.form.code.length > 0
            }
        },
        created() {
            if (localStorage.getItem('token')) {
                this.loggedIn = true;
            } else {
                this.loggedIn = false;
                this.$router.push('/');
            }
        },
        methods: {
            addCourse(evt) {
                evt.preventDefault();
                let app = this;
                let token = localStorage.getItem('token');

                axios.post('/api/courses', {
                    title: app.form.title,
                    code: app.form.code,
                    description: app.form.description,
                    points: app.form.points,
                    level: app.form.level
                }, {
                    headers: { Authorization: "Bearer " + token}
                })
                .then(function(response) {
                    app.$router.push('/dashboard/courses');
                })
                .catch(function(error) {
                    console.log(error.response.data);
                    app.errors = error.response.data.errors;
                });
            }
        }
    }
</script>

<style scoped>

</style>