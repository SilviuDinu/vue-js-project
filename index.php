<?php
session_start();
if (isset($_SESSION['failed']) && $_SESSION['failed'] === true && isset($_SESSION['loggedIn']) && $_SESSION['loggedIn'] !== true) {
    echo '<script name="login_fail_routine" src="./assets/js/build.js"></script> <div class="alert-fail" style="display: none">
            <strong>Oops!</strong> Wrong Username or Password</a>.
        </div>';
}
$_SESSION['failed'] = false;
$_SESSION['loggedIn'] = false;
unset($_SESSION['failed']);
unset($_SESSION['loggedIn']);
session_abort();
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="http://code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script>
    <script src="assets/js/build.js"></script>
    <link rel="stylesheet" href="./assets/css/style.css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700,900|Ubuntu:400,500,700" rel="stylesheet">
    <script src="http://use.fontawesome.com/2f39677d1c.js"></script>
</head>
<body>
<div class="loading">
    <h2>
        <pre>  Loading...</pre>
    </h2>
    <div class="loader"></div>
</div>
<div id="main"></div>
</body>
</html>

