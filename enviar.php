<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function reply(int $status, array $payload): never
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_INVALID_UTF8_SUBSTITUTE);
    exit;
}

$config = require __DIR__ . '/contact-config.php';
$recipient = filter_var($config['recipient'], FILTER_VALIDATE_EMAIL);
$sender = filter_var($config['sender'], FILTER_VALIDATE_EMAIL);
if (!$recipient || !$sender) {
    reply(503, ['message' => 'O formulário está temporariamente indisponível.']);
}

$method = $_SERVER['REQUEST_METHOD'];
if (!in_array($method, ['GET', 'POST'], true)) {
    header('Allow: GET, POST');
    reply(405, ['message' => 'Método inválido.']);
}
if ($method === 'POST' && (int) ($_SERVER['CONTENT_LENGTH'] ?? 0) > 20000) {
    reply(413, ['message' => 'A mensagem excede o tamanho permitido.']);
}

ini_set('session.use_strict_mode', '1');
session_name('va_contact');
session_set_cookie_params(['secure' => true, 'httponly' => true, 'samesite' => 'Strict', 'path' => '/enviar.php']);
session_start();

if ($method === 'GET') {
    if (!isset($_SESSION['token']) || time() - $_SESSION['issued'] > 1800) {
        $_SESSION['token'] = bin2hex(random_bytes(32));
        $_SESSION['issued'] = time();
    }
    reply(200, ['token' => $_SESSION['token']]);
}

$input = static function (string $key): string {
    return is_string($_POST[$key] ?? null) ? trim($_POST[$key]) : '';
};

if (!isset($_SESSION['token']) || time() - $_SESSION['issued'] > 1800 || !hash_equals($_SESSION['token'], $input('token'))) {
    reply(403, ['message' => 'A sessão expirou. Atualize a página e tente novamente.']);
}
if (time() - $_SESSION['issued'] < 2 || $input('website') !== '') {
    reply(422, ['message' => 'Verifique os campos e tente novamente.']);
}
if (time() - ($_SESSION['last_attempt'] ?? 0) < 30) {
    header('Retry-After: 30');
    reply(429, ['message' => 'Aguarde alguns segundos antes de enviar novamente.']);
}

$name = $input('name');
$email = $input('email');
$phone = $input('phone');
$subject = $input('subject');
$message = $input('message');
$subjects = ['Networking', 'Conteúdo do portfólio', 'Trajetória profissional', 'Outro assunto'];
$phoneDigits = preg_replace('/\D/', '', $phone);
if (
    $name === '' || strlen($name) > 400 || strlen($email) > 254 || !filter_var($email, FILTER_VALIDATE_EMAIL)
    || ($phone !== '' && (!preg_match('/^[0-9+() .-]{10,22}$/D', $phone) || !in_array(strlen($phoneDigits), [10, 11, 12, 13], true)))
    || !in_array($subject, $subjects, true) || strlen($message) < 10 || strlen($message) > 12000
) {
    reply(422, ['message' => 'Confira os dados e preencha a mensagem com pelo menos 10 caracteres.']);
}

$_SESSION['last_attempt'] = time();
session_write_close();
$body = "Nome: $name\nE-mail: $email\nCelular: $phone\nAssunto: $subject\n\n$message";
$headers = [
    'From' => $sender,
    'Reply-To' => $email,
    'MIME-Version' => '1.0',
    'Content-Type' => 'text/plain; charset=UTF-8',
];
if (!mail($recipient, 'Mensagem do portfolio profissional', $body, $headers)) {
    reply(502, ['message' => 'O servidor não aceitou a mensagem. Tente novamente mais tarde.']);
}
reply(200, ['sent' => true, 'message' => 'Sua mensagem foi encaminhada.']);
