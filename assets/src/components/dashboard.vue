<template>
    <div>
        <button class="logbtn"  @click.prevent="logout()">Logout</button>

    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {
            logout: function () {
                window.location.pathname = '/trial_2/destroy_session.php';
            }

        },
        name: 'dashboard'
    }
</script>

<style scoped>

</style>