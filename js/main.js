(function ($) {
	"use strict";

    jQuery(document).ready(function($){


			$('.homepage-slides').owlCarousel({
				items:1,
			    loop:true,
			    dots:false,
			    autoplay:false,
			    nav:true,
			    navText:['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>','<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
			});

			$('.product-promotion').owlCarousel({
				items:1,
			    loop:true,
			    dots:true,
			    autoplay:false,
			    nav:false,
			});

			$(".menu-trigger").on("click", function(){
				$(".off-canvas-menu, .off-canvas-overlay").addClass("active");
				return false;


			});

			$(".menu-close, .off-canvas-overlay").on("click", function(){
				$(".off-canvas-menu, .off-canvas-overlay").removeClass("active");
				return false;


			});


        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));