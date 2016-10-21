//导航栏中各个指引点的位置
var inlandTop = $(".inland .inland-follow").offset().top-63;
var inlandMid = $(".inland .inland-free").offset().top-63;
var inlandBottom = $(".inland .more").offset().top-20;
var exitTop = $(".exit .exit-follow").offset().top-63;
var exitMid = $(".exit .exit-free").offset().top-63;
var exitBottom = $(".exit .more").offset().top-20;
var hotlineTop = $(".hotline .hotline-in").offset().top-63;
var hotlineMid = $(".hotline .hotline-out").offset().top-63;
var hotlineBottom = $(".hotline .more").offset().top-20;
var bargainTop = $(".bargain .bargain-in").offset().top-63;
var bargainMid = $(".bargain .bargain-out").offset().top-63;
var bargainBottom = $(".bargain .more").offset().top-20;
var essentialVisa = $(".essential .essential-visa").offset().top-63;
var essentialWifi = $(".essential .essential-wifi").offset().top-63;
var essentialCar = $(".essential .essential-car").offset().top-63;
var essentialBottom = $(".essential .more").offset().top-20;
//右侧滚轮点击事件
var inlandGo =  $(".inland").offset().top;
var exitGo =  $(".exit").offset().top;
var hotlineGo =  $(".hotline").offset().top;
var memberGo =  $(".member").offset().top-40;
var bargainGo =  $(".bargain").offset().top;
var freegoGo =  $(".freego").offset().top;
var essentialGo =  $(".essential").offset().top;
//当前页面刷新触发
$(document).ready(function(){
	var width = $(window).width();
	var bodywidth=$(document.body).width();
	// console.log($(window).width());
	if(width<1920){
		$(document.body).css("width","1920px");
	}else{
		$(document.body).css("width",width+"px");
	};
});
//body适应屏幕
$(window).resize(function(){
	var width = $(window).width();
	var bodywidth=$(document.body).width();
	if(width<1920){
		$(document.body).css({
			"width":"1920px"
		});
	}else{
		$(document.body).css("width",width+"px");
	};
	if (width<1920) {
		var start = (1920 - width)/2
		$(window).scrollLeft(start);
	};
});
$(".nav .midnav .citylist li").click(function(){
	$(this).addClass("current").css("color","black").siblings().removeClass("current").css({"color":"white","border":"2px solid white"});
}).mouseenter(function(){
	$(this).hasClass("current")?$(this).siblings().css({"color":"white","border":"2px solid white"}):$(this).css({"color":"rgb(254,230,72)","border":"2px solid rgb(254,230,72)"})
}).mouseleave(function(){
	$(this).hasClass("current")?$(this).css({"color":"black","border":"2px solid rgb(254,230,72)"}).siblings().css({"color":"white","border":"2px solid white"}):$(this).css({"color":"white","border":"2px solid white"})
});
$(".scroll .scrollhd2 li").click(function(){
	$(this).addClass("currentroll").siblings().removeClass("currentroll");
});
//跟团，自由
//国内
$(".inland .item-nav .follow").click(function(){
	$(window).scrollTop(inlandTop+1);
});
$(".inland .item-nav .free").click(function(){
	$(window).scrollTop(inlandMid+1);
});
$(".inland .item-nav a").click(function(){
	$(this).addClass("firstclass").siblings().removeClass("firstclass");
});
//境外
$(".exit .item-nav .follow").click(function(){
	$(window).scrollTop(exitTop+1);
});
$(".exit .item-nav .free").click(function(){
	$(window).scrollTop(exitMid+1);
});
$(".exit .item-nav a").click(function(){
	$(this).addClass("firstclass").siblings().removeClass("firstclass");
});
//国内境外
//热门路线
$(".hotline .item-nav .in").click(function(){
	$(window).scrollTop(hotlineTop+1);
});
$(".hotline .item-nav .out").click(function(){
	$(window).scrollTop(hotlineMid+1);
});
$(".hotline .item-nav a").click(function(){
	$(this).addClass("secondclass").siblings().removeClass("secondclass");
});
//特价玩水
$(".bargain .item-nav .in").click(function(){
	$(window).scrollTop(bargainTop+1);
});
$(".bargain .item-nav .out").click(function(){
	$(window).scrollTop(bargainMid+1);
});
$(".bargain .item-nav a").click(function(){
	$(this).addClass("thirdclass").siblings().removeClass("thirdclass");
});
//出国必备
$(".essential .item-nav .visa").click(function(){
	$(window).scrollTop(essentialVisa+1);
});
$(".essential .item-nav .wifi").click(function(){
	$(window).scrollTop(essentialWifi+1);
});
$(".essential .item-nav .car").click(function(){
	$(window).scrollTop(essentialCar+1);
});
$(".essential .item-nav a").click(function(){
	$(this).addClass("forthclass").siblings().removeClass("forthclass");
});
$(window).scroll(function(){
	var len = $(window).width()
	var hei = window.scrollY
	var wid = window.scrollX
	var abright = 450-hei
	var width = $(window).width();
	var bodywidth=$(document.body).width();
	if(width<1920){
		$(document.body).css({
			"width":"1920px"
		});
	}else{
		$(document.body).css("width",width+"px");
	};
	if (width<1920) {
		var start = (1920 - width)/2
		$(window).scrollLeft(start);
	};
	if(hei<400){
		$(".scroll").scrollTop(abright)
		$(".scroll").css({
			"position":"fixed",
			"right":"10px",
			"top":abright+"px"
		});
	}else if(hei>=400){
		$(".scroll").css({
			"position":"fixed",
			"right":"10px",
			"top":"60px"
		});
	};
	//国内爆品滚轮事件
	if(inlandTop>hei||hei>inlandBottom){
		$(".inland .item-nav").css({
			"position":"",
			"transform":"translateX(0)",
		});
	}else{
		$(".inland .item-nav").css({
			"position":"fixed",
			"top":"0px",
			"left":"50%",
			"transform":"translateX(-481px)",
			"z-index":"10"
		});
	};
	//国内爆品增加类名
	if(hei>inlandTop&&hei<inlandMid){
		$(".inland .item-nav .follow").addClass("firstclass").siblings().removeClass("firstclass");
	}else if(hei>inlandMid&&hei<inlandBottom){
		$(".inland .item-nav .free").addClass("firstclass").siblings().removeClass("firstclass");
	};
	//出境爆品滚轮事件
	if(exitTop>hei||hei>exitBottom){
		$(".exit .item-nav").css({
			"position":"",
			"transform":"translateX(0)",
		});
	}else{
		$(".exit .item-nav").css({
			"position":"fixed",
			"top":"0px",
			"left":"50%",
			"transform":"translateX(-481px)",
			"z-index":"10"
		});
	};
	//出境爆品增加类名
	if(hei>exitTop&&hei<exitMid){
		$(".exit .item-nav .follow").addClass("firstclass").siblings().removeClass("firstclass");
	}else if(hei>exitMid&&hei<exitBottom){
		$(".exit .item-nav .free").addClass("firstclass").siblings().removeClass("firstclass");
	};
	//热门路线滚轮事件
	if(hotlineTop>hei||hei>hotlineBottom){
		$(".hotline .item-nav").css({
			"position":"",
			"transform":"translateX(0)",
		});
	}else{
		$(".hotline .item-nav").css({
			"position":"fixed",
			"top":"0px",
			"left":"50%",
			"transform":"translateX(-481px)",
			"z-index":"10"
		});
	};
	//热门路线增加类名
	if(hei>hotlineTop&&hei<hotlineMid){
		$(".hotline .item-nav .in").addClass("secondclass").siblings().removeClass("secondclass");
	}else if(hei>hotlineMid&&hei<hotlineBottom){
		$(".hotline .item-nav .out").addClass("secondclass").siblings().removeClass("secondclass");
	};
	//特价玩水滚轮事件
	if(bargainTop>hei||hei>bargainBottom){
		$(".bargain .item-nav").css({
			"position":"",
			"transform":"translateX(0)",
		});
	}else{
		$(".bargain .item-nav").css({
			"position":"fixed",
			"top":"0px",
			"left":"50%",
			"transform":"translateX(-481px)",
			"z-index":"10"
		});
	};
	//特价玩水增加类名
	if(hei>bargainTop&&hei<bargainMid){
		$(".bargain .item-nav .in").addClass("thirdclass").siblings().removeClass("thirdclass");
	}else if(hei>bargainMid&&hei<bargainBottom){
		$(".bargain .item-nav .out").addClass("thirdclass").siblings().removeClass("thirdclass");
	};
	//出境必备滚轮事件
	if(essentialVisa>hei||hei>essentialBottom){
		$(".essential .item-nav").css({
			"position":"",
			"transform":"translateX(0)",
		});
	}else{
		$(".essential .item-nav").css({
			"position":"fixed",
			"top":"0px",
			"left":"50%",
			"transform":"translateX(-481px)",
			"z-index":"10"
		});
	};
	//出境必备增加类名
	if(hei>essentialVisa&&hei<essentialWifi){
		$(".essential .item-nav .visa").addClass("forthclass").siblings().removeClass("forthclass");
	}else if(hei>essentialWifi&&hei<essentialCar){
		$(".essential .item-nav .wifi").addClass("forthclass").siblings().removeClass("forthclass");
	}else if(hei>essentialCar&&hei<essentialBottom){
		$(".essential .item-nav .car").addClass("forthclass").siblings().removeClass("forthclass");
	};
});
//右侧浮动栏点击跳转事件
$(".scroll .scrollhd2 ul .inlandGo").click(function(){
		$(window).scrollTop(inlandGo);
});
$(".scroll .scrollhd2 ul .exitGo").click(function(){
		$(window).scrollTop(exitGo);
});
$(".scroll .scrollhd2 ul .hotlineGo").click(function(){
		$(window).scrollTop(hotlineGo);
});
$(".scroll .scrollhd2 ul .memberGo").click(function(){
		$(window).scrollTop(memberGo);
});
$(".scroll .scrollhd2 ul .bargainGo").click(function(){
		$(window).scrollTop(bargainGo);
});
$(".scroll .scrollhd2 ul .freegoGo").click(function(){
		$(window).scrollTop(freegoGo);
});
$(".scroll .scrollhd2 ul .essentialGo").click(function(){
		$(window).scrollTop(essentialGo);
});
//top动画
$(".scroll .scrollhd3 .topGo").click(function(){
	 var t = setInterval(function(){
	 	var top = ($(window).scrollTop()-100)
		$(window).scrollTop(top);
		if($(window).scrollTop()==0){
			clearInterval(t);
		};
	},10);
});
//头部5个图片
$(".navimg .backimg .boxfoot .item-first").click(function(){
		$(window).scrollTop(inlandGo);
});
$(".navimg .backimg .boxfoot .item-second").click(function(){
		$(window).scrollTop(hotlineGo);
});
$(".navimg .backimg .boxfoot .item-third").click(function(){
		$(window).scrollTop(essentialGo);
});
$(".navimg .backimg .boxfoot .item-forth").click(function(){
		$(window).scrollTop(bargainGo);
});
$(".navimg .backimg .boxfoot .item-fifth").click(function(){
		$(window).scrollTop(freegoGo);
});
//马上抢购
$(".navimg .backimg .boxhead").click(function(){
		$(window).scrollTop(memberGo);
});
// console.log($(".m-box-hd"));
























