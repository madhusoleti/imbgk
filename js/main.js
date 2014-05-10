


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
			$(this).find('span').slideUp(200, function(){
				$this.find('img').slideDown();	
			});				
		}
	});
	$("#app-nav-menu").on('mouseleave', "a", function (e) {
		$this = $(this);
		if(!($(this).hasClass('active'))){
			//$("#app-nav-menu a").find('img').slideUp(200);
			//$("#app-nav-menu a").find('span').slideDown(200);
			$(this).find('img').slideUp(200, function () {
				$this.find('span').slideDown();	
			});	


		}
	});

	$(".applications").on('click', 'a', function (e) {
		e.preventDefault();
		$(this).removeClass('current');
		$(this).addClass('current');
		var app_img_url = $(this).attr('data-img-src');
		var title = $(this).attr('data-title');
		var app_ext_url = $(this).attr('data-url');
		var img = $('#f_gallery');
		
		$(".bf_heading h2").text(title);
		$(".bf_link a").attr('href', app_ext_url);
		img.attr('src', app_img_url);		
		$(".overlay-bg").show('scale', {percent:0,direction:'left'}, function(){
			$("#popup_box").show(500);
		});
		
		$(".fp_galleryList").css({
			"opacity": "0.3","background":"gray"  
		});
	});

	//Press esc to close the large image.
	$(document).keyup(function(e){
		 if(e.keyCode==27){
			 hide_popup();
		}
	});
	$("#popupBoxClose").click(function(){
		hide_popup();		
	});

	//click on right side arrow to view next large image.
	$(".bf_next").click(function(){
		var current = $(".applications a.current");
		if(current.closest('li').next().find('a').length > 0)
			var next = current.closest('li').next().find('a');
		else
			var next = $('.applications a:first');
		$(".applications a.current").removeClass('current');
		next.addClass('current');	
		
		var app_img_url = next.attr('data-img-src');
		var title = next.attr('data-title');
		var app_ext_url = next.attr('data-url');	
		var img = $('#f_gallery');
		$(".bf_heading h2").text(title);
		$(".bf_link a").attr('href',app_ext_url);
		img.hide('slide',{direction:'left'},100,function(){			
			img.show('slide',{direction:'right'},100);
			img.attr('src',app_img_url);
		});		
	});
	//click on left side arrow to view previous large image.
	$(".bf_prev").click(function(){
		var current = $(".applications a.current");
		if(current.closest('li').prev().find('a').length > 0)
			var previous = current.closest('li').prev().find('a');
		else
			var previous = $(".applications a:last");
		
		$(".applicationsa.current").removeClass('current');
		previous.addClass('current');	
		var app_img_url = previous.attr('data-img-src');
		var title = previous.attr('data-title');
		var app_ext_url = previous.attr('data-url');	
		var img = $('#f_gallery');
		$(".bf_heading h2").text(title);
		$(".bf_link a").attr('href', app_ext_url);
		img.hide('slide',{direction:'right'},100,function(){
			img.show('slide',{direction:'left'},100);
			img.attr('src', app_img_url);
		});	
	});

	$("#view-more a").click(function(){
		$(this).hide();
			$("#f_gallery").hide('slide',{direction:'up'},200,function(){
			$("#features").show('slide',{direction:'down'},200);	
			$("#view-back a").show();
		});	
	});
	$("#view-back a").click(function(){
		$(this).hide();
			$("#features").hide('slide',{direction:'up'},200,function(){
			$("#f_gallery").show('slide',{direction:'down'},200);	
			$("#view-more a").show();
		});	
			
	});
	$("#screen").click(function(){
		$("#salient").removeClass('active');
		$(this).addClass('active');
		$("#features").hide('slide',{direction:'down'},200,function(){
			
			$("#f_gallery").show('slide',{direction:'up'},200);	
			
		});			
	});
	$("#salient").click(function(){
		$("#screen").removeClass('active');
		$(this).addClass('active');
		$("#f_gallery").hide('slide',{direction:'down'},200,function(){
			
			$("#features").show('slide',{direction:'up'},200);	
			
		});
	});
	$(".menu #ss").click(function(){
		$("#screen").addClass('active');
		$("#salient").removeClass('active');
		$(this).css({"opacity":"0.8","pointer-events":"none"});
		$("#features").hide('slide',{direction:'down'},200,function(){
			$(".menu #fs").css({"opacity":"1","pointer-events":"auto"});
			$("#f_gallery").show('slide',{direction:'up'},200);	
		});	
	})

	$(".menu #fs").click(function(){
		$(this).css({"opacity":"0.8","pointer-events":"none"});
		$("#salient").addClass('active');
		$("#screen").removeClass('active');
		$("#f_gallery").hide('slide',{direction:'down'},200,function(){
			$(".menu #ss").css({"opacity":"1","pointer-events":"auto"});
			$("#features").show('slide',{direction:'up'},200);	
			
		});	
	})
	

});

function hide_popup(){
	$(".overlay-bg").hide('scale',{percent:0,direction:'left'},500);
	$("#popup_box").hide();
    $("body").css({
		"opacity": "1"
	});
}