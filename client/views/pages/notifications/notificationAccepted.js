Template.notificationAccepted.rendered = function(){
	$('#page-wrapper').css('padding', '0px');
	$('.navbar-static-top').css('margin-left', '0px');
	GoogleMaps.load();
};

Template.notificationAccepted.helpers({
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