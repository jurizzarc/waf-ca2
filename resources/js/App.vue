<!-- PARENT COMPONENT -->
<template>
    <div>
        <Navbar v-if="!$route.meta.hideNavigation"/>
        <b-container>
            <router-view/>
        </b-container>
    </div>
</template>

<script>
    import Navbar from './components/Navbar';

    export default {
        name: 'app',
        components: { Navbar }
    }
</script>