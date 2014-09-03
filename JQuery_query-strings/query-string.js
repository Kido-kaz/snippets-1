$(document).ready( function() {
    
/* ====================================================================================
    
                                        QUERY STRING
    
    ==================================================================================== */
    
        // Retrieve variable values from query string
    
        function getQueryVariable(variable)
        {
               var query = window.location.search.substring(1);
               var vars = query.split("&");
               for (var i=0;i<vars.length;i++) {
                       var pair = vars[i].split("=");
                       if(pair[0] == variable){return pair[1];}
               }
               return(false);
        }
        
       var user = getQueryVariable("userName"),
           emailAd = getQueryVariable("email");
        
        
        // Use the value to welcome the user
        
        $(".some-html-element").text("Welcome back, " + user);
        $(".some-html-element").text("You are logged in with the following email address: " + emailAd);



    
});
