require(["require.config"],() =>{
	require(["jquery","template","header","footer"],($,template) => {
		
		function Cart (){
			 this.sumprice = 0;
			this.init();
			
		}
		$.extend(Cart.prototype,{
			init(){
				this.cart = JSON.parse(localStorage.getItem("cart"));
				this.render();
				
				
			},
			render(){
				
				var html = template("cart_container",{cart:this.cart});
				$("#baohan").html(html);
				
				this.shanchu();
			    this.totalcalc();
				
			},
			//全选
			/* cartcheck(){
				var Allcheck = document.querySelector("#Allcheck");
			
				var acheck = document.querySelectorAll(".acheck");	
					Allcheck.onclick = function(){
						for(let i = 0;i < acheck.length ; i++){
							if(Allcheck.checked){
								acheck[i].checked = true;
							}else{
								acheck[i].checked = false;
							}
						}
					}
					
				//删除选中商品
				
				this.totalcalc();	
				
			},
			 */

			
		//删除
		shanchu(){
			var _this=this;
			this.shanchu=$(".del");
			this.shanchu.on("click",function(){
				//console.log(33)
				if(confirm("确定删除这件商品吗？")){
					//localStorage.getItem("cart");
					var scid = JSON.parse(localStorage.getItem("cart"));
					console.log(this)
					let cartId = this.parentElement.getAttribute("data-id");
					console.log(cartId)
					let i = 0;
					scid.some((item,index)=>{
						i = index;
						return item.id = cartId;
					})
					//console.log(scid[i])
					scid.splice(i,1);
					localStorage.setItem("cart",JSON.stringify(scid))
					//_this.render();
					$(this).parent().remove();
					_this.totalcalc();
					
				}
				location.reload();
			})
		
			
		},
		
	/* 	//加减
		cartchange(){
			var _this = this;
			this.cartcontainer = $("#baohan");
			console.log(this.cartcontainer);
			this.cartcontainer.on("click",function(event){
				
				 var target = event.target;
				 //增加
				 if(target.className = "inseq"){
				 	$(target).prev().val(Number($(target).prev().val())+1);
				 	/* let cprice = target.parentElement.previousElementSibling.innerHTML;
					// $(target).parent().prev().eq[0];
				
					
				 	 let cnum = $(target).prev().val();
				 	
					 
				 	let hprice =Number(cprice)  *Number(cnum);
					console.log(target.parentElement.nextElementSibling) 
					console.log(target.parentElement.nextElementSibling.innerHTML)
					 target.parentElement.nextElementSibling.innerHTML = hprice;
				   
					_this.totalcalc();
				 }
				//减少
				if(target.className = "deseq"){
					
					$(target).next().val(Number($(target).next().val())-1);
					
					
					
					if(Number($(target).next().val() <= 0)){
						Number($(target).next().val(1));
					}
					 let cprice = $(target).parent().prev().html();
					
					
					let cnum = $("target").prev().val();
					
					
					
					let hprice =Number(cprice)  *Number(cnum);
					$(target).parent().next().html(hprice);
					_this.totalcalc();	 
				} 
				
				 
			}) 
			/* document.querySelector("#cart_container").onclick= function(e){
				e = e || window.event;
				var target = e.target || e.srcElement;
				
				if(target.className == "deseq"){
				
				
			
					if(target.nextElementSibling.value <= 1){
						target.nextElementSibling.value = 1;
					}else{
						target.nextElementSibling.value--;
					}
					var zhi = target.nextElementSibling.value;
				
					var pr = target.parentNode.previousElementSibling.innerHTML;
					
					target.parentNode.nextElementSibling.innerHTML = Number(zhi)*Number(pr);
				}	
			} 
			this.totalcalc();
			
		},
			/* change2(){
				var _this = this;
				var des1 = document.querySelector("#des1");
				var ins1 =document.querySelector("#ins1");
				var change1 = document.querySelector("#change1");
				//增加
				ins1.onclick = function(e){
					e.preventDefault();
					this.values++
					change1.value = this.values;
					
					_this.price2();
				}.bind(this)
				//减少
				des1.onclick = function(e){
					e.preventDefault();
					this.values = change1.value;
					this.values--;
					if(this.values < 1){
						this.values =1;
					}
					change1.value = this.values;
					_this.price2();
				
				}.bind(this)
				
				
			}, */
			//总计
				totalcalc(){
			       
						// console.log(this.sumprice)
					var totalnum1 = 0;
					 var totalprice1 = 0;
					var sumprice = document.querySelector("#sumprice");
					$(".acheck").each(function(index,i){
						
							
						var totalprice = Number(i.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML);
						//console.log(totalprice);
						var totalnum = Number(i.parentNode.nextElementSibling.nextElementSibling.children[1].value);
						
						totalprice1 =totalprice1 +totalprice;
						//console.log(totalprice1);
						totalnum1 = totalnum1+totalnum;
						localStorage.setItem("anum", totalnum1);
						
					})
					
					sumprice.innerHTML = totalprice1; 

					
				},
				
			
			
			
			
		})
		
		new Cart();
	})
})