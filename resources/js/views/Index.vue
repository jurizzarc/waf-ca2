<template>
    <b-row>
        <b-col offset-lg="4" col lg="4">
            <h1>College App</h1>

            <b-row>
                <b-col cols="12">
                    <router-link :to="{name: 'login'}">
                        <b-button variant="primary">Log In</b-button>
                    </router-link>
                </b-col>

                <b-col cols="12">
                    <router-link :to="{name: 'register'}">
                        <b-button variant="outline-primary">Register</b-button>
                    </router-link>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    button {
        width: 100%;
        margin-bottom: 20px;
    }
</style>