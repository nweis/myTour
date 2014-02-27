// Require.js allows us to configure shortcut alias
require.config({
  paths: {
    jquery: 'libs/jquery-min',
    jqm: 'libs/jquery-mobile',
    underscore: 'libs/underscore-min',
    backbone: 'libs/backbone-min',
    templates: '../templates'
  },

  // Sets the configuration for your third party scripts that are not AMD compatible
  shim: {

      "backbone": {
            "deps": [ "underscore", "jquery" ],
            "exports": "Backbone"  //attaches "Backbone" to the window object
      }

  } // end Shim Configuration

});

require([
  // Load our app module and pass it to our definition function
  'app',

], function(App){
  $( document ).on( "mobileinit",
    // Set up the "mobileinit" handler before requiring jQuery Mobile's module
    function() {
    $.mobile.ajaxEnabled = false;
    $.mobile.linkBindingEnabled = false;
    $.mobile.hashListeningEnabled = false;
    $.mobile.pushStateEnabled = false;

    }
  );

  // Define ajax prefilter to route ajax requests to server
  var link = 'http://mytour.localhost';


  // The "app" dependency is passed in as "App"
  // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
  App.initialize();
});
