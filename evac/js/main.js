

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


