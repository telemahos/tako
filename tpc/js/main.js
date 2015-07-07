

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
$('.dropdown-menu').on({
   mouseenter: function() {
      console.log('enter');
      if ( !$('.dropdown').hasClass('active') ) {
        $('.dropdown').addClass('active');
      }
   },
   mouseleave: function() {
      var $self = $(this);
      // setTimeout(function(){
         console.log('bye!');
         if ( $('.dropdown').hasClass('open') ) {
          $('.dropdown').addClass('active');
        }
         else if ( $('.dropdown').hasClass('active') ) {
          $('.dropdown').removeClass('active');
        }
        else {
          $('.dropdown').removeClass('active');
        }
      // }, 800);

   }
})

$( ".dropdown" ).click(function() {
  if ( !$('.dropdown').hasClass('open') ) {
    $('.dropdown').addClass('active');
  }
  else {
    $('.dropdown').removeClass('active');
  }
});


