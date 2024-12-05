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


function toggleMenu() {
    const nav = document.querySelector('.navbar-nav');
    nav.classList.toggle('show');
}



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

 // Function to close the menu
 function closeMenu() {
	var menu = document.querySelector('.mobile-menu');
	menu.style.display = 'none';
}



let lightmode = localStorage.getItem('lightmode');
const themeSwitch = document.getElementById('theme-switch');

const enableLightmode = () => {
    document.body.classList.add("lightmode");
    localStorage.setItem('lightmode', "active");
};

const disableLightmode = () => {
    document.body.classList.remove('lightmode');
    localStorage.setItem('lightmode', null);
};

// Check current mode and enable light mode if it was active
if (lightmode === "active") enableLightmode();

themeSwitch.addEventListener("click", () => {
    lightmode = localStorage.getItem('lightmode'); // Retrieve the current mode
    lightmode !== "active" ? enableLightmode() : disableLightmode();
});

})(jQuery);

