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
				
				//获取注册的username和password渲染到登录上
				var obj = JSON.parse(localStorage.getItem("obj"));
				usernameInput.value = obj.username;
				passwordInput.value = obj.password;
				
				btnlo.onclick = function(e){
					e.preventDefault();
					
					var username = usernameInput.value;
					var password = passwordInput.value;
					//跳转首页
					$.ajax({
						type: "POST",
						url: "http://localhost/api/php/login.php",
						data: "username="+username +"&password="+password,
						success: function(res){
							var res = JSON.parse(res);
							if(res.res_code === 1){
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