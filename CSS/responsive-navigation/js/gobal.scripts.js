$(document).ready(function() {
            
    // When the menu button is clicked show the full menu

    var openClosed = 0, 
        responsiveMenu = $("#js_responsive_menu"), 
        menuBreakpoint = 468;

    $("#js_menu_btn").click( function() {
        $(".js-responsive-menu-item").slideToggle(500);  

        openClosed++;
        
        switch (openClosed) {
            case 1: 
                responsiveMenu.removeClass("js-menu-closed").addClass("js-menu-open");
            break;

            case 2:
                responsiveMenu.removeClass("js-menu-open").addClass("js-menu-closed");
                openClosed = 0;
            break;

            default:
            responsiveMenu.addClass("js-menu-closed");
        }

    });



    // When window is resized fix display of menu

    $(window).resize(function() {
        menuSwitch();
    });
    menuSwitch();

    function menuSwitch() {
        if(responsiveMenu.hasClass("js-menu-closed")) {
            if( $(window).width() > menuBreakpoint) {
                $(".js-responsive-menu-item").show();
                responsiveMenu.removeClass("js-menu-closed").addClass("js-menu-open");
            }
            else {
                $(".js-responsive-menu-item").hide();
            }
        }

        else if(responsiveMenu.hasClass("js-menu-open")) {
            $(".js-responsive-menu-item").hide().show();
            responsiveMenu.removeClass("js-menu-open").addClass("js-menu-closed");
        }
    }
});