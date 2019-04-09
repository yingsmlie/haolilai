require(["require.config"],function(){
	require(["jquery","header","footer"],function($){
		class Login {
			constructor() {
			    this.login();
			}
			login () {
				var usernameInput = document.querySelector("#username"),
				passwordInput = document.querySelector("#password"),
				btnlo = document.querySelector("#btnlo");
				
				btnlo.onclick = function(e){
					e.preventDefault();
					
					var username = usernameInput.value;
					var password = passwordInput.value;
					
					/* tools.ajaxPost("/api/php/login.php",{username,password},function(res){
						if(res.res_code ===1){
							
							localStorage.setItem("username",username);
							
							if(confirm(res.res_message + "即将跳转首页")){
								location.href = "../index.html";
							}
						}else{
							alert(res.res_message);
						}
					}) */
					$.ajax({
						type: "post",
						url: "http://localhost/api/php/login.php",
						data: "username = username & password = password",
						async: true,
						success: function(res){
							if(res.res_code ===1){
							
								localStorage.setItem("username",username);
							
								if(confirm(res.res_message + "即将跳转首页")){
									location.href = "../index.html";
								}
							}else{
								alert(res.res_message);
							}
						}
					})
				}
			}
 		}
		return new Login();
 	})
})