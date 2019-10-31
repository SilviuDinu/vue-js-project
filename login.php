<?php
session_start();
if (!isset($_SESSION['loggedIn']) && $_SESSION['loggedIn'] !== true) header('Location: index');
if (isset($_SESSION['failed'])) {
    unset($_SESSION['failed']);
}
session_abort();
if (!isset($_POST["username_login"]) && !isset($_POST["password_login"])) {
    header('Location: index');
}
if (isset($_POST["username_login"]) && isset($_POST["password_login"])) {
    define('ALLOW', true);
    include('config.php');
    $username_login = $_POST['username_login'];
    $password_login = $_POST['password_login'];
    $check = mysqli_query($con, "SELECT username from users where username='$username_login' and password='$password_login'");
    if ($check->num_rows !== 0) {
        $_SESSION['loggedIn'] = true;
        $_SESSION['failed'] = false;
        header('Location: dashboard');
        //set the session on the login page
    } else if ($check->num_rows === 0) {
        $_SESSION['loggedIn'] = false;
        $_SESSION['failed'] = true;
        echo "<script>document.cookie = 'failed=1';</script>";
        header('Location: index?login=false');
    }
}

