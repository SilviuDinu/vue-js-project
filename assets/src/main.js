/* jshint esversion: 6 */
import Vue from 'vue'
import App from './App.vue'
import render_popup from "./components/render_popup.vue"
import render_login from "./components/render_login.vue"

const NotFound = {template: '<h1 style="text-align: center; margin-top: 10%; font-size: 36px;">404 - Page not found</h1>'};
const routes = {
    '/vue-js-project/': render_login,
    '/vue-js-project/index.html': render_login,
    '/vue-js-project/index': render_login,
    '/vue-js-project/?register': render_popup,
    '/vue-js-project/index.html?register': render_popup,
    '/vue-js-project/index?register': render_popup
};

window.addEventListener('load', function () {
    if (window.location.pathname !== '/vue-js-pro/dashboard.php') {

        new Vue({
            el: '#main',
            data: {
                 currentRoute: window.location.pathname + window.location.hash + window.location.search,
                //currentRoute: window.location.href.replace(/^.*\/\/[^\/]+/, '')
            },
            computed: {
                ViewComponent() {
                    return routes[this.currentRoute] || NotFound;
                }
            },
            // created() {
            //     window.addEventListener('hashchange', function (routes) {
            //         console.log('changed');
            //     });
            // },
            render(h) {
                return h(this.ViewComponent)
            }
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






