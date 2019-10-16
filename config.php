<?php
session_start();
if(!defined('ALLOW')){
    header('Location: index.html');
}
try {
    $mysqli = new mysqli("localhost", "root", "");
} catch (\Exception $e) {
    echo $e->getMessage(), PHP_EOL;
}
if ($mysqli->select_db('trial_1') === false) {
    $sql = "CREATE DATABASE trial_1";
    if ($mysqli->query($sql) === TRUE) {
        echo "<span id='success'>Database <b>trial_1</b> created successfully</span>";
        //echo "</script></head></html>";
    } else {
        echo "Error creating database: " . $mysqli->error;
    }
}
$con = mysqli_connect("localhost", "root", "", "trial_1");
if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
$trial = mysqli_query($con, "SELECT * FROM users");

if (!$trial){
    echo "<link rel=\"stylesheet\" href=\"./assets/css/style.css\">
<h1 style=\"text-align: center; margin-top: 10%; font-size: 36px;\">Created table <b>users</b> </h1>";
    mysqli_query($con, "CREATE TABLE users (username varchar(50), password varchar(50), email varchar(50))");
}

