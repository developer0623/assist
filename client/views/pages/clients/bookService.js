Template.bookService.rendered = function(){
	$('#page-wrapper').css('padding', '0px');
	$('.navbar-static-top').css('margin-left', '0px');
	$('.clockpicker').clockpicker();
	$('.book-service-date').datepicker({
		todayBtn: "linked",
		keyboardNavigation: false,
		forceParse: false,
		calendarWeeks: true,
		autoclose: true
	});

	GoogleMaps.load();
};

Template.bookService.helpers({
	exampleMapOptions: function() {
		// Make sure the maps API has loaded
		if (GoogleMaps.loaded()) {
			// Map initialization options
			return {
				center: new google.maps.LatLng(-37.8136, 144.9631),
				zoom: 14
			};
		}
	}
});

Template.bookService.events({
	'click .book-service-circle': function(event) {
		event.preventDefault();

		if(event.target.id) {
			$('#' + event.target.id + ' .book-service-circle-selected').show();
			$('#' + event.target.id + ' .book-service-circle-check').show();
		} else {
			$('#' + event.target.parentElement.id + ' .book-service-circle-selected').hide();
			$('#' + event.target.parentElement.id + ' .book-service-circle-check').hide();
		}
		
	},

	'click #btnSearch': function(event) {
		Router.go('searchCareGiver');
	}
});