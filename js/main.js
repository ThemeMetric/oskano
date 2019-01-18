/**
* -----------------------------------------------------------------------------
* Template : Oskano - Responsive Business HTML5 Template 
* Author : ThemeMetric
* Author URI : https://www.thememetric.com/

* -----------------------------------------------------------------------------
*
**/
(function($) {
  "use strict";

  // sticky menu
  var header = $('.menu-sticky');
  var win = $(window);
  win.on('scroll', function() {
     var scroll = win.scrollTop();
     if (scroll < 150) {
         header.removeClass("sticky");
	   header.addClass("header2");
     } else {
         header.addClass("sticky");
	   header.removeClass("header2");
     }
  }); 

  //One Page Menu
  if ($.fn.onePageNav) {
      $("#one_page").onePageNav({
          currentClass: "current-menu-item"
      });
  }

  //Onepage Footer
  $( ".maps-icon" ).on('click', function(e) {
      $( "#googleMap" ).toggleClass( "active", 2000 );  // Toggles class with delay of 2sec
  });

	//tooltip
  $('[data-toggle="tooltip"]').tooltip();


  //Minicart
  if ($('.cart-icons').length) {
    $('.cart-icons').on('click', function(e) {
      $('.minicart-details').toggleClass("show-cartmenu"); 
      e.preventDefault();
    });
  }

  //Testimonials
    if ($('#carousel').length) {
        $('#carousel').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            directionNav: false,
            slideshow: false,
            itemWidth: 100,
            itemMargin: 0,
            asNavFor: '#slider'
        });
    }
    if ($('#slider').length) {
        $('#slider').flexslider({
            animation: "fade",
            controlNav: false,
            directionNav: false,
            animationLoop: false,
            slideshow: true,
            sync: "#carousel"
        });
	 }
  // collapse hidden
  $(function(){ 
       var navMain = $(".navbar-collapse"); // avoid dependency on #id
       // "a:not([data-toggle])" - to avoid issues caused
       // when you have dropdown inside navbar
       navMain.on("click", "a:not([data-toggle])", null, function () {
           navMain.collapse('hide');
       });
   });

  var owl = $('#home-slider');
    owl.owlCarousel({
      loop:true,
      margin:0,
      items:1,
      autoplay:true,
      navSpeed: 1200,
      smartSpeed: 2000, 
      dots: true,
      nav:true,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    });
    // add animate.css class(es) to the elements to be animated
    function setAnimation ( _elem, _InOut ) {
      // Store all animationend event name in a string.
      // cf animate.css documentation
      var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

      _elem.each ( function () {
        var $elem = $(this);
        var $animationType = 'animated ' + $elem.data( 'animation-' + _InOut );

        $elem.addClass($animationType).one(animationEndEvent, function () {
          $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
        });
      });
  }

  // Fired before current slide change
    owl.on('change.owl.carousel', function(event) {
        var $currentItem = $('.owl-item', owl).eq(event.item.index);
        var $elemsToanim = $currentItem.find("[data-animation-out]");
        setAnimation ($elemsToanim, 'out');
    });

  // Fired after current slide has been changed
    owl.on('changed.owl.carousel', function(event) {

        var $currentItem = $('.owl-item', owl).eq(event.item.index);
        var $elemsToanim = $currentItem.find("[data-animation-in]");
        setAnimation ($elemsToanim, 'in');
    })
    
  /*-------------------------------------
     OwlCarousel
     -------------------------------------*/
    if ($('.tm-carousel').length) {
      $('.tm-carousel').each(function() {
          var owlCarousel = $(this),
          loop = owlCarousel.data('loop'),
          items = owlCarousel.data('items'),
          margin = owlCarousel.data('margin'),
          stagePadding = owlCarousel.data('stage-padding'),
          autoplay = owlCarousel.data('autoplay'),
          autoplayTimeout = owlCarousel.data('autoplay-timeout'),
          smartSpeed = owlCarousel.data('smart-speed'),
          dots = owlCarousel.data('dots'),
          nav = owlCarousel.data('nav'),
          navSpeed = owlCarousel.data('nav-speed'),
          xsDevice = owlCarousel.data('mobile-device'),
          xsDeviceNav = owlCarousel.data('mobile-device-nav'),
          xsDeviceDots = owlCarousel.data('mobile-device-dots'),
          smDevice2 = owlCarousel.data('ipad-device2'),
          smDeviceNav2 = owlCarousel.data('ipad-device-nav2'),
          smDeviceDots2 = owlCarousel.data('ipad-device-dots2'),
          smDevice = owlCarousel.data('ipad-device'),
          smDeviceNav = owlCarousel.data('ipad-device-nav'),
          smDeviceDots = owlCarousel.data('ipad-device-dots'),
          mdDevice = owlCarousel.data('md-device'),
          mdDeviceNav = owlCarousel.data('md-device-nav'),
          mdDeviceDots = owlCarousel.data('md-device-dots');
          owlCarousel.owlCarousel({
              loop: (loop ? true : false),
              items: (items ? items : 4),
              lazyLoad: true,
              margin: (margin ? margin : 0),
              //stagePadding: (stagePadding ? stagePadding : 0),
              autoplay: (autoplay ? true : false),
              autoplayTimeout: (autoplayTimeout ? autoplayTimeout : 1000),
              smartSpeed: (smartSpeed ? smartSpeed : 250),
              dots: (dots ? true : false),
              nav: (nav ? true : false),
              navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
              navSpeed: (navSpeed ? true : false),
              responsiveClass: true,
              responsive: {
                  0: {
                      items: (xsDevice ? xsDevice : 1),
                      nav: (xsDeviceNav ? true : false),
                      dots: (xsDeviceDots ? true : false)
                  },
                  768: {
                      items: (smDevice2 ? smDevice : 2),
                      nav: (smDeviceNav2 ? true : false),
                      dots: (smDeviceDots2 ? true : false)
                  },
                  992: {
                      items: (smDevice ? smDevice : 3),
                      nav: (smDeviceNav ? true : false),
                      dots: (smDeviceDots ? true : false)
                  },
                  1200: {
                      items: (mdDevice ? mdDevice : 4),
                      nav: (mdDeviceNav ? true : false),
                      dots: (mdDeviceDots ? true : false)
                  }
              }
          });

      });
    }

  /*-------------------------------------
     Videos popup
  -------------------------------------*/
  	var popupvideos = $('#play-video');
  		if(popupvideos.length){
	       $('#play-video').magnificPopup({
           disableOn: 700,
           type: 'iframe',
           mainClass: 'mfp-fade',
           removalDelay: 160,
           preloader: false,
        });
  }
  var popupvideos = $('#play-video2');
  if(popupvideos.length){
     $('#play-video2').magnificPopup({
       disableOn: 700,
       type: 'iframe',
       mainClass: 'mfp-fade',
       removalDelay: 160,
       preloader: false,
    });
}

  // image popup
	var imaggepoppup = $('.image-popup');
	if(imaggepoppup.length){
  		$('.image-popup').magnificPopup({
  			type: 'image',
  			callbacks: {
  				beforeOpen: function() {
  				   this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure animated pulse');
  				}
  			},
  			gallery: {
  				enabled: true
  			}
  		});
	}

  /*-------------------------------------
      Counter Up 
  -------------------------------------*/
  var counternumber = $('.counter-number');
  if(counternumber.length){
      $('.counter-number').counterUp({
          delay: 15,
          time: 1000
      });
  }
  //Accordion one Item always open
	var whychoose = $('.panel-heading a');
	if(whychoose.length){
		$('.panel-heading a').on('click',function(e){
			if($(this).parents('.panel').children('.panel-collapse').hasClass('in')){
				e.preventDefault();
				e.stopPropagation();
			}
		});
	}
  // wow init
  new WOW().init();

  // image loaded portfolio init
	var portfoliofilter = $('.portfolio-filter');
	if(portfoliofilter.length){
		$('.grid').imagesLoaded(function() {
			$('.portfolio-filter').on('click', 'button', function() {
				var filterValue = $(this).attr('data-filter');
				$grid.isotope({
					filter: filterValue
				});
			});
			var $grid = $('.grid').isotope({
				itemSelector: '.grid-item',
				percentPosition: true,
				masonry: {
					columnWidth: '.grid-item',
				}
			});
		});
	}

  // portfolio Filter
  var filterbutton = $('.portfolio-filter button');
  if(filterbutton.length){
    $('.portfolio-filter button').on('click', function(event) {
      $(this).siblings('.active').removeClass('active');
      $(this).addClass('active');
      event.preventDefault();
    });
  }

  // Skillbar JS
  var skillbarid = $('.skillbar');
	if(skillbarid.length){
    $('.skillbar').skillBars({
      from: 0,
      speed: 4000, 
      interval: 100,
      decimals: 0,
    });
  } 

  //Slide search bar
  if ($('.seach_bar').length) {
    $('.seach_bar').on("click", function (){
      $('.search_box').slideToggle();
    });
  }

  // scrollTop init
  var totop = $('#scrollUp');    
  win.on('scroll', function() {
      if (win.scrollTop() > 150) {
          totop.fadeIn();
      } else {
          totop.fadeOut();
      }
  });
	
  totop.on('click', function() {
      $("html,body").animate({
          scrollTop: 0
      }, 500)
  });
	
	// Google Map
	if ($('#g-map').length) {
		var mapProp= {
        center:new google.maps.LatLng(51.508742, -0.120850),
        zoom:5,
    };
    var map=new google.maps.Map(document.getElementById("g-map"),mapProp);
	}	

  //Images Zoom
    var zoom_03_id = $('#zoom_03');
    if(zoom_03_id.length){
          $("#zoom_03").elevateZoom({gallery:'gal1', cursor: 'pointer', galleryActiveClass: 'active', imageCrossfade: true, loadingIcon: 'http://www.elevateweb.co.uk/spinner.gif'}); 
       
          $("#zoom_03").on("click", function(e) {  
              var ez =   $('#zoom_03').data('elevateZoom'); 
              $.fancybox(ez.getGalleryList());
               return false;
        });
    } 

  // Google Map
  if ($('#googleMap').length) {
      var initialize = function() {
          var mapOptions = {
              zoom: 10,
              scrollwheel: false,
              center: new google.maps.LatLng(23.782062, 90.416053),
              styles: [{
                  stylers: [{
                      saturation: -100
                  }]
              }]
          };
          var map = new google.maps.Map(document.getElementById("googleMap"),
              mapOptions);
          var marker = new google.maps.Marker({
              position: map.getCenter(),
              animation: google.maps.Animation.BOUNCE,
              icon: 'images/map-marker.png',
              map: map
          });
      }
      // Add the map initialize function to the window load function
      google.maps.event.addDomListener(window, "load", initialize);
  }
  
  /*-------------------------------------
        Home page main Slider
  -------------------------------------*/

  var owl = $('#main-slider');
  owl.owlCarousel({
      loop:true,
      margin:0,
      navSpeed:800,
      nav:true,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      items:1,
      autoplay:true,
      transitionStyle : "fade",
  });
    
  //preloader
    $(window).on( 'load', function() {
        $("#loader-wrapper").delay(2000).fadeOut(500);
        $(".spinner").on( 'click', function() {
        $("#loader-wrapper").fadeOut(500);
        })
    });
        

  // add animate.css class(es) to the elements to be animated
  function setAnimation ( _elem, _InOut ) {
    var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    _elem.each ( function () {
      var $elem = $(this);
      var $animationType = 'animated ' + $elem.data( 'animation-' + _InOut );
      $elem.addClass($animationType).one(animationEndEvent, function () {
        $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
      });
    });
  }

  // Fired before current slide change
  owl.on('change.owl.carousel', function(event) {
      var $currentItem = $('.owl-item', owl).eq(event.item.index);
      var $elemsToanim = $currentItem.find("[data-animation-out]");
      setAnimation ($elemsToanim, 'out');
  });

  // Fired after current slide has been changed
  owl.on('changed.owl.carousel', function(event) {

      var $currentItem = $('.owl-item', owl).eq(event.item.index);
      var $elemsToanim = $currentItem.find("[data-animation-in]");
      setAnimation ($elemsToanim, 'in');
  });
})(jQuery);