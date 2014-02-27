define([
	'jquery',
	'jqm',
	'underscore',
	'backbone',
	'router'
], function($, jqm, _, Backbone, router) {

	User = Backbone.Model.extend({

		initialize:function(router) {
			this.router = router;
		},

		// Default attributes for the user
		defaults: {
			username: 'anonymous',
			password: '',
			group_id: 0,
			loggedIn: false
		},

		// Checks whether the user is logged in
		isUserLoggedIn: function () {
			if(this.get('loggedIn')) {
				this.router.navigate('tours', {trigger: true});
			}else{
				this.router.navigate('login', {trigger: true});
			}
		}
	});

	return User;
});