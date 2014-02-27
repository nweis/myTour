// Filename: app.js
define([
  'jquery',
  'jqm',
  'underscore', 
  'backbone',
  'router', // Request router.js
], function($, _, jqm, Backbone, Router){
  var initialize = function(){
    // Pass in our Router module and call it's initialize function
    this.router = new Router();
  };

  return { 
    initialize: initialize
  };
});
