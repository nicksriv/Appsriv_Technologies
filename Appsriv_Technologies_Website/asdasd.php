<?php
   $from = "sender@sender.com";
   $headers = "From:" . $from;
   echo mail ("receiver@receiver.com" ,"headline" , "text", $headers);
?>