var services_required = [
	{'value': 'Domestic Assistance', 'name': 'domestic_assistance'},
	{'value': 'High Care', 'name': 'high_care'},
	{'value': 'Hoist Transfer', 'name': 'hoist_transfer'},
	{'value': 'Meal Preparation', 'name': 'meal_preparation'},
	{'value': 'Medication Prompt', 'name': 'medication_prompt'},
	{'value': 'Palliative Care', 'name': 'palliative_care'},
	{'value': 'Peg Feed', 'name': 'peg_feed'},
	{'value': 'Personal Care', 'name': 'personal_care'},
	{'value': 'Respite', 'name': 'respite'},
	{'value': 'Social Support', 'name': 'social_support'},
	{'value': 'Transport', 'name': 'transport'}
];

Template.addClient.events({
	'submit form': function(event) {

		event.preventDefault();

		$('#errorMessage').hide();

		if($('#client_form').parsley().validate() === false) {
			return false;
		}

		var surname = $('#surname').val();
		var firstname = $('#firstname').val();
		var street = $('#street').val();
		var suburb = $('#suburb').val();
		var postcode = $('#postcode').val();
		var state = $('#state').val();
		var country = $('#country').val();
		var care_plan = $('#care_plan').val();
		var medication = $('#medication').val();
		var progress_notes = $('#progress_notes').val();		
		var selected_services_required = [];

		for(var i = 0; i < services_required.length; i++) {
			if($('#' + services_required[i].name).prop('checked') == true) {
				selected_services_required.push(services_required[i].value);
			}
		}
		
		Meteor.call('addClient', {'surname': surname, 'firstname': firstname, 'suburb': suburb, 'service_required': selected_services_required, 'street': street, 'postcode': postcode, 'state': state, 'country': country, 'care_plan': care_plan, 'progress_notes': progress_notes}, function(error, data) {
			Router.go('clients');
		});
	}
});

Template.addClient.helpers({
	services_required: function () {
		return services_required;
	}
});

Template.addClient.rendered = function(){

	// Initialize i-check plugin
	$('.i-checks').iCheck({
		checkboxClass: 'icheckbox_square-green',
		radioClass: 'iradio_square-green'
	});

	$('#client_form').parsley({trigger: 'change'});
};