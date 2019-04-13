 require(["require.config"],function(){
 	require(["jquery","url","template","header","footer"],function($,url,template,header,footer){
 		class Detail{
 			constructor(){
 				this.init();
				this.values = 1;
 			}
			init(){
				//获取id
				let id = location.search.slice(4);
				$.ajax({
					url: url.baseUrl+"detail?id="+id,
					method:"GET",
					datatype :"json",
					success: res => {
						if(res.res_code ===1){
							//保存当前数据
							this.detail = res.res_body.data.detail;
							//修改当前数据id
							this.detail.id = id;
							this.render(res.res_body.data);
						}
					}
				})
			}
			render(data){
				var html = template("detail-template",{...data.detail});
				$("#detail-container").html(html);
				//绑定事件
				this.inscart();
				this.change1();
				this.buy();
			    this.getDom();
			}
			getDom(){
				this.price = document.querySelector("#price").innerHTML.slice(1);
			}
			//加入购物车
			inscart(){
				var btncart = document.querySelector("#btncart");
				btncart.onclick = () => {
					let cart = localStorage.getItem("cart");
					if(cart){
						console.log(this.detail);
						cart = JSON.parse(cart);
						//购物车有数据
						let index;
						if(cart.some((item,i) => {
							index = i;
							return item.id == this.detail.id;
						})){
							cart[index].num +=  Number(this.values);
						}else{
							cart.push({...this.detail,num:this.values})
						}
						localStorage.setItem("cart",JSON.stringify(cart));
					}else{
						localStorage.setItem("cart",JSON.stringify([
							{...this.detail,num:this.values}
						]));
						
					}
					// console.log(JSON.parse(localStorage.getItem("cart")))
					location.href = "/html/carts.html";
				}
			}
			
			change1(){
				var _this = this;
				var des = document.querySelector("#des");
				var ins =document.querySelector("#ins");
				var change = document.querySelector("#change");
				//减少
				des.onclick = function(e){
					e.preventDefault();
					this.values = change.value;
					this.values--;
					if(this.values < 1){
						this.values =1;
					}
					change.value = this.values;
					_this.price1();
				
				}.bind(this)
				//增加
				ins.onclick = function(e){
					e.preventDefault();
					this.values++
					change.value = this.values;
					_this.price1();
				}.bind(this)
				
			}
			//购买
			buy(){
				var buy = document.querySelector("#buy");
				buy.onclick = function(){
					location.href = "/html/list.html";
				}
			}
			//钱
			price1(){
				// this.index = this.price;
				this.values = document.querySelector("#change").value;
				console.log(this.values)
				this.sumprice = this.price * this.values;
				console.log(this.sumprice)
				document.querySelector("#price").innerHTML = "￥"+this.sumprice;
			}
			
			
			
 		}
 		return new Detail();
		
 	})
 })