
$(document).ready(function() {
   function toggleNavbarMethod() {
       if ($(window).width() > 768) {
           $('.navbar .dropdown').on('mouseover', function(){
               if($('li.dropdown').hasClass( "open" )){
                  // $('.dropdown-toggle', this).trigger('click');
               }
               else {
                  $('.dropdown-toggle', this).trigger('click');
               }
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
   
   // Carousel Green Box
   $('.carousel-green-box').css({
//      'width': '290px',
//      'float': 'right'
      });
   
});


// Open the Navbar Menu with hover
// $('.dropdown-menu').on({
//    mouseenter: function() {
//       console.log('enter');
//       if ( !$('.dropdown').hasClass('active') ) {
//         $('.dropdown').addClass('active');
//       }
//    },
//    mouseleave: function() {
//       var $self = $(this);
//          console.log('bye!');
//          if ( $('.dropdown').hasClass('open') ) {
//           $('.dropdown').addClass('active');
//         }
//          else if ( $('.dropdown').hasClass('active') ) {
//           $('.dropdown').removeClass('active');
//         }
//         else {
//           $('.dropdown').removeClass('active');
//         }
//    }
// })

// $( ".dropdown" ).click(function() {
//   if ( !$('.dropdown').hasClass('open') ) {
//     $('.dropdown').addClass('active');
//   }
//   else {
//     $('.dropdown').removeClass('active');
//   }
// });
