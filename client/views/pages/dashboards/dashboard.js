Template.dashboard.rendered = function(){
	$('#page-wrapper').css('padding', '0px 15px');
	$('.navbar-static-top').css('margin-left', '0px');
    $('.footable').footable();
};


Template.dashboard.events({
	'click .trAccount': function(event) {
		var idStr = event.target.parentElement.id;
		if(idStr) {
			var id = (idStr.replace("trAccount", ""));
			location.href = "/accountView/" + id;
		}
	},
	'click .trBooking': function(event) {
		var idStr = event.target.parentElement.id;
		if(idStr) {
			var id = (idStr.replace("trBooking", ""));
			location.href = "/bookingView/" + id;
		}
	},
	'click .trMessage': function(event) {
		var idStr = event.target.parentElement.id;
		if(idStr) {
			var id = (idStr.replace("trMessage", ""));
			location.href = "/messageView/" + id;
		}
	},
	'click .trNotification': function(event) {
		var idStr = event.target.parentElement.id;
		if(idStr) {
			var id = (idStr.replace("trNotification", ""));
			if(id.substr(0, 3) == "Acc")
				location.href = "/notificationAccepted";
			else
				location.href = "/notifications";
		}
	}
});