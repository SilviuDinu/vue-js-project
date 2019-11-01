<template>
    <div>
        <div id="wrapper">
            <h1>Fixed Top Navigation Bar</h1>
            <h2>Scroll this page to see the effect</h2>
            <h2>The navigation bar will stay at the top of the page while scrolling</h2>

            <p v-for="n in 20">Some text some text some text some text..</p>

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        methods: {

        },
        name: 'dashboard'
    }
</script>

<style scoped>

</style>
