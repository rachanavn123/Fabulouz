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
});
