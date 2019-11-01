/* jshint esversion: 6 */
import Vue from 'vue'
import App from './App.vue';
import navbar from "./components/navbar.vue";
import dashboard from "./components/dashboard.vue";
import render_login from "./components/render_login.vue";


window.addEventListener('load', function () {
    if (document.querySelector('div.overlay')) document.querySelector('div.overlay').remove();
    if (window.location.pathname !== '/vue-js-pro/dashboard.php') {
        new Vue({ // eslint-disable-line no-new
            el: '#main',
            components: {render_login},
            render: (h) => h(render_login)
        });
    }
});

window.addEventListener('load', function () {
    new Vue({ // eslint-disable-line no-new
        el: '#nav',
        components: {navbar},
        render: (h) => h(navbar)
    });
});

window.addEventListener('load', function () {
    if (document.querySelector('div.overlay')) document.querySelector('div.overlay').remove();
    if (!document.querySelector('div.overlay') && window.location.pathname === '/vue-js-project/dashboard.php' || window.location.pathname === '/vue-js-project/dashboard') {
        new Vue({ // eslint-disable-line no-new
            el: '#app',
            components: {App},
            render: (h) => h(App)
        });
    }
});


if (window.location.search === '?login=false') {
    if (performance.navigation.type === 1 || performance.navigation.type === 2) {
        window.location = 'index';
    }
    const msg = document.querySelector(".alert-fail");
    jQuery(msg).slideDown().delay(3000).slideUp();
}

