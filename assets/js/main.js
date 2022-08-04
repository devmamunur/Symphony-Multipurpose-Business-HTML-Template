(function ($) {
	"use strict";
    jQuery(document).ready(function($){
        /*--------------------
            wow js init
        --------------------*/
        new WOW().init();

        
        /*-------------------------------
            back to top
        ------------------------------*/
        $(document).on('click', '.back-to-top', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 2000);
        });
        /*------------------------------
            smoth achor effect
        ------------------------------*/
        $(document).on('click','#view_demo', function (e) {
            e.preventDefault();
            var anchor = $(this).attr('href');
            var top = $(anchor).offset().top;
            $('html, body').animate({
                scrollTop: $(anchor).offset().top
            }, 1000);
            $(this).parent().addClass('active').siblings().removeClass('active');
        });
       
        /*------------------------------
            Typed Activate
        ------------------------------*/
        var $typed = $("#typed");
        if ($typed.length > 0) {
            $typed.typed({
                strings: ["6 Home Page.", "12 Color View", "W3C Valid Code.", "Fully Responsive","Well Documented"],
                stringsElement: null,
                typeSpeed: 30,
                startDelay: 100,
                backSpeed: 20,
                backDelay: 300,
                loop: true,
                loopCount: 500,
                showCursor: false,
                cursorChar: "|",
                attr: null,
                contentType: 'html',
            });
        }
      
    });
    //define variable for store last scrolltop
    var lastScrollTop = '';
    $(window).on('scroll', function () {
        /*---------------------------
            back to top show / hide
        ---------------------------*/
       var ScrollTop = $('.back-to-top');
       if ($(window).scrollTop() > 800) {
           ScrollTop.fadeIn(1000);
       } else {
           ScrollTop.fadeOut(1000);
       }
       /*--------------------------
        sticky menu activation
       ---------------------------*/
        var st = $(this).scrollTop();
        var mainMenuTop = $('.navbar-area');
        if ($(window).scrollTop() > 1000) {
            if (st > lastScrollTop) {
                // hide sticky menu on scrolldown 
                mainMenuTop.removeClass('nav-fixed');
                
            } else {
                // active sticky menu on scrollup 
                mainMenuTop.addClass('nav-fixed');
            }

        } else {
            mainMenuTop.removeClass('nav-fixed ');
        }
        lastScrollTop = st;
       
    });
           
    $(window).on('load',function(){
        /*-----------------------------
            preloader
        -----------------------------*/
        var preLoder = $("#preloader");
        preLoder.fadeOut(1000);
        /*-----------------------------
            back to top
        -----------------------------*/
        var backtoTop = $('.back-to-top')
        backtoTop.fadeOut(100);
    });

}(jQuery));	