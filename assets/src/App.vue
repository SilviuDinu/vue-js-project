/* jshint esversion: 6 */


<script>
    import Vue from 'vue'
    import render_popup from "./components/render_popup.vue"
    import render_login from "./components/render_login.vue"
    import dashboard from "./components/dashboard.vue"

    export default {
        data() {
            return {}
        },
        methods: {
        },
        name: 'App.vue',
        components: {
            dashboard
        }
    }
</script>

<template>
        <dashboard></dashboard>
<!--        <render_popup v-show="function() {-->
<!--        console.log(this.path('/'));-->
<!--          if(window.location.search === '?register') {-->
<!--          console.log('sss');-->
<!--          return true;-->
<!--          }-->
<!--        }"></render_popup>-->
</template>