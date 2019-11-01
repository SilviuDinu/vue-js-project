<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
            <div class="navbar-brand logo">
                <img src="assets/img/logo.jpg" @click="easteregg" alt="logo" style="width:60px;">
            </div>
            <button class="navbar-toggler ml-auto navbar-toggler-right" type="button" data-toggle="collapse"
                    data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                    aria-label="Toggle navigation">

                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-dashboard" id="exampleAccordion">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Contact</a></li>
                    <li class="greeting"><img src="assets/img/img_avatar.png" alt="Avatar" class="avatar">Hello, {{
                        this.name }}
                    </li>
                    <li>
                        <a @click="logout()" class="btn btn-small btn-cyan logout">Logout</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                counter: 0,
                name: sessionStorage.getItem('loggedin')
            }
        },
        methods: {
            logout: function () {
                sessionStorage.removeItem("loggedin");
                window.location.pathname = '/vue-js-project/destroy_session.php';
            },
            easteregg: function () {
                this.counter++;
                if (this.counter === 5) {
                    window.open('./eastereggs/snake.html', "", "width=420,height=500");
                    event.target.classList.remove("pulse-logo");
                }
                if (this.counter < 5) event.target.classList.add("pulse-logo");
                if (this.counter >= 5) this.counter = 0;
            },
            cookie: function (name) {
                var nameEQ = name + "=";
                var ca = document.cookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
                }
                return null;
            }
        },
        name: 'navbar'
    }
</script>

<style scoped>
    .btn {
        border: 2px solid #4682B4;
        margin-bottom: 0;
        font-weight: 500;
    }

    .logout {
        position: fixed;
        right: 25px;
        min-width: 115px;
        max-height: 55px;
    }

    nav {
        position: fixed;
    }

    .navbar-toggler {
        border: 1px solid;
    }

    @keyframes pulse_logo_animation {
        0% {
            transform: scale(1);
        }
        30% {
            transform: scale(1);
        }
        40% {
            transform: scale(1.25);
        }
        50% {
            transform: scale(1);
        }
        60% {
            transform: scale(1);
        }
        70% {
            transform: scale(1.25);
        }
        80% {
            transform: scale(1);
        }
        100% {
            transform: scale(1);
        }
    }

    .pulse-logo {
        animation-name: pulse_logo_animation;
        animation-duration: 1500ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
</style>
