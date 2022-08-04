/*==============================
	STYLE SWITCHER SCRIPT INSTALLATION
 ===============================*/
 
 (function($) {
	"use strict";


	
	$("#darktoggle" ).on('click', function(){
		$("#darktoggle" ).toggleClass("checked" );

		if($("#darktoggle").hasClass( "checked" )){
			
			$("#darkoverlay" ).attr("href", "css/style-switcher/darkoverlay.css" );
		}else{
			$("#darkoverlay" ).removeAttr("href", "css/style-switcher/darkoverlay.css" );
		}
	});


	$(".color1" ).click(function(){
		$("#colors" ).attr("href", "css/style-switcher/color0.css" );
		return false;
	});

	$(".color2" ).click(function(){
		$("#colors" ).attr("href", "css/style-switcher/color1.css" );
		return false;
	});

	$(".color3" ).click(function(){
		$("#colors" ).attr("href", "css/style-switcher/color2.css" );
		return false;
	});

	$(".color4" ).click(function(){
		$("#colors" ).attr("href", "css/style-switcher/color3.css" );
		return false;
	});

	$(".color5" ).click(function(){
		$("#colors" ).attr("href", "css/style-switcher/color4.css" );
		return false;
	});

	$(".color6" ).click(function(){
		$("#colors" ).attr("href", "css/style-switcher/color5.css" );
		return false;
	});

	$(".color7" ).click(function(){
		$("#colors" ).attr("href", "css/style-switcher/color6.css" );
		return false;
	});

	$(".color8" ).click(function(){
		$("#colors" ).attr("href", "css/style-switcher/color7.css" );
		return false;
	});
	$(".color9" ).click(function(){
		$("#colors" ).attr("href", "css/style-switcher/color8.css" );
		return false;
	});
	$(".color10" ).click(function(){
		$("#colors" ).attr("href", "css/style-switcher/color9.css" );
		return false;
	});
	$(".color11" ).click(function(){
		$("#colors" ).attr("href", "css/style-switcher/color10.css" );
		return false;
	});
	$(".color12" ).click(function(){
		$("#colors" ).attr("href", "css/style-switcher/color11.css" );
		return false;
	});

	
	// Style Switcher	
	$('#style-switcher').animate({
		left: '-250px'
	});

	$('#style-switcher h2 a').click(function(e){
		e.preventDefault();
		var div = $('#style-switcher');
		console.log(div.css('left'));
		if (div.css('left') === '-250px') {
			$('#style-switcher').animate({
				left: '0px'
			}); 
		} else {
			$('#style-switcher').animate({
				left: '-250px'
			});
		}
	});

	$('.colors li a').click(function(e){
		e.preventDefault();
		$(this).parent().parent().find('a').removeClass('active');
		$(this).addClass('active');
	});
    
})(jQuery);

