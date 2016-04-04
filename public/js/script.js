
$(function(){


	setTimeout(function(){
		$('body').addClass('loaded');
	}, 0.03);

	// var arr = [ "home", "about" ];

	// $( ".container" ).hasClass("home", function(){

	// }).addClass("active");
// var object = {
	
// }
// if has class this in the array 
// 	then navigation bar for this addClass ("active")

	// jQuery.each( arr, function( i, val ) {
 //  		$(val).addClass("active");
 //  		console.log(val)
 
 //  		// Will stop running after "three"
 //  		// return ( val !== "three" );
	// });

	// $("ul li").click(function(){
	// 	$(this).addClass("active");
	// });

	/* Home Page Animations */

	/* panel movement animation --- picture movement animation on home page */

	var movementStrength = 50;
	var height = movementStrength / $(window).height();
	var width = movementStrength / $(window).width();
	$(".photo").mousemove(function(e){
		var pageX = e.pageX - ($(window).width() / 2);
		var pageY = e.pageY - ($(window).height() / 2);
		var newvalueX = width * pageX * -1 - 25;
		var newvalueY = height * pageY * -1 - 25;
		$(this).css("transform","translate("+ newvalueX+"px, " +newvalueY+"px)");
		$(this).css("background-size", "cover");
	});



	
	// $(".col").click(function(e){
	// 	$(".col").not(this).removeClass("intro");
	// 	$(this).animate({ width:"55%", opacity:"1",overflow:"hidden"},"slow");
	// 	$(this).find(".panel-description").addClass("animated fadeInDown").css("display","block");
	//  	$(".col").not(this).animate({ width:"14.9%", opacity:'0.7', overflow:"hidden"},"slow");	 	
	// });


	/* panel hover animation -- to control panel description content 
	   and background filter for description and panel */

	var this_panel = ["film", "theater", "music", "code"];

	// $.each(this_panel, function(i, val){
	// 	$("."+ val + "-panel").hover(function(){
	// 		$(this).find(".panel-description").css("display","block");
	// 		$(this).find(".hide-photo-filter").addClass("show-photo-filter");
	// 		console.log(this);		
	// 	});

	// 	// $("."+ val + "-panel").mouseout(function(){
	// 	// 	$(this).find(".panel-description").css("left","-150px");
	// 	// 	$(this).find(".show-photo-filter").addClass(".hide-photo-filter");
	// 	// 	console.log(this);		
	// 	// });


	// 	console.log(this_panel);
	// 	// $("."+ val + "-panel").mouseout(function(){
	// 	// 	$(this).unbind("hover").css("p","red");

	// 	// })
	// });
	
});