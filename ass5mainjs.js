$(document).ready(function(){
	
	$(".hamburger").click(function(){
		$(this).next().slideToggle();
		
		//or instead of (this).next use (nav ul) and delete everything b4 .slide
		//to make the menu go over the top, use position: fixed, width: 100%
		
	})
	
})