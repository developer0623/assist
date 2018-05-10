Template.searchCareGiver.rendered = function(){
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

Template.searchCareGiver.onCreated(function() {
	// We can use the `ready` callback to interact with the map API once the map is ready.
	GoogleMaps.ready('exampleMap', function(map) {
		// Add a marker to the map once it's ready
		var marker_pos1 = map.options.center;

		var marker1 = new google.maps.Marker({
			position: {lat: -37.83, lng: 144.96},
			map: map.instance,
			icon: {
				url: '/marker.png',
				scaledSize: new google.maps.Size(32, 42),
				origin: new google.maps.Point(0, 0),
				anchor: new google.maps.Point(0, 0)
			}
		});

		var marker2 = new google.maps.Marker({
			position: {lat: -37.8137, lng: 144.92},
			map: map.instance,
			icon: {
				url: '/marker.png',
				scaledSize: new google.maps.Size(32, 42),
				origin: new google.maps.Point(0, 0),
				anchor: new google.maps.Point(0, 0)
			}
		});

		var marker3 = new google.maps.Marker({
			position: {lat: -37.8538, lng: 144.88},
			map: map.instance,
			icon: {
				url: '/marker.png',
				scaledSize: new google.maps.Size(32, 42),
				origin: new google.maps.Point(0, 0),
				anchor: new google.maps.Point(0, 90)
			}
		});

		var marker4 = new google.maps.Marker({
			position: {lat: -37.8746, lng: 144.97},
			map: map.instance,
			icon: {
				url: '/marker.png',
				scaledSize: new google.maps.Size(32, 42),
				origin: new google.maps.Point(0, 0),
				anchor: new google.maps.Point(0, 0)
			}
		});

		var marker5 = new google.maps.Marker({
			position: {lat: -37.8346, lng: 144.91},
			map: map.instance
		});

		google.maps.event.addListener(map.instance, 'click', function(event) {
			console.log(event);
		});

		google.maps.event.addListener(marker1, 'click', function() {
			Router.go('careGiver');
		});
	});
});

Template.searchCareGiver.helpers({
	exampleMapOptions: function() {
		// Make sure the maps API has loaded
		if (GoogleMaps.loaded()) {
			// Map initialization options
			return {
				center: new google.maps.LatLng(-37.8136, 144.9631),
				zoom: 12
			};
		}
	}
});