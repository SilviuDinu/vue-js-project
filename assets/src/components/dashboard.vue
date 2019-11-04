<template>
    <div>
        <div>
            <div v-if="this.stars" class="stars"></div>
            <div v-if="this.stars" class="twinkling"></div>
        </div>
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
                    <li @click.prevent="renderPage()"><a href="#home">Home</a></li>
                    <li><a @click.prevent="renderPage()" href="#news">News</a></li>
                    <li><a @click.prevent="renderPage()" href="#contact">Contact</a></li>
                    <li><a @click="toggle()" class="toggle-item" href="#"><div class="theme-switch-wrapper">
                        <label class="theme-switch" for="checkbox">
                            <input type="checkbox" id="checkbox" />
                            <div class="slider round"></div>
                        </label>
                        <em>Enable Dark Mode</em>
                    </div></a></li>
                    <li @click="renderPage()" class="greeting">
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
                <div id="home" v-show="this.home">
                    <h1>Home Route</h1>
                    <div class="container">
                        <div class="content" v-for="n in 10"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                    </div>
                </div>
                <div id="account" v-show="this.acc">
                    <h1>Account settings</h1>
                    <div class="container">
                        <div class="content" v-for="n in 6"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                    </div>
                </div>
                <div id="news" v-show="this.news">
                    <h1>Feed</h1>
                    <div class="container">
                        <div class="content" v-for="n in 8"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                    </div>
                </div>
                <div id="contact" v-show="this.contact">
                    <h1>Contact</h1>
                    <div class="container">
                        <div class="content" v-for="n in 4"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
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
                name: sessionStorage.getItem('loggedin'),
                acc: false,
                home: true,
                news: false,
                contact: false,
                stars: false
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
            renderPage: function () {
                const items = document.querySelectorAll('ul.navbar-dashboard > li > a');
                if (event.target.getAttribute('href') === '#home') {
                    if (this.home === false) {
                        this.home = !this.home;
                        this.acc = this.news = this.contact = false;
                    }
                    for (let i = 0; i < items.length; i++) {
                        if (items[i].classList.contains('active')) items[i].classList.remove('active');
                    }
                    event.target.classList.toggle('active');
                }
                if (event.target.getAttribute('href') === '#news') {
                    if (this.news === false) {
                        this.news = !this.news;
                        this.acc = this.home = this.contact = false;
                    }
                    for (let i = 0; i < items.length; i++) {
                        if (items[i].classList.contains('active')) items[i].classList.remove('active');
                    }
                    event.target.classList.toggle('active');
                }
                if (event.target.getAttribute('href') === '#contact') {
                    if (this.contact === false) {
                        this.contact = !this.contact;
                        this.acc = this.news = this.home = false;
                    }
                    for (let i = 0; i < items.length; i++) {
                        if (items[i].classList.contains('active')) items[i].classList.remove('active');
                    }
                    event.target.classList.toggle('active');
                }
                if (event.target.classList.contains('greeting') || event.target.classList.contains('avatar')) {
                    if (this.acc === false) {
                        this.acc = !this.acc;
                        this.home = this.news = this.contact = false;
                    }
                    for (let i = 0; i < items.length; i++) {
                        if (items[i].classList.contains('active')) items[i].classList.remove('active');
                    }
                }
            },
            toggle: function () {
                if(document.querySelector('input#checkbox:checked')) {
                    this.stars = !this.stars;
                    document.querySelector('div#wrapper').classList.toggle('dark-mode');
                    const contents = document.querySelectorAll('div.content');
                    for(let i=0; i<contents.length; i++){
                        contents[i].classList.toggle('dark-content');
                    }
                    document.querySelector('body').classList.toggle('body-dark-mode');
                    document.querySelector('body').classList.toggle('default');
                }
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

    .theme-switch-wrapper {
        display: flex;
        align-items: center;
        margin: -5px auto;
    }
    label {
        display: inline-block;
        margin-bottom: 0;
    }
    .dark-mode{
        color: #fff;
    }

    div.content:hover {
        background-color: rgba(217, 223, 254, 0.2);
    }

    .dark-content{
        background-color: rgba(255,255,255,0.05);
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

    @media (max-width: 1024px) {
        div.content{
            width: 100%;
        }
    }

    .pulse-logo {
        animation-name: pulse_logo_animation;
        animation-duration: 1500ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
</style>
