Template.accounts.rendered = function(){
	$('#page-wrapper').css('padding', '0px 15px');
	$('.navbar-static-top').css('margin-left', '0px');
    $('.footable').footable();
};

Template.accounts.events({
	'click .trAccount': function(event) {
		var idStr = event.target.parentElement.id;
		if(idStr) {
			var id = (idStr.replace("trAccount", ""));
			console.log(id);
			location.href = "/accountView/" + id;
		}
	}
});