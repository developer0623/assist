Template.topNavigation.events({
	'click #logout': function(event) {
		Meteor.logout();
		Router.go('login');
	}
});