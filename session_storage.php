<?php
session_start();
if(isset($_SESSION['current_user'])) {
    echo '<script name="auth"> sessionStorage.setItem("loggedin", "';
    echo $_SESSION['current_user'];
    echo '");</script>';
}
session_abort();
?>
