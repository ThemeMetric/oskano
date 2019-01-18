<?php
/**
* -----------------------------------------------------------------------------.
*
* Template : Oskano | Multipage Html5 Responsive Construction Template
* Author : ThemeMetric
* Author URI : https://www.thememetric.com/
*
* -----------------------------------------------------------------------------
*
**/
use PHPMailer\PHPMailer\PHPMailer;

require 'phpmailer/phpmailer/src/Exception.php';
require 'phpmailer/phpmailer/src/PHPMailer.php';
require 'phpmailer/phpmailer/src/SMTP.php';

$mail = new PHPMailer(true);

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get the form fields value
    $f_name = trim($_POST['first-name']);
    $l_name = trim($_POST['last-name']);
    $name = $f_name.' '.$l_name;
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $phone = trim($_POST['phone']);
    $subj = trim($_POST['subject']);
    $website = trim($_POST['website']);
    $message = trim($_POST['message']);

    // Check that data was sent to the mailer.
    if (empty($name) or empty($phone) or empty($subj) or empty($website) or empty($message) or !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Set a 400 (bad request) response code and exit.
        http_response_code(400);
        echo 'Oops! There was a problem with your submission. Please complete the form and try again.';
        exit;
    }

    //Server settings
    $mail->isSMTP();
    $mail->Host = 'email-smtp.us-east-1.amazonaws.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'AKIAJES2C3RNZQELTQ7A';
    $mail->Password = 'AmNet7XI5z/Vt6yHDPn2WawNcTBIN5+wjuOC0dzX7k3m';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    //Recipients
    $mail->setFrom('thememetric@gmail.com', 'ThemeMetric');
    $mail->addAddress('thememetric@gmail.com', 'Sajjad');
    $mail->addAddress('thememetric@gmail.com');
    $mail->addReplyTo($email, $name);

    // Build the email content.
    $email_content = "Name: $name\n<br/>";
    $email_content .= "Email: $email\n<br/>";
    $email_content .= "Phone: $phone\n<br/>";
    $email_content .= "Subject: $subj\n<br/>";
    $email_content .= "Website: $website\n<br/>";
    $email_content .= "Message: $message\n";

    $mail->isHTML(true);
    $mail->Subject = $subj;
    $mail->Body = $email_content;
    $mail->send();
    echo 'Thank You! Your message has been sent.';

    $recipient = 'thememetric@gmail.com';
    // Build the email headers.
    $email_headers = "From: $name <$email>";

    // Send the email.
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        // Set a 200 (okay) response code.
        http_response_code(200);
        echo 'Thank You! Your message has been sent.';
    } else {
        // Set a 500 (internal server error) response code.
        http_response_code(500);
        echo ' ';
    }
} else {
    // Not a POST request, set a 403 (forbidden) response code.
    http_response_code(403);
    echo 'There was a problem with your submission, please try again.';
}
