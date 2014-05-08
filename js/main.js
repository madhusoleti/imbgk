


$(function () {
	$("#app-nav-menu").on('click', 'a', function(){
		$('.applications').fadeOut();
		var $this = $(this);
		$($this.attr('data-toggle')).fadeIn();
	});
});