


$(function () {
	//Application Menu Hide/Show based on user click
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

	$('#contactus').delay(1000).animate({"right":-264},800,function(){
			$(this).css({"transform":"rotate(15deg)"})
	});
	$('#contactus').bind({
		mouseenter: function(e) {
			$(this).css({"transform":"rotate(0deg)"}).stop(true).animate({"right":0},800);
		},
		mouseleave: function(e) {		
			if($(this).hasClass('active') == false)
			{
				$(this).stop(true).animate({"right":-264},800,function(){
					$(this).css({"transform":"rotate(15deg)"});
				});	
			}			
		}
	});
	$(document).on('click', "#contactus", function (e) {
		if(!($(this).hasClass('active')))
		{
			$(this).addClass('active');
			$(this).css({"transform":"rotate(0deg)"}).stop(true).animate({"right":0},800);
		}
		else{
			$(this).stop(true).animate({"right":-264},800,function(){
				$(this).css({"transform":"rotate(15deg)"});
			});	
			$(this).removeClass('active');		
		}
		
	});

	$("#app-nav-menu").on('mouseenter', "a", function (e) {
		$this = $(this);
		if(!($(this).hasClass('active'))){
			$(this).find('span').slideUp(500, function(){
				$this.find('img').slideDown();	
			});				
		}
	});
	$("#app-nav-menu").on('mouseleave', "a", function (e) {
		$this = $(this);
		if(!($(this).hasClass('active'))){
			$(this).find('img').slideUp(500, function () {
				$this.find('span').slideDown();	
			});	
		}
	});

});