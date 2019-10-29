<script>

    export default {
        data() {
            return {
                getCurrentRoute: window.location.pathname + window.location.hash + window.location.search
            }
        },
        methods: {
            validation: function() {

                var loginData = {
                    "username": document.querySelector('form#login input[type=text]').value,
                    "password": document.querySelector('form#login input[type=password]').value,
                };
                console.log(loginData);
                console.log(loginData.username);

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", window.location.origin + "/vue-js-project/login");
                xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                xhttp.send(JSON.stringify(loginData));
            },
            register: function () {
                const card = document.querySelector('div.flip-card-child');
                card.classList.toggle('flipped');
                const front = document.querySelector('div.flip-card-front');
                const back = document.querySelector('div.flip-card-back');
                if (back.style.backfaceVisibility === 'hidden') {
                    back.style.backfaceVisibility = 'visible';
                } else if (back.style.backfaceVisibility === 'visible') {
                    back.style.backfaceVisibility = 'hidden';
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
            preview: function () {
                const x = event.target.parentNode.previousElementSibling;
                if (x.type === "password") {
                    event.target.classList.replace("fa-eye", "fa-eye-slash");
                    x.type = "text";
                } else if(x.type === "text") {
                    event.target.classList.replace("fa-eye-slash", "fa-eye");
                    x.type = "password";
                }
            }
        },
        name: 'render_login'
    }
</script>

<template>
    <div class="flip-card-parent">
        <div class="flip-card-child">
            <div class="flip-card-front">
                <form id="login" action="login" class="login-form" method="post">
                    <h1>Login</h1>
                    <div class="txtb">
                        <input type="text" name="username_login" pattern="[A-Za-z0-9]+" @focus="rise()" @blur="fall()">
                        <span data-placeholder="Username"></span>
                    </div>

                    <div class="txtb">
                        <input type="password" name="password_login" pattern="[A-Za-z0-9]+" @focus="rise()"
                               @blur="fall()">

                        <span data-placeholder="Password"><i class="fa fa-eye" @click="preview()"></i></span>
                    </div>
                    <input type="submit" class="logbtn" @click.prevent="validation()" value="Login">

                    <div style="font-size: 16px" class="bottom-text">
                        Don't have account?
                        <button class="regbtn" @click="register()"><a style="font-size: 16px" href="#register">Sign
                            up</a></button>
                    </div>
                </form>
            </div>
            <div class="flip-card-back" style="backface-visibility: hidden">
                <form id="register" action="register" class="register-form" method="post">
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
                    <div class="bottom-text">
                        <button class="regbtn" @click="register()"><a style="font-size: 16px" href="#login">&larr;
                            Back to Login</a></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
