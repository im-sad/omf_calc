<?
// Options
$token = "1190955802:AAGPNDXTgdlxJ0ecP_yQ71UjOrw3Wp_SC3Y";
$chatid = "401217255";
$subject = "Заявка из калькулятора";
$to = "sadmrak@gmail.com";
$from = "admin@ohmywedding.ru";


// Сode start here
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if ($_POST) {
  http_response_code(200);

  if (empty($_POST['phone']) || empty($_POST['text']) || empty($_POST['price'])) {
    echo json_encode([
      "sended" => false,
      "title" => "Недостаточно данных",
      "message" => "Вы не заполнили телефон или не выбрали необходимые услуги. Обновите страницу и попробуйте ещё раз."
    ]);

    die();
  }

  // data
  $phone = clearString($_POST['phone']);
  $text = clearString($_POST['text']);
  $price = clearString($_POST['price']);

  $emailText =  "<b>Телефон:</b> " . $phone . "<br /><br /><b>Cумма:</b> " . $price .' ₽' . "<br /><br /><b>Список услуг:</b> <br />" . $text;
  $telegramText = "✅ " . $subject . "\n\n<b>Телефон:</b> " . $phone . "\n" . '<b>Сумма: </b>' . $price .' ₽' . "\n" . '<b>Список услуг:</b> ' . $text;

  telegramMessage($chatid, $telegramText, $token);
  emailMessage($to, $from, $subject, $emailText);

  echo json_encode([
    "sended" => true,
    "title" => "Приняли!",
    "message" => "<p>Мы получили Вашу заявку и передали её менеджерам.</p><p>Скоро свяжемся с Вами :)</p>",
  ]);
} else {
  echo json_encode([
    "sended" => false,
    "title" => "Что-то пошло не так",
    "message" => 'На сервере произошла техническая ошибка. Свяжитесь с нами через почту <a href="mailto:' . $from . '">' . $from . '</a>'
  ]);
}

// Functions
function clearString($st) {
  $clear = strip_tags($st);
  $clear = htmlspecialchars($clear);

  return $clear;
}

function emailMessage($recepient, $sender, $sub, $text) {
  $headers = "MIME-Version: 1.0\r\n";
  $headers.= "Content-type: text/html; charset=UTF-8\r\n";
  $headers.= "From: <" . $sender . ">";

  mail($recepient, $sub, $text, $headers);

  return true;
}

function telegramMessage($chatID, $messaggio, $token) {
  $url = "https://api.telegram.org/bot" . $token . "/sendMessage?chat_id=" . $chatID;
  $url = $url . "&parse_mode=html&text=" . urlencode($messaggio);
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
