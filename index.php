<?php
session_start();
if (isset($_SESSION['failed']) && $_SESSION['failed'] === true) {
    echo '<script name="login_fail_routine" src="./assets/js/build.js"></script> <div class="alert-fail" style="display: none">
            <strong>Oops!</strong> Wrong Username or Password</a>.
        </div>';
}
$_SESSION['failed'] = false;
unset($_SESSION['failed']);
session_abort();
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="utf-8">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="assets/js/build.js"></script>
    <link rel="stylesheet" href="./assets/css/style.css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700,900|Ubuntu:400,500,700" rel="stylesheet">
</head>
<body>
<div id="main"></div>
</body>
</html>

