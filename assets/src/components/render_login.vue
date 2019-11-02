<script>

    export default {
        data() {
            return {
                counter: 0,
                match: false,
                stars: false
            }

        },
        methods: {
            validatePasswd: function () {
                const firstPasswordField = document.querySelector('form#register input[type=password]').value;
                if (event.target.value && event.target.value !== firstPasswordField) {
                    document.getElementById('message').style.color = 'red';
                    document.getElementById('message').innerHTML = "&#10005; Passwords don't match";
                    this.match = false;
                } else if (event.target.value && event.target.value === firstPasswordField) {
                    document.getElementById('message').style.color = 'green';
                    document.getElementById('message').innerHTML = "&#10003; Perfect match";
                    this.match = true;
                }
            },
            validateSubmit: function () {
                if (this.match === false) {
                    event.preventDefault();
                }
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
                } else if (x.type === "text") {
                    event.target.classList.replace("fa-eye-slash", "fa-eye");
                    x.type = "password";
                }
            },
            easteregg: function () {
                this.counter++;
                if (this.counter >= 3) {
                    event.target.innerHTML = 5 - this.counter + " clicks away. . .";
                }
                if (this.counter === 5) {
                    window.open('./eastereggs/snake.html', "", "width=420,height=500");
                    event.target.innerHTML = "Register";
                    event.target.classList.remove("pulse");
                }
                if (this.counter < 5) event.target.classList.add("pulse");
                if (this.counter >= 5) this.counter = 0;
            },
            toggle: function () {
                if (document.querySelector('input#checkbox:checked')) {
                    this.stars = !this.stars;
                }
            }
        },
        name: 'render_login'
    }
</script>

<template>
    <div>
        <div>
            <div v-if="this.stars" class="stars"></div>
            <div v-if="this.stars" class="twinkling"></div>
        </div>
        <div @click="toggle()" class="theme-switch-wrapper-login">
            <label class="theme-switch login" for="checkbox">
                <input type="checkbox" id="checkbox" />
                <div class="slider round"></div>
            </label>
            <em style="color: #fff">Enable Dark Mode</em>
        </div>
        <div class="flip-card-parent">
            <div class="flip-card-child">
                <div class="flip-card-front">
                    <form id="login" action="login" class="login-form" method="post">
                        <h1>Login</h1>
                        <div class="txtb">
                            <input type="text" name="username_login" pattern="[A-Za-z0-9]+" @focus="rise()"
                                   @blur="fall()">
                            <span data-placeholder="Username"></span>
                        </div>

                        <div class="txtb">
                            <input type="password" name="password_login" pattern="[A-Za-z0-9]+" @focus="rise()"
                                   @blur="fall()">

                            <span data-placeholder="Password"><i class="fa fa-eye" @click="preview()"></i></span>
                        </div>
                        <input type="submit" class="logbtn" value="Login">

                        <div style="font-size: 16px" class="bottom-text">
                            Don't have account?
                            <button class="regbtn" @click="register()"><a style="font-size: 16px" href="#register">Sign
                                up</a></button>
                        </div>
                    </form>
                </div>
                <div class="flip-card-back" style="backface-visibility: hidden">
                    <form id="register" action="register" @submit="validateSubmit()" class="register-form"
                          method="post">
                        <h1 @click="easteregg()" style="cursor: crosshair">Register</h1>
                        <div class="txtb">
                            <input type="text" required name="username_register" pattern="[A-Za-z0-9]+" @focus="rise()"
                                   @blur="fall()">
                            <span data-placeholder="Username"></span>
                        </div>

                        <div class="txtb">
                            <input type="password" required name="password_register" pattern="[A-Za-z0-9]+"
                                   @focus="rise()"
                                   @blur="fall()">
                            <span data-placeholder="Password"></span>
                        </div>

                        <div class="txtb">
                            <input type="password" required name="password_register" pattern="[A-Za-z0-9]+"
                                   @focus="rise()"
                                   @blur="fall()" @keyup="validatePasswd()">
                            <span data-placeholder="Password again"></span>
                            <span id="message"></span>
                        </div>

                        <div class="txtb">
                            <input type="email" required name="email_register" pattern="[A-Za-z0-9-_@.]+"
                                   @focus="rise()"
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
    </div>
</template>

<style>
    @keyframes pulse_animation {
        0% {
            transform: scale(1);
        }
        30% {
            transform: scale(1);
        }
        40% {
            transform: scale(1.25);
            color: red;
        }
        50% {
            transform: scale(1);
        }
        60% {
            transform: scale(1);
        }
        70% {
            transform: scale(1.25);
            color: red;
        }
        80% {
            transform: scale(1);
        }
        100% {
            transform: scale(1);
        }
    }

    .pulse {
        animation-name: pulse_animation;
        animation-duration: 1500ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }

    span#message {
        font-size: 15px;
        display: flex;
    }

    .theme-switch-wrapper-login {
        display: flex;
        align-items: center;
        margin: 20px auto;
        right: 20px;
        position: absolute;
    }
    label.login {
        display: inline-block;
        margin-bottom: 0;
    }
    .dark-content {
        background-color: transparent;
        color: #fff;
    }
</style>
