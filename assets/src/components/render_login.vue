<script>
    import render_popup from "./render_popup.vue";
    import routes from '../main.js'

    export default {
        data() {
            return {
               // currentRoute: window.location.pathname + window.location.hash
            }
        },
        methods: {
            rise: function () {
                console.log(this.route)
                event.target.classList.add('focus');
                event.target.parentNode.classList.add("focused");
            },
            fall: function () {
                if (event.target.value === '') {
                    event.target.classList.remove('focus');
                    event.target.parentNode.classList.remove("focused");
                }
            },
            popup: function () {
                //window.open('index.html?register', "child", "toolbar=no,scrollbars=no,resizable=no,top=200,left=50%,width=600,height=775,location=no, title=no");
                //window.location.pathname + window.location.hash = '/vue-js-project/index.html#register';
            }
        },
        name: 'render_login'
    }
</script>

<template>
    <div>
        <form action="login" class="login-form" method="post" >
            <h1>Login</h1>

            <div class="txtb">
                <input type="text" name="username_login" pattern="[A-Za-z0-9]+" @focus="rise()" @blur="fall()">
                <span data-placeholder="Username"></span>
            </div>

            <div class="txtb">
                <input type="password" name="password_login"  pattern="[A-Za-z0-9]+" @focus="rise()" @blur="fall()">
                <span data-placeholder="Password"></span>
            </div>
            <input type="submit" class="logbtn" value="Login">

            <div class="bottom-text">
                Don't have account? <button class="regbtn" @click="popup()"><a href="?register">Sign up</a></button>
            </div>
        </form>
    </div>
</template>
