Template.navigation.rendered = function(){

    // Initialize metisMenu
    $('#side-menu').metisMenu();

};

// Used only on OffCanvas layout
Template.navigation.events({

    'click .close-canvas-menu' : function(){
        $('body').toggleClass("mini-navbar");
    }

});

Template.navigation.helpers({
	username: function () {
		if(Meteor.user())
			return Meteor.user().profile.firstname + " " + Meteor.user().profile.lastname;
		return "";
	},
	organization: function () {
		if(Meteor.user())
			return Meteor.user().profile.username;
		return "";
	}
});