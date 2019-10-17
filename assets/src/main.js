/* jshint esversion: 6 */
import Vue from 'vue'
import App from './App.vue'
import render_login from "./components/render_login.vue"

const NotFound = {template: '<h1 style="text-align: center; margin-top: 10%; font-size: 36px;">404 - Page not found</h1>'};

window.addEventListener('load', function () {
    if (window.location.pathname !== '/vue-js-pro/dashboard.php') {
        new Vue({ // eslint-disable-line no-new
            el: '#main',
            components: {App},
            render: (h) => h(App)
        })
    }
});

window.addEventListener('load', function () {
    if (window.location.pathname === '/vue-js-project/dashboard.php' || window.location.pathname === '/vue-js-project/dashboard') {
        new Vue({ // eslint-disable-line no-new
            el: '#app',
            components: {App},
            render: (h) => h(App)
        })
    }
});






