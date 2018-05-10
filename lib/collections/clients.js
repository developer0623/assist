Clients = new Mongo.Collection('clients');

Meteor.methods({
	addClient: function(clientAttr) {
		var clientId = Clients.insert(clientAttr);
		return {
			_id: clientId
		};
	}
});

Meteor.methods({
	updateUser: function(attr) {
		console.log(Meteor.user()._id);
		Meteor.users.update({_id: Meteor.user()._id}, {$set:{"emails":[{address: attr.email}], "profile": {firstname: attr.firstname, lastname: attr.lastname, username: attr.username, location: attr.location, role: attr.role}}});
		return true;
	}
})