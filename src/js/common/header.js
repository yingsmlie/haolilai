define(["jquery"],function($){
	class Header{
		constructor(){
			// console.log('header loading')
			this.init().then(() => {
				this.login();
				// console.log('header loaded')
			});
		}
		
		init () {
			return new Promise((resolve, reject) => {
				$("#header").load("/html/header.html",() => {
					resolve();
				})
			})
		}
		
		//渲染登录
		login(){
			var show_n = document.querySelector("#show_n"),
			show_b = document.querySelector("#show_b"),
			span = document.querySelector("#span"),
			dat = document.querySelector("#dat");
			
			var username = localStorage.getItem("username");
			
			if(username){
				show_n.classList.add("show");
				show_b.classList.remove("show");
			}else{
				show_n.classList.remove("show");
				show_b.classList.add("show");
			}
			span.innerHTML = username;
			//退出
			dat.onclick = function(){
				if(confirm("确定退出")){
					localStorage.removeItem("username");
					
					show_n.classList.remove("show");
					show_b.classList.add("show");
					
				}
			}
		}
		
		//搜索
		
		
	}
	
	return new Header();
})