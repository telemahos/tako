

jQuery(function($){
				
	$.supersized({

		// Functionality
		slideshow   :   0,		//Slideshow on/off
												   
		// Components
		slides 		:  	[			// Slideshow Images
				// {image : 'http://localhost/clients/tako/tpc/img/hg.jpg', title : 'Image Credit: Maria Kazvan'}
				{image : 'http://bootstrap4me.com/sandbox/tpc/img/hg.jpg', title : 'Image Credit: Maria Kazvan'}
				
		]
	});
});



$(document).ready(function() {
    function toggleNavbarMethod() {
        if ($(window).width() > 768) {
            $('.navbar .dropdown').on('mouseover', function(){
                $('.dropdown-toggle', this).trigger('click'); 
            }).on('mouseout', function(){
                $('.dropdown-toggle', this).trigger('click').blur();
            });
        }
        else {
            $('.navbar .dropdown').off('mouseover').off('mouseout');
        }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);
});


// $(function(){
//     $(".dropdown").hover(            
//             function() {
//                 $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
//                 $(this).toggleClass('open');
//                 $('b', this).toggleClass("caret caret-up");                
//             },
//             function() {
//                 $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
//                 $(this).toggleClass('open');
//                 $('b', this).toggleClass("caret caret-up");                
//             });
//     });


// (function ($, window, delay) {
//   var theTimer = 0;
//   var theElement = null;
//     var theLastPosition = {x:0,y:0};
//   $('[data-toggle]')
//     .closest('li')
//     .on('mouseenter', function (inEvent) {
//     if (theElement) theElement.removeClass('open');
//     window.clearTimeout(theTimer);
//     theElement = $(this);

//     theTimer = window.setTimeout(function () {
//       theElement.addClass('open');
//     }, delay);
//   })
//     .on('mousemove', function (inEvent) {
//         if(Math.abs(theLastPosition.x - inEvent.ScreenX) > 4 || 
//            Math.abs(theLastPosition.y - inEvent.ScreenY) > 4)
//         {
//             theLastPosition.x = inEvent.ScreenX;
//             theLastPosition.y = inEvent.ScreenY;
//             return;
//         }
        
//     if (theElement.hasClass('open')) return;
//     window.clearTimeout(theTimer);
//     theTimer = window.setTimeout(function () {
//       theElement.addClass('open');
//     }, delay);
//   })
//     .on('mouseleave', function (inEvent) {
//     window.clearTimeout(theTimer);
//     theElement = $(this);
//     theTimer = window.setTimeout(function () {
//       theElement.removeClass('open');
//     }, delay);
//   });
// })(jQuery, window, 0); 
// 200 is the delay in milliseconds
