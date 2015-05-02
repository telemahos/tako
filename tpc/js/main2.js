

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

// Open the Navbar Menu with hover
$('.dropdown').on({
   mouseenter: function() {
      console.log('enter');
      if(!$('.navbar-toggle').is(':visible')) { // disable for mobile view
        if(!$(this).hasClass('open')) { // Keeps it open when hover it again
            $('.dropdown-toggle', this).trigger('click');
        }
      }
   },
   mouseleave: function() {
      var $self = $(this);
      setTimeout(function(){
         console.log('bye!');
         // $self.removeClass('open');
         // setInactive();
      }, 800);

   }
})

// $(document).ready(function() {
//      function toggleNavbarMethod() {
//          console.log($(window).width());
//          console.log("width > 768");
//          $('ul.nav li.dropdown').hover(function() {
//             $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
//             $(this).addClass('active');
//          }, function() {
//             $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
//             $(this).removeClass('active');
//          });
//      }

//      $(window).on('load resize', function(){
//          // if(document.documentElement.clientWidth > 768) {
//          $('.dropdown').mouseenter(function(){
//             if(!$('.navbar-toggle').is(':visible')) {
//                toggleNavbarMethod();
//             }
//          });
//      });
// });

// $( document ).ready(function() {

//     $( 'ul.nav li.dropdown' ).hover(function() {
// // console.log("hover");
//         // you could also use this condition: $( window ).width() >= 768
//         if ($('.navbar-toggle').css('display') === 'none'
//             && false === ('ontouchstart' in document)) {
// // console.log("1");
//             $( '.dropdown-toggle', this ).trigger( 'click' );
//         }
//     }, function() {
//         if ($('.navbar-toggle').css('display') === 'none'
//             && false === ('ontouchstart' in document)) {
// // console.log("2");
//             $( '.dropdown-toggle', this ).trigger( 'click' );
//         }
//     });

// });

// $('.dropdown').mouseenter(function(){
//     if(!$('.navbar-toggle').is(':visible')) { // disable for mobile view
//         if(!$(this).hasClass('open')) { // Keeps it open when hover it again
//             $('.dropdown-toggle', this).trigger('click');
//         }
//     }
// });

// function setInactive()  {
//    $(".dropdown a").blur();
// }


