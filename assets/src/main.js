/* jshint esversion: 6 */
import Vue from 'vue'
import App from './App.vue'
import dashboard from "./components/dashboard.vue";

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
            components: {dashboard},
            render: (h) => h(dashboard)
        })
    }
});

if(window.location.search === '?fail') {
    var msg = document.querySelector(".alert-fail");
    jQuery(msg).slideDown().delay(3000).slideUp();
}


