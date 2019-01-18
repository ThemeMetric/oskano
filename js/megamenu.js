/**
* -----------------------------------------------------------------------------
* Template : Oskano - Responsive Business HTML5 Template 
* Author : ThemeMetric
* Author URI : https://www.thememetric.com/

* -----------------------------------------------------------------------------
*
**/
(function ($) {
	
	
$.fn.menumaker = function(options) {  
 var mainmenu = $(this), settings = $.extend({
   format: "dropdown",
   sticky: false
 }, options);
 return this.each(function() {
   $(this).find(".button").on('click', function(){
     $(this).toggleClass('menu-opened');
     var mainmenu = $(this).next('ul');
     if (mainmenu.hasClass('open')) { 
       mainmenu.slideToggle().removeClass('open');
     }
     else {
       mainmenu.slideToggle().addClass('open');
       if (settings.format === "dropdown") {
         mainmenu.find('ul').show();
       }
     }
   });
   mainmenu.find('li ul').parent().addClass('has-sub');
multiTg = function() {
     mainmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
     mainmenu.find('.submenu-button').on('click', function() {
       $(this).toggleClass('submenu-opened');
       if ($(this).siblings('ul').hasClass('open')) {
         $(this).siblings('ul').removeClass('open').slideToggle();
       }
       else {
         $(this).siblings('ul').addClass('open').slideToggle();
       }
     });
   };
   if (settings.format === 'multitoggle') multiTg();
   else mainmenu.addClass('dropdown');
   if (settings.sticky === true) mainmenu.css('position', 'fixed');
resizeFix = function() {
  var mediasize = 991;
     if ($( window ).width() > mediasize) {
       mainmenu.find('ul').show();
     }
     if ($(window).width() <= mediasize) {
       mainmenu.find('ul').hide().removeClass('open');
     }
   };
   resizeFix();
   return $(window).on('resize', resizeFix);
 });
  };

  var url = window.location.href; 
    // passes on every "a" tag 
    $("#mainmenu ul a").each(function() {
            // checks if its the same on the address bar
        if(url == (this.href)) { 
            $(this).closest("li").addClass("active");
        }
    });

})(jQuery);

(function($){
$(document).ready(function(){
$("#mainmenu").menumaker({
   format: "multitoggle"
});
});
})(jQuery);
