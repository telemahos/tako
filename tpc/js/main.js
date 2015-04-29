

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


