<!-- PARENT COMPONENT -->
<template>
    <div>
        <Navbar/>
        <b-container>
            <router-view/>
        </b-container>
    </div>
</template>

<script>
    import Navbar from './components/Navbar';

    export default {
        name: 'app',
        components: { Navbar },
        data() {
            return {}
        }
    }
</script>

<style>
    .row {
        padding-top: 90px;
    }
</style>