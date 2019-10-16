<script>
    export default {
        data() {
            return {}
        },
        methods: {
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
            successAlert: function () {
                alert('Cont creat');
            }
        },
        name: 'render_popup'
    }

</script>

<template>
    <div>
        <form action="register.php" class="login-form" method="post">
            <h1>Register</h1>
            <div class="txtb">
                <input type="text" required name="username_register" pattern="[A-Za-z0-9]+" @focus="rise()" @blur="fall()">
                <span data-placeholder="Username"></span>
            </div>

            <div class="txtb">
                <input type="password" required name="password_register" pattern="[A-Za-z0-9]+" @focus="rise()" @blur="fall()">
                <span data-placeholder="Password"></span>
            </div>

            <div class="txtb">
                <input type="email" required name="email_register" pattern="[A-Za-z0-9-_@.]+"  @focus="rise()" @blur="fall()">
                <span data-placeholder="Email"></span>
            </div>
            <input type="submit" class="logbtn" value="Register">
        </form>
    </div>
</template>

<style scoped>

</style>