Template.messages.rendered = function(){

	$('#page-wrapper').css('padding', '0px 15px');
    $('.navbar-static-top').css('margin-left', '0px');
    // Set white background color for top navbar
    $('body').addClass('light-navbar');

    // Initialize i-check plugin
    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green',
    });
};

Template.messages.destroyed = function(){

    // Remove special class for background color
    $('body').removeClass('light-navbar');
};