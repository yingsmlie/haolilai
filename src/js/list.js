require(["require.config"],function(){
	require(["jquery","header","url","template"],function($,header,url,template){
		class List{
			constructor() {
				this.caty();
			}
			caty(){
				$.ajax({
					url: url.baseUrl + "/caty",
					methon : "GET",
					dataType: "json",
					success : function(res){
						if(res.res_code ===1){
							let list = res.res_body.list;
							console.log(list)
							//模块提供的方法渲染模板引擎
							var html = template("catyList", {list});
							console.log(html);
							$("#catyListcontainer").html(html);
						}
					}
				});
			}
		}
		return new List();
	})
})