<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $nom = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Configuration de l'envoi de l'email via SendGrid
    $to = "votre-email@exemple.com";
    $subject = "Nouveau message de formulaire de contact";

    $message_sendgrid = "Nom: " . $nom . "\r\n";
    $message_sendgrid .= "Email: " . $email . "\r\n";
    $message_sendgrid .= "Message: " . $message . "\r\n";

    $headers = array(
        "Authorization: Bearer VOTRE_CLÉ_API_SENDGRID",
        "Content-Type: application/json"
    );

    $data = array(
        "personalizations" => array(
            array(
                "to" => array(
                    array(
                        "email" => $to
                    )
                )
            )
        ),
        "from" => array(
            "email" => $email
        ),
        "subject" => $subject,
        "content" => array(
            array(
                "type" => "text/plain",
                "value" => $message_sendgrid
            )
        )
    );

    // Envoi de l'email via SendGrid
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://api.sendgrid.com/v3/mail/send");
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $response = curl_exec($ch);
    curl_close($ch);

    if ($response) {
        echo "Votre message a été envoyé avec succès.";
    } else {
        echo "Une erreur s'est produite lors de l'envoi de votre message.";
    }
}
?>