
$(function(){


/* Home page --- picture movement animation */
var movementStrength = 50;
var height = movementStrength / $(window).height();
var width = movementStrength / $(window).width();
$(".photo, .this-col").mousemove(function(e){
	  var pageX = e.pageX - ($(window).width() / 2);
	  var pageY = e.pageY - ($(window).height() / 2);
	  var newvalueX = width * pageX * -1 - 25;
	  var newvalueY = height * pageY * -1 - 25;
	  $(this).css("transform","translate("+ newvalueX+"px, " +newvalueY+"px)");
	  // $(this).css("background-size", "cover");
});


$('a[href="#code"]').click(function(){

 $('#home').css({"display":"none"});
 // $('a[href="#code"]').css("display":"none")

  alert('Sign new href executed.'); 
});


$(".col.col-lg-3").click(function(e){
	$(".col.col-lg-3").not(this).removeClass("intro");
	$(this).animate({ width:"55%", opacity:"1"},"slow");
	$(this).find(".panel-description").addClass("intro");
 	$(".col.col-lg-3").not(this).animate({ width:"14%", opacity:'0.7'},"slow");
 	
});


// $(".photo").toggle(function(){
// 	$("photo").css({"width": "900px"});
// });

// $(".col").click(function(e){

// 	$(".col").not(this).hide(2000);
// 	$(this).css({"width":"100%"});
// 	console.log("hi");
// });

/* Home page --- each column animation */

// $(".col.col-lg-3").click(function(e){
// 	$(this).css({"width":"55%"});
// 	$(".col.col-lg-3").not(this).css({"width":"15%"});
// });

// $("h1").css({"color":"red"});

// when you click on this 
//     if this 
// 	.col.col-lg-3 this col-lg-3 changes 55%
// else 
// 	anything else changes to 15%


// var movementStrength = 25;
// var height = movementStrength / $(window).height();
// var width = movementStrength / $(window).width();
// $(".top-image").mousemove(function(e){
//           var pageX = e.pageX - ($(window).width() / 2);
//           var pageY = e.pageY - ($(window).height() / 2);
//           var newvalueX = width * pageX * -1 - 25;
//           var newvalueY = height * pageY * -1 - 25;
//           $(this).css("background-position", newvalueX+"px     "+newvalueY+"px");
//           // $(this).css("transform: rotateY(5deg);")
// });

// $( "button" ).click(function() {
//   $(".perspective-container .photo-geek").toggle( "slow" );
// });


});