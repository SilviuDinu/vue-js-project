<?php
session_start();
if(!isset($_SESSION['loggedIn']) && $_SESSION['loggedIn'] !== true) header('Location: index.html');
session_abort();
if (!isset($_POST["username_register"]) && !isset($_POST["password_register"])) {
    header('Location: index.html');
}

if(isset($_POST["username_register"]) && isset($_POST["password_register"])){
    define('ALLOW', true);
    include ('config.php');
    $username_register = $_POST["username_register"];
    $password_register = $_POST["password_register"];
    $email_register = $_POST["email_register"];
    $check_1 = mysqli_query($con, "SELECT username FROM users WHERE username='$username_register' and password='$password_register'");
    if($check_1->num_rows === 0) {
        $password = $mysqli->real_escape_string($password_register);
        mysqli_query($con, "INSERT INTO users (username, password, email) VALUES ('$username_register', '$password', '$email_register')");
    }
    header('Location: index.html');
}
