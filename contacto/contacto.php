<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Datos del formulario
    $nombre = htmlspecialchars(trim($_POST['name']));
    $correo = htmlspecialchars(trim($_POST['email']));
    $mensaje = htmlspecialchars(trim($_POST['message']));

    // Tu correo donde quieres recibir los mensajes
    $destinatario = "heartfeltcreations.contact@gmail.com";
    $asunto = "Nuevo mensaje desde el formulario de contacto";

    // Cuerpo del mensaje
    $contenido = "Nombre: $nombre\n";
    $contenido .= "Correo: $correo\n\n";
    $contenido .= "Mensaje:\n$mensaje\n";

    // Encabezados
    $headers = "From: $correo\r\n";
    $headers .= "Reply-To: $correo\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Enviar correo
    if (mail($destinatario, $asunto, $contenido, $headers)) {
        echo "✅ Mensaje enviado con éxito. Te responderemos pronto.";
    } else {
        echo "❌ Hubo un problema al enviar el mensaje. Intenta más tarde.";
    }
}
?>
