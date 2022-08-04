$(function ($) {
    "use strict";

    $('.food-menu-list').mixItUp();
    $('.food-menu-list2').mixItUp();

    //    global variable declare
    var $window = $(window);
    var html_body = $('html, body');

    //    preloader js start 
    $window.on('load', function () {
        setTimeout(function () {
            $('#preloader').fadeOut('slow', function () {});
        }, 600);
    });


    $(document).on('click','header ul li a, .layer-1-3 a', function (e) {
        var anchor = $(this).attr('href');
        var link = anchor.slice(0,1);
        if ('#' == link) {
            e.preventDefault();
            var top = $(anchor).offset().top;
            $('html, body').animate({
                scrollTop: $(anchor).offset().top
            }, 1500, 'easeInOutExpo');
            $(this).parent().addClass('active').siblings().removeClass('active');
        }
       
    });

    // Closes responsive menu when a scroll link is clicked
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

       //scrollspy menu
       $('body').scrollspy({
        target: '#navbarSupportedContent',
        offset:80
    });

    //  Main Slider
    var $mainSlider = $('.intro-carousel');
        $mainSlider.owlCarousel({
        loop: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        nav: true,
        dots:false,
        autoplay: false,
        autoplayTimeout: 6000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
                nav:false
            },
            768: {
                items: 1,
                nav:false,
            },
            960: {
                items: 1
            },
            1200: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    });

        
    // About Image Slider
    var $mainSlider = $('.about-img');
        $mainSlider.owlCarousel({
        loop: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        nav: true,
        dots:false,
        autoplay: false,
        autoplayTimeout: 6000,
        smartSpeed: 1200,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            960: {
                items: 1
            },
            1200: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    });



    //service part js start
    $('.serviceslider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: false,
        arrows: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    //team_slider js
    $('.team_slider').slick({

        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dot: false,
        speed: 1000,

        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 490,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    //Blog Slider js
    $('.blogSlider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dot: false,
        speed: 1000,

        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    //clientpart js start
    $('.clientslide').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: false,
        arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    });


    //testimonial part js start
    $('.testimonialslider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        dots: false,
        arrows: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]

    });


    //video part js start
    $('.venobox').venobox();
 

    // bottom to top js start
    var amountScrolled = 300;
    var bootomclass = $('.bottomtotop');
    bootomclass.hide();
    $window.scroll(function () {
        if ($window.scrollTop() > amountScrolled) {
            bootomclass.fadeIn('slow');
        } else {
            bootomclass.fadeOut('slow');
        }
    });

    bootomclass.on('click', function () {
        html_body.animate({
            scrollTop: 0
        }, 600);
        return false;
    });


    // counter up
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });


    //define variable for store last scrolltop
    var lastScrollTop = '';
    $(window).on('scroll', function () {
        var st = $(this).scrollTop();
        var mainMenuTop = $('.navigation');
        if ($(window).scrollTop() > 500) {
            if (st > lastScrollTop) {
                // hide sticky menu on scrolldown 
                mainMenuTop.removeClass('stiky-nav');
                
            } else {
                // active sticky menu on scrollup 
                mainMenuTop.addClass('stiky-nav');
            }

        } else {
            mainMenuTop.removeClass('stiky-nav');
        }
        lastScrollTop = st;
       
    });
         

});

