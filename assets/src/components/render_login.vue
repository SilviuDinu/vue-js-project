<script>

    export default {
        data() {
            return {
                getCurrentRoute: window.location.pathname + window.location.hash + window.location.search
            }
        },
        methods: {
            register: function(){
                const loginForm = document.querySelector('form#login');
                const regForm = document.querySelector('form#register');
                if(loginForm.style.display === '' || loginForm.style.display === 'block'){
                    jQuery( loginForm ).fadeOut(600);
                    jQuery( regForm ).fadeIn(600);
                }

            },
            backToLogin: function(){
                const loginForm = document.querySelector('form#login');
                const regForm = document.querySelector('form#register');
                if(loginForm.style.display === 'none'){
                    jQuery( regForm ).fadeOut(600);
                    jQuery( loginForm ).fadeIn(600);
                }
            },
            rise: function () {
                event.target.classList.add('focus');
                event.target.parentNode.classList.add("focused");
            },
            fall: function () {
                if (event.target.value === '') {
                    event.target.classList.remove('focus');
                    event.target.parentNode.classList.remove("focused");
                }
            },
        },
        name: 'render_login'
    }
</script>

<template>
    <div>
        <form id="login" action="login" class="login-form" method="post">
            <h1>Login</h1>
            <div class="txtb">
                <input type="text" name="username_login" pattern="[A-Za-z0-9]+" @focus="rise()" @blur="fall()">
                <span data-placeholder="Username"></span>
            </div>

            <div class="txtb">
                <input type="password" name="password_login" pattern="[A-Za-z0-9]+" @focus="rise()" @blur="fall()">
                <span data-placeholder="Password"></span>
            </div>
            <input type="submit" class="logbtn" value="Login">

            <div style="font-size: 16px" class="bottom-text">
                Don't have account?
                <button class="regbtn" @click="register()"><a style="font-size: 16px" href="#register">Sign up</a></button>
            </div>
        </form>
        <form id="register" action="register" class="register-form" method="post" style="display: none">
            <h1>Register</h1>
            <div class="txtb">
                <input type="text" required name="username_register" pattern="[A-Za-z0-9]+" @focus="rise()"
                       @blur="fall()">
                <span data-placeholder="Username"></span>
            </div>

            <div class="txtb">
                <input type="password" required name="password_register" pattern="[A-Za-z0-9]+" @focus="rise()"
                       @blur="fall()">
                <span data-placeholder="Password"></span>
            </div>

            <div class="txtb">
                <input type="email" required name="email_register" pattern="[A-Za-z0-9-_@.]+" @focus="rise()"
                       @blur="fall()">
                <span data-placeholder="Email"></span>
            </div>
            <input type="submit" class="logbtn" value="Register">
            <div class="bottom-text"><button class="regbtn" @click="backToLogin()"><a style="font-size: 16px" href="#login">&larr; Back to Login</a></button></div>
        </form>
    </div>
</template>
