


$(function () {
	$("#app-nav-menu").on('click', 'a', function(){
		$('.applications').fadeOut();
		var $this = $(this);
		
		if($this.hasClass('active')) 
		{
			$this.removeClass("active");			
		}
		else{
			$("#app-nav-menu a").removeClass('active');
			$($this.attr('data-toggle')).fadeIn();
			$this.addClass("active");	
		}
		
		
	});
});