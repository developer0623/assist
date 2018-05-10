Template.clients.rendered = function(){
	$('#page-wrapper').css('padding', '0px 15px');
	$('.navbar-static-top').css('margin-left', '0px');
    $('.footable').footable();
};

Template.clients.events({
	'click .trClient': function(event) {
		var idStr = event.target.parentElement.id;
		if(idStr) {
			var id = (idStr.replace("trClient", ""));
			location.href = "/clientView/" + id;
		}
	}
});