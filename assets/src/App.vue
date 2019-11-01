/* jshint esversion: 6 */


<script>
    import Vue from 'vue'
    import render_login from "./components/render_login.vue"
    import navbar from "./components/navbar.vue";
    import dashboard from "./components/dashboard.vue";

    export default {
        data() {
            return {}
        },
        methods: {},
        name: 'App.vue',
        components: {
            dashboard
        }
    }
</script>

<template>
        <dashboard></dashboard>
</template>
