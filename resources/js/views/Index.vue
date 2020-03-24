<template>
    <div class="vertical-centre">
        <b-container>
            <b-row>
                <b-col offset-lg="4" col lg="4">
                    <div class="app-logo-container">
                        <img src="images/app-logo.png" alt="App Logo">
                    </div>

                    <b-row>
                        <b-col cols="12">
                            <router-link :to="{name: 'login'}">
                                <b-button block variant="primary">Log In</b-button>
                            </router-link>
                        </b-col>

                        <b-col cols="12">
                            <router-link :to="{name: 'register'}">
                                <b-button block variant="outline-primary">Register</b-button>
                            </router-link>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<style scoped>
    .app-logo-container {
        text-align: center;
        margin-bottom: 60px;
    }

    .app-logo-container img {
        width: 250px;
        height: auto;
    }

    button {
        margin-bottom: 15px;
    }

    button.btn {
        font-size: 16px;
        padding: 18px 32px;
        border-radius: 10px;
    }
</style>