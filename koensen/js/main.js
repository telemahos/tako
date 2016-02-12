
$( document ).ready( function() {
   function toggleNavbarMethod() {
       if ( $( window ).width() > 768 ) {
           $( '.navbar .dropdown' ).on( 'mouseover', function() {
               if ( $( 'li.dropdown' ).hasClass( "open" ) ){
                  // Do Nothing
               }
               else {
                  $( '.dropdown-toggle', this).trigger( 'click' );
               }
           }).on( 'mouseout', function() {
                  $( '.dropdown-toggle', this ).trigger( 'click' ).blur();
           });
       }
       else {
           $( '.navbar .dropdown' ).off( 'mouseover' ).off( 'mouseout' );
       }
   }
   toggleNavbarMethod();
   $( window ).resize( toggleNavbarMethod );
});
