<template>
    <b-navbar toggleable="md" type="dark" variant="dark" fixed="top">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

            <b-navbar-nav>
                <b-nav-item :to="{ name: 'index' }">Home</b-nav-item>
                <b-nav-item-dropdown text="Courses" left>
                    <b-dropdown-item :to="{ name: 'coursesIndex' }">View All</b-dropdown-item>
                    <b-dropdown-item :to="{ name: 'createCourse' }">Create</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown text="Lecturers" left>
                    <b-dropdown-item :to="{ name: 'lecturersIndex' }">View All</b-dropdown-item>
                    <b-dropdown-item :to="{ name: 'createLecturer' }">Create</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown text="Enrolments" left>
                    <b-dropdown-item to="/">View All</b-dropdown-item>
                    <b-dropdown-item to="/">Create</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
                <b-nav-item @click="logout">Log Out</b-nav-item>
            </b-navbar-nav>

        </b-collapse>
    </b-navbar> 
</template>

<script>
    export default {
        name: 'navbar',
        components: {},
        data() {
            return {}
        },
        methods: {
            logout(evt) {
                evt.preventDefault();
                localStorage.removeItem('token');
                console.log("Logged out");
                // Redirect to this url
                this.$router.push('/');
            }
        }
    }
</script>

<style scoped>

</style>