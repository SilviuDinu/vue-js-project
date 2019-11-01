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
                    <li><a href="dashboard">Home</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Contact</a></li>
                    <li @click="account()" class="greeting">
                        <img src="assets/img/img_avatar.png" alt="Avatar" class="avatar">Hello, {{ this.name }}
                    </li>
                    <li>
                        <a @click="logout()" class="btn btn-small btn-cyan logout">Logout</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div style="width: 100%">
            <div id="wrapper">
                <div id="home">
                    <h1 @click="account">Home Route</h1>
                    <div class="container">
                        <div class="content" v-for="n in 10"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                    </div>
                </div>
                <div id="account" v-show="account">
                    <h1 @click="account">Account settings</h1>
                    <div class="container">
                        <div class="content" v-for="n in 6"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
        mounted() {
            this.$root.$emit('dashboard', () => {
                this.account();
            })
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
            account: function () {
                document.getElementById("home").style.display = 'none';
            }
        },
        name: 'dashboard'
    }
</script>


<style scoped>
    h1 {
        text-align: center;
        margin-bottom: 50px;
    }

    div.container {
        width: 100%;
    }

    div.content {
        margin: 5px;
        padding: 25px;
        display: inline-block;
        border: 2px solid;
        width: 49%;
    }

    div.content:hover {
        background-color: rgba(217, 223, 254, 0.2);
    }

    p {
        text-align: center;
    }

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
