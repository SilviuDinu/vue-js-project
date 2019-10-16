/* jshint esversion: 6 */
import Vue from 'vue'
import App from './App.vue'
import render_popup from "./components/render_popup.vue"
import render_login from "./components/render_login.vue"

const NotFound = {template: '<h1 style="text-align: center; margin-top: 10%; font-size: 36px;">404 - Page not found</h1>'};
const routes = {
    '/trial_2/index.html': render_login,
    '/trial_2/index.html?register': render_popup
};

window.addEventListener('load', function () {
  if(window.location.pathname !== '/trial_2/dashboard.php') {
    new Vue({
      el: '#main',
      data: {
        currentRoute: window.location.pathname + window.location.search
      },
      computed: {
        ViewComponent() {
          return routes[this.currentRoute] || NotFound
        }
      },
      render(h) {
        return h(this.ViewComponent)
      }
    })
  }
});

window.addEventListener('load', function () {
  if(window.location.pathname === '/trial_2/dashboard.php') {
    new Vue({ // eslint-disable-line no-new
      el: '#app',
      components: {App},
      render: (h) => h(App)
    })
  }
});






