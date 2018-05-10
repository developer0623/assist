Template.bookings.rendered = function(){
	$('#page-wrapper').css('padding', '0px 15px');
	$('.navbar-static-top').css('margin-left', '0px');
    $('.footable').footable();
};

Template.bookings.events({
	'click .trBooking': function(event) {
		var idStr = event.target.parentElement.id;
		if(idStr) {
			var id = (idStr.replace("trBooking", ""));
			location.href = "/bookingView/" + id;
		}
	}
});