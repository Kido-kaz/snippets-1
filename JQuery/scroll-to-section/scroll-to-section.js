$(document).ready( function() {

    /* ====================================================================================

                                        SCROLL TO SECTION

    ==================================================================================== */


    // Navigate to certain sections on the page, based on the data-rel attribute.

    $(".js-section-nav").click(function(e) {
        e.preventDefault();
        $('html, body').stop().animate({ scrollTop: $('#'+ $(this).data('rel')).offset().top + 'px' }, 700);
      });







    /* ====================================================================================

                                        SCROLL TO TOP

    ==================================================================================== */


    var distance = $("#js_section_1").offset().top, $window = $(window);
    var firstSection = $("#js_section_1").height();
    var anim = 500;


            $window.scroll(function() {
                if ( $window.scrollTop() > distance + (firstSection /2) )
                {
                    $("#js_to_the_top").fadeIn(anim);
                } else {
                    $("#js_to_the_top").fadeOut(anim);
                }
            });


    $("#js_to_the_top").hide();
    $("#js_to_the_top").click(function(){
            $("html, body").animate({ scrollTop: 0 }, 700);
        return false
    })


});
