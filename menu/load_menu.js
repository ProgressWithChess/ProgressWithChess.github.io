    $(function(){
      $("#menu_div").load("menu/menu.html", function () {  // The second argument of the load method is a callback function that executes once the html file in the first argument has been loaded. In this instance, it's necessary to do things this way. Otherwise, the menu js files load before the menu html and the menu doesn't animate.
        $.getScript("menu/jquery.smartmenus.min.js");
        $.getScript("menu/jquery.smartmenus.bootstrap.min.js");
      }); 
    });