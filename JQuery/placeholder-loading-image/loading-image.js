$(document).ready( function() {

    /* ====================================================================================

                                    LOADING HEAVY IMAGES

    ==================================================================================== */

    /*
     * 1. show loading placeholder image
     *
     * 2. When the main image is loaded remove the loading placeholder image
     *
     * 3. Remove the loading placeholder image
     */


    $('.js-loader-img').show(); //[1]

    $('.js-main-img').on('load', function(){ //[2]
        $('#'+ $(this).data('rel')).hide(); // [3]
        $(this).removeClass('js-hide-img').addClass('js-show-img');
    });

});
