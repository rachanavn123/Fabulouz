$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        nav : true, // Show next and prev buttons
        loop: true,
        items: 1,
        margin: 10,
        autoplay: true
        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false
    });

    // $("#collection-menu, #scocial-menu").on("click", function(e) {
    //     console.log("click");
    //     e.preventDefault();
    //     e.stopPropagation();
    // });

    function mediaSize() {
		if (window.matchMedia(
            '(min-width: 768px) and (max-width: 979px) and (orientation: portrait)')
            .matches) {
	    	$("#collectionLevel1, #collectionLevel2").addClass("in");
		} else {
            $("#collectionLevel1, #collectionLevel2").removeClass("in");
        }
	};

    /* Call the function */
    mediaSize();

    /* Attach the function to the resize event listener */
    window.addEventListener('resize', mediaSize, false);

    $('#nav-icon3').click(function(){
		$(this).toggleClass('open');
        $(".nav.nav-stacked").toggleClass("open");
	});
});
