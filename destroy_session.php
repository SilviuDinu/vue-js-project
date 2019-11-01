<?php
session_start();
if (!isset($_POST["username_login"]) && !isset($_POST["password_login"])) {
    header('Location: index');
}
if(!defined('ALLOW')){
    header('Location: index');
}

if (isset($_SESSION['loggedIn'])) {
    session_destroy();
    echo '<script>if(sessionStorage.getItem("loggedin")) sessionStorage.removeItem("loggedin");</script>';
}

header('Location: index');
?>
