Template.login.events({
	'submit form': function(event) {
		event.preventDefault();
		$('#errorMessage').hide();
		var email = $('#email').val();
		var password = $('#password').val();

		Meteor.loginWithPassword(email, password, function(err) {
			if(err) {
				$('#errorMessage').show();
				$('#errorMessage').html(err.reason);
			} else {
				Router.go('dashboard');
			}
		});
	}
});