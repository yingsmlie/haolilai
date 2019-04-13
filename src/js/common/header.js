define(["jquery"],function($){
	class Header{
		constructor(){
			// console.log('header loading')
			this.init().then(() => {
				this.login();
				this.search();
				this.cakelist();
				this.skip();
				// console.log('header loaded')
				this.che();
			});
		}
		che(){
			var tnum = localStorage.getItem("anum");
			var cartnum = document.querySelector("#cartnum");
				cartnum.innerHTML = tnum;
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
		search(){
			var search = document.querySelector("#search");
				search.onkeyup = function(){
					let keyword = search.value;
					//JSON跨域
					$.getJSON("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?cb=?&wd=" + keyword, res => {
						let list = res.s;
						let ul = $("<ul>");
						
						list.forEach(function(item , index){
							$("<li>").html(item).appendTo(ul);
						});
						$("#textfind").empty().append(ul);
					})
				}
				
				//失去焦点移除ul
				search.onblur = function(){
				
					setTimeout(function(){
						$("#textfind").find("ul").remove();
					},2000)
				}
				
// 				//点击ul渲染进搜索
				var textfind = document.querySelector("#textfind");
				textfind.onclick = function(e){
					console.log(e);
				   e = e || window.event;
					var target = e.target || e.srcElement;
					var values =target.innerHTML;
						
					$("#search").val(values);
					
					
				}
		}
		//弹出列表
		cakelist(){
			var cake = document.querySelector("#cake");
			var cakeshow = document.querySelector("#cakeshow");
			cake.onmouseenter = function(){
				cakeshow.style.display = "block";
			}
			cakeshow.onmouseleave = function(){
				cakeshow.style.display = "none";
			}
		}
		//跳转购物车
		skip(){
			var tiaozhuan = document.querySelector("#tiaozhuan");
			tiaozhuan.onclick = function(){
				location.href = "/html/carts.html";
			}
		}
	}
	
	return new Header();
})