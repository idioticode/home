
$(window).on('load', function () {
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


// Showing which navigation link is opened
// Select all nav links
let links = document.querySelectorAll(".navbar-nav .nav-link");

// Get the ID of the body element
let bodyId = document.body.id;

// Iterate through all nav links
for (let link of links) {
	// Check if the data-active attribute matches the body ID
	if (link.parentElement.getAttribute("data-active") === bodyId) {
		// Add the active class to the matching link
		link.classList.add("active");
	} else {
		// Ensure no other link remains active
		link.classList.remove("active");
	}
}


//For Portfolio images 

(function ($) {

	/*------------------
		Background set
	--------------------*/
	$('.set-bg').each(function () {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
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

	// For up arrow button. 

	document.addEventListener("scroll", function () {
		const upArrowButton = document.querySelector(".up-arrow-button");
		if (window.scrollY > 150) {
			// Show the button when scrolled down 100px
			upArrowButton.classList.add("visible");
		} else {
			// Hide the button when scrolled back up
			upArrowButton.classList.remove("visible");
		}
	});

	//Lightmode and Darkmode theme. 
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


	// Abstract section: 
	document.addEventListener("DOMContentLoaded", function () {
		// Get references to sections
		const linkSection = document.getElementById("link-section");
		const abstract1 = document.getElementById("abstract1");
		const abstract2 = document.getElementById("abstract2");

		// Function to update visibility
		function updateVisibility() {
			const hash = window.location.hash;

			if (hash === "#abstract1") {
				linkSection.style.display = "none";
				abstract1.style.display = "block";
				abstract2.style.display = "none";
			} else if (hash === "#abstract2") {
				linkSection.style.display = "none";
				abstract1.style.display = "none";
				abstract2.style.display = "block";
			} else {
				linkSection.style.display = "block";
				abstract1.style.display = "none";
				abstract2.style.display = "none";
			}
		}

		// Update visibility on page load and hash change
		updateVisibility();
		window.addEventListener("hashchange", updateVisibility);
	});

	


})(jQuery);

