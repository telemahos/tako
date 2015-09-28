// Toggle Header Contact Box
$(function(){
    $('#select').mouseenter(function(){
        $('#contact-option').show();
        $('.header-contact').addClass('header-contact-shadow');
        $('.header-contact ul').addClass('header-contact-shadow');
    });
    $('.header-contact').mouseleave(function(){
        $('.header-contact').removeClass('header-contact-shadow');
        $('.header-contact ul').removeClass('header-contact-shadow');
        $('#contact-option').hide();
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


