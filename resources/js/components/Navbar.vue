<template>
    <b-navbar toggleable="md" fixed="top">
        <b-navbar-brand :to="{ name: 'index' }">
            <h4>College App</h4>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

            <b-navbar-nav class="ml-auto">
                <b-nav-item-dropdown text="Courses" left>
                    <b-dropdown-item :to="{ name: 'coursesIndex' }">View All</b-dropdown-item>
                    <b-dropdown-item :to="{ name: 'createCourse' }">Create</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown text="Lecturers" left>
                    <b-dropdown-item :to="{ name: 'lecturersIndex' }">View All</b-dropdown-item>
                    <b-dropdown-item :to="{ name: 'createLecturer' }">Create</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown text="Enrolments" left>
                    <b-dropdown-item :to="{ name: 'enrolmentsIndex' }">View All</b-dropdown-item>
                    <b-dropdown-item :to="{ name: 'createEnrolment' }">Create</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item @click="logout">
                    <span>Sign Out</span>
                </b-nav-item>
            </b-navbar-nav>

        </b-collapse>
    </b-navbar> 
</template>

<script>
    export default {
        name: 'navbar',
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
    img {
        height: 75px;
        width: auto;
    }
</style>