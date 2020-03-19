<template>
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
        </b-col>
    </b-row>
</template>

<script>
    export default {
        name: 'showLecturer',
        data() {
            return {
                lecturer: {}
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
                app.lecturer = response.data.data;
                console.log(app.lecturer);
            })
            .catch(function (error) {
                console.log(error)
            });
        }
    }
</script>

<style scoped>

</style>