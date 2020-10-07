<?php

    $name              = $_POST['name'];
    $visitator_email   = $_POST['email'];
    $message           = $_POST['message'];


    $email_form        = 'iliesibogdan@website.com';
    $email_subject     = 'New message!';
    $email_body        = "From: $name.\n".
                            "Email: $visitator_email.\n".
                                "Message: $message.\n";


        $to            = "iliesibogdanm@gmail.com";
        $headers       = "From: $email_form \r\n";
        $headers      .= "Reply-to: $visitator_email\r\n";

        mail($to,$email_subject,$email_body,$headers);

        header("Location: index.html");








?>