/* jshint esversion: 6 */
import Vue from 'vue'
import App from './App.vue';
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
    if (document.querySelector('div.overlay')) document.querySelector('div.overlay').remove();
    if (!document.querySelector('div.overlay') && window.location.pathname === '/vue-js-project/dashboard.php' || window.location.pathname === '/vue-js-project/dashboard') {
        new Vue({ // eslint-disable-line no-new
            el: '#dashboard',
            components: {App},
            render: (h) => h(App)
        });
    }
    if(sessionStorage.getItem('dark') && sessionStorage.dark === 'true'){
        document.querySelector('div#wrapper').classList.toggle('dark-mode');
        const contents = document.querySelectorAll('div.content');
        for(let i=0; i<contents.length; i++){
            contents[i].classList.toggle('dark-content');
        }
        document.querySelector('body').classList.toggle('body-dark-mode');
    }

});


if (window.location.search === '?login=false') {
    if (performance.navigation.type === 1 || performance.navigation.type === 2) {
        window.location = 'index';
    }
    const msg = document.querySelector(".alert-fail");
    jQuery(msg).slideDown().delay(3000).slideUp();
}

