Meteor.publish('clients', function(attr) {
	return Clients.find();
});

Meteor.publish('myusers', function(attr) {
	return Meteor.users.find({});
});