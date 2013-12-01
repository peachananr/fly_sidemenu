/* ===========================================================
 * jquery-fly_sidemenu.js v1
 * ===========================================================
 * Copyright 2013 Pete Rojwongsuriya.
 * http://www.thepetedesign.com
 *
 * Recreate an iOS7 Airbnb Side Menu-like, but 
 * on the web using jQuery and CSS3
 *
 * https://github.com/peachananr/fly_sidemenu
 *
 * ========================================================== */

!function($){
  
  var defaults = {
    btnContent: "=",
    position: "left",
    customSelector: "li",
    hideButton: false
	};
	
	
  
  $.fn.fly_sidemenu = function(options){
    var settings = $.extend({}, defaults, options),
        el = $(this),
        animationClass = "flyInLeft";  
    
    $("body").addClass("fsm-body")
    switch (settings.position) { 
      case 'left': 
        animationClass = "flyInLeft"
      break;
      case 'right': 
        animationClass = "flyInRight"
      break;
      case 'top': 
        animationClass = "flyInTop"
      break;
      case 'bottom': 
         animationClass = "flyInBottom"
       break;
    }
    el.addClass("fsm-list").hide().find(settings.customSelector).addClass("animate "+ animationClass +" fsm-item")
    $( "body").wrapInner( "<div class='fsm-container fsm-" + settings.position + "'></div>");
    $("<nav id='fsm-sidebar' class='fsm-sidebar fsm-" + settings.position + "'>" + $('<div>').append(el.clone()).html() + "</nav>").prependTo("body");
    $( "body").wrapInner( "<div class='fsm-wrapper fsm-" + settings.position + "'></div>");
    if (settings.hideButton == false ) $("<a class='fsm-button fsm-" + settings.position + "' href='#'>" + settings.btnContent + "</a>").prependTo("#fsm-sidebar");
    
    $.fn.toggleMenu = function () {
  	  if ( $(".fsm-wrapper").is( ".open" ) ) {
        $(".fsm-container").unbind("click")
        $(".fsm-wrapper").removeClass("open");
        $(".fsm-wrapper").one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
          if ( !$(".fsm-wrapper").is( ".open" ) ) $(".fsm-container").attr("style", "")
        });

        $(".fsm-wrapper").one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
          if ( !$(".fsm-wrapper").is( ".open" ) ) $(".fsm-sidebar .fsm-list").hide();
           if (settings.position == "top" && settings.position == "bottom") $(".fsm-wrapper .fsm-sidebar").width("99%").width("100%") 
        });

      } else {
        $(".fsm-container").css({
          "cursor": "pointer",
          "overflow": "hidden",
          "max-height": $(window).height()
        }).bind("click", function(){
          $(this).unbind("click")
          $(".fsm-wrapper").removeClass("open");
          $(".fsm-wrapper").one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
            if ( !$(".fsm-wrapper").is( ".open" ) ) {
              $(".fsm-sidebar .fsm-list").hide()
              $(".fsm-container").attr("style", "")
            }
          });  
        })
        if (settings.position == "top" || settings.position == "bottom") {
          $(".fsm-wrapper").css({
            "-webkit-transform": "translate3d(0, " + ($(window).height() * -1) + "px, 0) !important",
            "-moz-transform": "translate3d(0, " + ($(window).height() * -1) + "px, 0) !important",
            "-o-transform": "translate3d(0, " + ($(window).height() * -1) + "px, 0) !important",
            "transform": "translate3d(0, " + ($(window).height() * -1) + "px, 0) !important"
          }).addClass("open");
        } else {
          $(".fsm-wrapper").addClass("open");
        }

        $(".fsm-wrapper").one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
          if ( $(".fsm-wrapper").is( ".open" ) ) $(".fsm-sidebar .fsm-list").show();
        });
      }
  	}
    
    $(".fsm-button").click(function() {
      el.toggleMenu();
      return false;
    });
    
    
    
    
    
  }
}(window.jQuery);

