Template.register.events({
	'submit form': function(event) {
		event.preventDefault();
		$('#errorMessage').hide();

		if($('#register_form').parsley().validate() === false) {
			return false;
		}

		var email = $('#email').val();
		var password = $('#password').val();
		var username = $('#username').val();
		var firstname = $('#firstname').val();
		var lastname = $('#lastname').val();

		if($('#isAgree').prop('checked') == false) {
			$('#errorMessage').show();
			$('#errorMessage').html("Please agree to the Terms and Conditions.");
			return;
		}
		
		Accounts.createUser({email: email, password: password, profile: {username: username, firstname: firstname, lastname: lastname}}, function(err) {
			if(err) {
				$('#errorMessage').show();
				$('#errorMessage').html(err.reason);
			} else {
				Router.go('login');
			}
		});
	}
});

Template.register.rendered = function(){
    $('#register_form').parsley({trigger: 'change'});
};
