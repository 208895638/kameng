$(function(){
	$(".zy_tab_top a").on("click",function(){
		var i = $(this).index();
		$(this).addClass("on").siblings().removeClass("on");
		if(i == 0){
			$(".zy_infor .box").addClass("on");
		}else{
			$(".zy_infor .box").removeClass("on");
		}
	});
})
