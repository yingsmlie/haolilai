<?php
	
	include("db.php");
	$username = $_POST["username"];
	$password = $_POST["password"];
	
	$selSql = "select * from users where username = '$username'";
	$sqlRes = mysql_query($selSql);
	if(mysql_num_rows($sqlRes) >= 1){
		//已有此用户
		echo json_encode(array('res_code' => 0 , 'res_message' => "此用户已存在"));
	}else{
		//存用户的信息
		$insSql = "insert into users (username, password) values ('$username', '$password')";
		$insRes = mysql_query($insSql);
		
		if($insRes){
			echo json_encode(array('res_code' => 1, 'res_message' => "注册成功"));
		}else{
			echo json_encode(array('res_code' => 0, 'res_message' => "网络错误"));
		}
	}
?>