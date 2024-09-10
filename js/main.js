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
		smartSpeed: 1000, // 1s. 
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

// Mouse and cursor
	const $bigBall = document.querySelector('.cursor__ball--big');
	const $smallBall = document.querySelector('.cursor__ball--small');
	const $hoverables = document.querySelectorAll('.hoverable');

	// Listeners
	document.body.addEventListener('mousemove', onMouseMove);
	for (let i = 0; i < $hoverables.length; i++) {
  	$hoverables[i].addEventListener('mouseenter', onMouseHover);
  	$hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
	}

	// Move the cursor
	function onMouseMove(e) {
		// Adjust positioning based on the actual dimensions of your cursor elements // if this doesn.t work please seek the code from other format. 
  	TweenMax.to($bigBall, .4, {
    	x: e.pageX - 15,
    	y: e.pageY - 15
  	});

  TweenMax.to($smallBall, .1, {
    x: e.pageX - 3,
    y: e.pageY - 8
  });
}


// Function to handle hover effect
function onMouseHover() {
	TweenMax.to($smallBall, .1, {
	  scale: 2, // Adjust scale factor as needed
	  fill: 'cyan' // Change color to cyan
	});
  }
  
  // Function to handle hover out effect
  function onMouseHoverOut() {
	TweenMax.to($smallBall, .1, {
	  scale: 1, // Revert to original size
	  fill: '#f7f8fa' // Revert color to original
	});
  }


  
document.addEventListener('DOMContentLoaded', function() {
	const links = document.querySelectorAll('a[href^="#"]');

	links.forEach(link => {
		link.addEventListener('click', function(e) {
			e.preventDefault();

			const targetId = this.getAttribute('href').substring(1);
			const targetElement = document.getElementById(targetId);

			if (targetElement) {
				targetElement.scrollIntoView({
					behavior: 'smooth'
				});
			}
		});
	});
});


})(jQuery);

