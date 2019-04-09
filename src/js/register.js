require(["require.config"],function(){
	require(["jquery","header","footer"],function($){
		class Register {
			constructor () {
				this.register();
			}
			register (){
				var usernameInput = document.querySelector("#username"),
				passwordInput = document.querySelector("#password"),
				readypInput = document.querySelector("#ready-psd"),
				check = document.querySelector("#check"),
				btnre = document.querySelector("#btn-re");
				
				btnre.onclick = function(e){
					e.preventDefault();
					var username = usernameInput.value;
					var password = passwordInput.value;
					var readyp = readypInput.value;
					
					// tools.ajaxPost("/api/php/register.php",{username,password},function(res){
						/* $.ajax({
							   type: "POST",
							   url: "http://localhost/api/php/register.php",
							   data: "username="+username +"&password="+password,
							   success: function(msg){
								 console.log(JSON.parse(msg));
							   }
							}); */
							if(check.checked){
								if(readyp === password){
									$.ajax({
										type: "POST",
										url: "http://localhost/api/php/register.php",
										data: "username="+username +"&password="+password,
										success: function(res){
											var res = JSON.parse(res);
												if(res.res_code === 1){
													if(confirm(res.res_message + "即将跳转登录页面")){
														location.href = "/html/login.html";
													}
												}else{
													alert(res.res_message);
												}
										}
									})
								}else{
									confirm("请输入正确的密码");
								}
							}else{
									confirm("请点击已授权");
							}

				}	
			}			
		}
		return new Register();
	})
})


	