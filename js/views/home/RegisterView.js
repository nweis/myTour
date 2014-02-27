define([
  'jquery',
  'jqm',
  'underscore',
  'backbone',
  'text!templates/home/registerTemplate.html'
], function($, jqm, _, Backbone, registerTemplate){

  var RegisterView = Backbone.View.extend({
    
    initialize:function(router) {
      this.router = router;
    },

    events: {
      "click #registerButton" : "register",
      "click #login-tab" : "login",
    },

    render: function(){
      this.$el.html(registerTemplate);
    },

    register:function(event) {
        event.preventDefault(); // Don't let this button submit the form

        // Defines the url where to post the login-data to
        var url = '/api/register';
        console.log('Loggin in... ');

        // Make the login values a JSON-Object
        var registerValues = $(event.currentTarget).serializeObject();

        $.ajax({
            url:url,
            type:'POST',
            dataType:"json",
            data: registerValues,
            success:function (data) {
                console.log(["Login request details: ", data]);
               
                if(data.error) {  // If there is an error, show the error messages
                    $('.alert-error').text(data.error.text).show();
                }
                else { // If not, send them back to the home page
                    window.location.replace('#');
                }
            }
        });
    },

    login:function() {
      console.log("Routing to login.");
      this.router.navigate('login', {trigger: true});
    },

  
  });

  return RegisterView;
});
