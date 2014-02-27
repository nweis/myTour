define([
  'jquery',
  'jqm',
  'underscore',
  'backbone',
  'router',
  'text!templates/home/loginTemplate.html'
], function($, jqm, _, Backbone, router, loginTemplate){

  var LoginView = Backbone.View.extend({

    initialize:function(router) {
      this.router = router;
    },

    events: {
      "click #loginButton": "login",
      "click #register-tab": "registration",
    },

    render: function(){
      this.$el.html(loginTemplate);
    },

    login:function (event) {
      event.preventDefault(); // Don't let this button submit the form

      // Defines the url where to post the login-data to
      var url = 'http://mytour.localhost/users/api_login';
      
      var username = $("#inputEmail").val();
      var password = $("#inputPassword").val();
      
      $.ajax({
          url:url,
          type:'POST',
          dataType: 'json',
          data: {
              'email': username,
              'password': password,
          },
          // Successful login
          success:function (data) {
              console.log(data);
          },
          // onError
          error:function(xhr, status, error) {
              // Set error msg
              $('#error-msg').html('Die Kombination aus Benutzername und Passwort konnte nicht gefunden werden.');

              // Call error popup
              $('#error-popup').popup('open');
          }
      });

    },

    registration:function() {
        // Route to registration
        console.log("Route to registration.");
        this.router.navigate('registration', {trigger: true});
    },  


  });

  return LoginView;
});
