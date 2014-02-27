define([
  'jquery',
  'jqm',
  'underscore',
  'backbone',
  'models/User',
  'views/home/LoginView',
  'views/home/RegisterView'
], function($, jqm, _, Backbone, User, LoginView, RegisterView) {
  
  var AppRouter = Backbone.Router.extend({

    // Router constructor
    initialize: function(){
      this.loginView = new LoginView(this);
      this.registerView = new RegisterView(this);
      this.user = new User(this);

      // Tell Backbone to listen for hashchange events
      Backbone.history.start();
    },    

    // Define routes
    routes: {
      '': 'home',
      'login' : 'login',
      'registration' : 'registration',
    },

    /// Define route actions ///
    // Home route
    home: function() {
       this.user.isUserLoggedIn();
    },
    // Login route
    login: function() {
      console.log("Welcome to the router - login route.");
      this.changePage(this.loginView);
    },

    registration:function() {
      console.log("Welcome to the router - registration route.");
      this.changePage(this.registerView);
    },

    changePage:function (page) {
        $("body").empty();
        
        $(page.el).attr('data-role', 'page');
        
        $("body").append($(page.el));

        page.render();
        $(":mobile-pagecontainer").pagecontainer("change", $(page.el), {transition: "pop", changeHash: false, reverse: false});
                
    }

  });

  return AppRouter;
});
