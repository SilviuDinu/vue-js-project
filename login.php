<?php
session_start();
if (!isset($_SESSION['loggedIn']) && $_SESSION['loggedIn'] !== true) header('Location: index.html');
session_abort();
if (!isset($_POST["username_login"]) && !isset($_POST["password_login"])) {
    header('Location: index.html');
}

if (isset($_POST["username_login"]) && isset($_POST["password_login"])) {
    define('ALLOW', true);
    include('config.php');
    $username_login = $_POST['username_login'];
    $password_login = $_POST['password_login'];
    $check = mysqli_query($con, "SELECT username from users where username='$username_login' and password='$password_login'");
    if ($check->num_rows !== 0) {
        $_SESSION['loggedIn'] = true;
        header('Location: dashboard.php');
        //set the session on the login page
    } else {
        $_SESSION['loggedIn'] = false;
        echo 'gresit';
    }

}