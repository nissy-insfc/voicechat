<?php

$comment = $_POST['comment'];
$answer = $_POST['answer'];
$ipaddr =  $_SERVER["REMOTE_ADDR"];

$data = [
  'comment' => $comment,
  'answer' => $answer,
  'ipaddr' => $ipaddr
];

$data_json = json_encode($data);
echo $data_json;

$ch = curl_init();
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
curl_setopt($ch, CURLOPT_POSTFIELDS, $data_json);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_URL, 'https://script.google.com/macros/s/GAS_HASH_XXXXXXXXXXXXXX/exec');
$result=curl_exec($ch);
echo 'RETURN:'.$result;
curl_close($ch);