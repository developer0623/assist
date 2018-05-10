Template.settings.rendered = function(){
	$('#page-wrapper').css('padding', '0px 15px');
	$('.navbar-static-top').css('margin-left', '0px');
    $('.footable').footable();
    $('#setting_form').parsley({trigger: 'change'});
};

Template.settings.helpers({
	currentUser: function() {
		return Meteor.user();
	}
});

Template.settings.events({
	'click #btnSave': function(event) {

		event.preventDefault();
		$('#errorMessage').hide();

		if($('#setting_form').parsley().validate() === false) {
			return false;
		}
		
		var surname = $('#surname').val();
		var firstname = $('#firstname').val();
		var location = $('#location').val();
		var organization_name = $('#organization_name').val();
		var email = $('#email').val();
		var role = $('#role').val();
		var password = $('#password').val();
		var opassword = $('#oldpassword').val();
		var cpassword = $('#confirm_password').val();		

		if(password == "" && opassword != "") {
			$('#errorMessage').show();
			$('#errorMessage').html('Password should not be blank.');
			return false;
		}

		if(password != cpassword && opassword != "") {
			$('#errorMessage').show();
			$('#errorMessage').html('Password does not match!');
			return false;
		}
		
		Meteor.call('updateUser', {'lastname': surname, 'firstname': firstname, 'location': location, 'username': organization_name, 'email': email, 'role': role}, function(error, data) {
			if(opassword != "") {
				Accounts.changePassword(opassword, password, function(err, data) {
					if(err) {
						$('#errorMessage').show();
						$('#errorMessage').html('Old password is not correct.');
					}
				});
			}
		});
	}
});
