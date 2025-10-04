<?php

    $to = "contact@appsriv.com";
    $from = $_REQUEST['email'];
    $subject = "Appsriv Contact ".$_REQUEST['subject'];
    $name = $_REQUEST['name'];
    $headers = "From: $from";

    $fields = array();
    $fields{"name"} = "name";
    $fields{"email"} = "email";
    $fields{"phone"} = "phone";
    $fields{"subject"} = "subject";
    $fields{"message"} = "message";

    $body = "Here is what was sent:\n\n"; foreach($fields as $a => $b){   $body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); }

    $send = mail($to, $subject, $body, $headers);

?>
