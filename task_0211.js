function helper_iiou_xx980($){
	this.$ = $;
	this.start = function(){
		if(window.location.host==="www.bilibili.com"){
			alert("我是新方法");
		}
	}
}
function _i190u_task_scan_($){ //统一执行函数, 动态加载的作用域不一致，故而传入jquery的$
	try{
		(new helper_iiou_xx980($)).start();
	}catch(e){}
}