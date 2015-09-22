

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

$(document).ready(function() {
   function toggleNavbarMethod() {
       if ($(window).width() > 768) {
         setTimeout(function(){
           $('.navbar .dropdown').on('mouseover', function(){
               $('.dropdown-toggle', this).trigger('click');
           }).on('mouseout', function(){
               $('.dropdown-toggle', this).trigger('click').blur();
           });
         }, 1800);
       }
       else {
           $('.navbar .dropdown').off('mouseover').off('mouseout');
       }
   }
   toggleNavbarMethod();
   $(window).resize(toggleNavbarMethod);
}); 