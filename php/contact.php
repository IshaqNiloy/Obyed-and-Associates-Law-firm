<?php
if(isset($_POST['name'], $_POST['email'], $_POST['subject'], $_POST['message'])){
    $name = $_POST['name'];
    $to = 'ishaqniloy1996@gmail.com';
    $from = $_POST['email'];
    $subject = $_POST['subject'];
    $message = "From: ".$name."\n"."Email: ".$from."\n\n".$_POST['message'];
    $headers = "From: ".$from;

    mail($to, $subject, $message, $headers);
}
