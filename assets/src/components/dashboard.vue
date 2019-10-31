<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                    data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-dashboard" id="exampleAccordion">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Contact</a></li>
                    <li style="float: right;">
                        <a @click="logout()" class="btn btn-small btn-cyan logout">Logout</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div id="wrapper">
            <h1>Fixed Top Navigation Bar</h1>
            <h2>Scroll this page to see the effect</h2>
            <h2>The navigation bar will stay at the top of the page while scrolling</h2>

            <p>Some text some text some text some text..</p>
            <p>Some text some text some text some text..</p>
            <p>Some text some text some text some text..</p>
            <p>Some text some text some text some text..</p>
            <p>Some text some text some text some text..</p>
            <p>Some text some text some text some text..</p>
            <p>Some text some text some text some text..</p>
            <p>Some text some text some text some text..</p>
            <p>Some text some text some text some text..</p>
            <p>Some text some text some text some text..</p>
            <p>Some text some text some text some text..</p>
            <p>Some text some text some text some text..</p>
            <p>Some text some text some text some text..</p>
            <p>Some text some text some text some text..</p>
            <p>Some text some text some text some text..</p>
            <p>Some text some text some text some text..</p>
            <p>Some text some text some text some text..</p>
            <p>Some text some text some text some text..</p>
            <p>Some text some text some text some text..</p>
            <p>Some text some text some text some text..</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {
            logout: function () {
                window.location.pathname = '/vue-js-project/destroy_session.php';
            }
        },
        name: 'dashboard'
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
</style>
