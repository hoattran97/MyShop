<?php
//đăng kí
include('connect/connect.php');
$json = file_get_contents('php://input');
$obj = json_decode($json, true);
$name = $obj['name'];
$email = $obj['email'];
$password = md5($obj['password']);
if($name !='' && $email != '' && $password!=''){
	
	$sql = "INSERT INTO users(email,password,name) VALUES('$email','$password','$name')";
	$result = $mysqli->query($sql);
	if($result){
		//echo 'THANH_CONG';
		// echo JsonHelper::getJson("result",'THANH_CONG');

		echo("{\"result\":\"THANH_CONG\"}");

	}
	else{
		echo("{\"result\":\"KHONG_THANH_CONG\"}");
	};
}
else{
	echo("{\"result\":\"KHONG_THANH_CONG\"}");
}

?>