$(document).ready(function() {
    var curtains = $(".curtains");

    curtains.load("src/partials/curtains.html", function() {        
        $("#cutrains").on("click", function() {
            // TODO: remove parallax-mirror after moving to alternate solution for parallax
            $("main, .parallax-mirror").hide();            
            curtains.show();
            if (!$(this).hasClass("active")) {
                Utils.toggleMenuStyles(this);
            }
            $(".owl-carousel").owlCarousel({loop: false});
        });
    });
}); 