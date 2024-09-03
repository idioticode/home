/* =================================
------------------------------------
	Civic - CV Resume
	Version: 1.0
 ------------------------------------ 
 ====================================*/

 
$(window).on('load', function() { 
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut(); 
	$("#preloder").delay(100).fadeOut("slow");

});




(function($) {

	/*------------------
		Background set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});


	$('.review-slider').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		items: 1,
		autoplay: true,
		autoplayTimeout: 12000, // Time in milliseconds for each slide (5 seconds in this example)
	});
	

	$('.progress-bar-style').each(function() {
		var progress = $(this).data("progress");
		var prog_width = progress + '%';
		if (progress <= 100) {
			$(this).append('<div class="bar-inner" style="width:' + prog_width + '"><span>' + prog_width + '</span></div>');
		}
		else {
			$(this).append('<div class="bar-inner" style="width:100%"><span>' + prog_width + '</span></div>');
		}
	});


	$('.lan-prog').each(function() {
		var progress = $(this).data("lanprogesss");
		var ele      = '<span></span>';
		var ele_fade = '<span class="fade-ele"></span>';
		
		for (var i = 1; i <= 5; i++) {
			if(i <= progress){
				$(this).append(ele);
			} else {
				$(this).append(ele_fade);
			}
		}
	});


	/*------------------
		Popup
	--------------------*/
	$('.portfolio-item .port-pic').magnificPopup({
		type: 'image',
		mainClass: 'img-popup-warp',
		removalDelay: 500,
	});




if($().circleProgress){

	//Set progress circle 1
	$("#progress1").circleProgress({
		value: 0.95,
		size: 175,
		thickness: 2,
		fill: "#00ffff",
		emptyFill: "#000000"
	});
	
	//Set progress circle 2
	$("#progress2").circleProgress({
		value: 0.8,
		size: 175,
		thickness: 2,
		fill: "#00ffff",
		emptyFill: "rgba(0, 0, 0, 0)"
	});

	//Set progress circle 3
	$("#progress3").circleProgress({
		value: 0.75,
		size: 175,
		thickness: 2,
		fill: "#00ffff",
		emptyFill: "rgba(0, 0, 0, 0)"
	});

	//Set progress circle 4
	$("#progress4").circleProgress({
		value: 0.40,
		size: 175,
		thickness: 2,
		fill: "#00ffff",
		emptyFill: "rgba(0, 0, 0, 0)"
	});


	//Set progress circle 5
	$("#progress5").circleProgress({
		value: 0.20,
		size: 175,
		thickness: 2,
		fill: "#00ffff",
		emptyFill: "rgba(0, 0, 0, 0)"
	});

	//Set progress circle white
	$("#progress6").circleProgress({
		value: 0.2,
		size: 175,
		thickness: 2,
		fill: "#00ffff",
		emptyFill: "rgba(0, 0, 0, 0)"
	});

	//Set progress circle white
	$("#progress7").circleProgress({
		value: 0.3,
		size: 175,
		thickness: 2,
		fill: "#00ffff",
		emptyFill: "rgba(0, 0, 0, 0)"
	});


	//Set progress circle skyblue
	$("#progress8").circleProgress({
		value: 0.7,
		size: 175,
		thickness: 2,
		fill: "#00ffff",
		emptyFill: "rgba(0, 0, 0, 0)"
	});

	//Set progress circle skyblue
	$("#progress9").circleProgress({
		value: 0.83,
		size: 175,
		thickness: 2,
		fill: "#009fff",
		emptyFill: "rgba(0, 0, 0, 0)"
	});

	//Set progress circle skyblue
	$("#progress10").circleProgress({
		value: 0.83,
		size: 175,
		thickness: 2,
		fill: "#009fff",
		emptyFill: "rgba(0, 0, 0, 0)"
	});

	// Save the scroll position before the page unloads
    window.addEventListener('beforeunload', () => {
		localStorage.setItem('scrollPosition', window.scrollY);
	  });
  
	  // Restore the scroll position when the page loads
	  window.addEventListener('load', () => {
		const scrollPosition = localStorage.getItem('scrollPosition');
		if (scrollPosition) {
		  window.scrollTo(0, parseInt(scrollPosition, 10));
		}
	  })


	  

}

})(jQuery);

