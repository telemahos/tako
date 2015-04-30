

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

            console.log($(window).width());

            if ($(window).width() > 768 ) {
                $('ul.nav li.dropdown').hover(function() {
                  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
                  $(this).addClass('active');
                }, function() {
                  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
                  $(this).removeClass('active');
                });
            }
            else {
                $('ul.nav li.dropdown').click(function() {
                  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
                  $(this).addClass('active');
                }, function() {
                  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
                  $(this).removeClass('active');
                });
            }
        }

        $(window).on('load resize', function(){
            toggleNavbarMethod();
        });
        // $( window ).resize(function() {
        //     toggleNavbarMethod();
        // });

        // toggleNavbarMethod();
        // $(window).on("resize",function() {
        //     return false;
        //     toggleNavbarMethod();
        // });






});

