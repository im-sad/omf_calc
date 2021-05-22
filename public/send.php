<?php
// Options
$token = "1190955802:AAGPNDXTgdlxJ0ecP_yQ71UjOrw3Wp_SC3Y";
$chatid = "401217255";
$subject = "Заявка из калькулятора";
$to = "sadmrak@gmail.com";
$from = "im-sad@ya.ru";

// Code
header('Access-Control-Allow-Origin: *');
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['phone']) && empty($_POST['text'])) die();

if ($_POST) {
  http_response_code(200);

  // data
  $phone = $_POST['phone'];
  $text = $_POST['text']
  $msg =  "Телефон: " . $phone . "<br /><br />Список услуг: <br />" . $text;

  // Headers
  $headers = "MIME-Version: 1.0\r\n";
  $headers.= "Content-type: text/html; charset=UTF-8\r\n";
  $headers.= "From: <" . $from . ">";

  sendMessage($chatid, "HELLO", $token);
  mail($to, $subject, $msg, $headers);

  // echo json_encode( $_POST );
  echojson_encode(array(
    "sent" => true
  ));
} else {
  echojson_encode(["sent" => false, "message" => "Something went wrong"]);
}


function sendMessage($chatID, $messaggio, $token) {
  $url = "https://api.telegram.org/bot" . $token . "/sendMessage?chat_id=" . $chatID;
  $url = $url . "&text=" . urlencode($messaggio);
  $ch = curl_init();
  $optArray = array(
          CURLOPT_URL => $url,
          CURLOPT_RETURNTRANSFER => true
  );
  curl_setopt_array($ch, $optArray);
  $result = curl_exec($ch);
  curl_close($ch);

  return $result;
}

?>