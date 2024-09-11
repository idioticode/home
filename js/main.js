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
const $hoverables = document.querySelectorAll('a'); // Ensure this selector matches your hoverable elements

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
    	x: e.clientX - 15,
    	y: e.clientY - 15
  	});

  TweenMax.to($smallBall, .1, {
    x: e.clientX - 3,
    y: e.clientY - 8
  });
}


// Function to handle hover effect
function onMouseHover() {
	TweenMax.to($bigBall, .1, {
	  scale: 2, // Adjust scale factor as needed
	  transformOrigin: "center center", // Ensure scaling from center
	  ease: Power2.easeOut // Smooth scaling
	});
  }
  
  // Function to handle hover out effect
  function onMouseHoverOut() {
	TweenMax.to($bigBall, .1, {
	  scale: 1, // Revert to original size
	  transformOrigin: "center center", // Ensure scaling from center
	  ease: Power2.easeOut // Smooth scaling
	});
  }

 // Function to close the menu
 function closeMenu() {
	var menu = document.querySelector('.mobile-menu');
	menu.style.display = 'none';
}

// Add event listeners to anchor links inside the mobile menu
document.addEventListener('DOMContentLoaded', function() {
	var links = document.querySelectorAll('.mobile-menu .nav-item a');
	links.forEach(function(link) {
		link.addEventListener('click', closeMenu);
	});
});

})(jQuery);

