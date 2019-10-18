<script>

    export default {
        data() {
            return {
                getCurrentRoute: window.location.pathname + window.location.hash + window.location.search
            }
        },
        methods: {
            register: function () {
                const card = document.querySelector('div.flip-card-child');
                const front = document.querySelector('div.flip-card-front');
                card.classList.toggle('flipped');
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
    <div class="flip-card-parent">
        <div class="flip-card-child">
            <div class="flip-card-front">
                <form id="login" action="login" class="login-form" method="post" >
                    <h1>Login</h1>
                    <div class="txtb">
                        <input type="text" name="username_login" pattern="[A-Za-z0-9]+" @focus="rise()" @blur="fall()">
                        <span data-placeholder="Username"></span>
                    </div>

                    <div class="txtb">
                        <input type="password" name="password_login" pattern="[A-Za-z0-9]+" @focus="rise()"
                               @blur="fall()">
                        <span data-placeholder="Password"></span>
                    </div>
                    <input type="submit" class="logbtn" value="Login">

                    <div style="font-size: 16px" class="bottom-text">
                        Don't have account?
                        <button class="regbtn" @click="register()"><a style="font-size: 16px" href="#register">Sign
                            up</a></button>
                    </div>
                </form>
            </div>
            <div class="flip-card-back">
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
