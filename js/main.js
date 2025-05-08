// ------------------------------
// Preloader
// ------------------------------
$(window).on('load', function () {
	$(".loader").fadeOut();
	$("#preloder").delay(100).fadeOut("slow");
});


// ------------------------------
// DOM Ready Block (Main Setup)
// ------------------------------
document.addEventListener("DOMContentLoaded", function () {


	// ------------------------------
	// Up Arrow Visibility
	// ------------------------------
	document.addEventListener("scroll", function () {
		const upArrowButton = document.querySelector(".up-arrow-button");
		if (upArrowButton) {
			upArrowButton.classList.toggle("visible", window.scrollY > 150);
		}
	});


	// ------------------------------
	// Abstract Section Toggle
	// ------------------------------
	const linkSection = document.getElementById("link-section");
	const abstract1 = document.getElementById("abstract1");
	const abstract2 = document.getElementById("abstract2");

	if (linkSection && abstract1 && abstract2) {
		function updateVisibility() {
			const hash = window.location.hash;
			linkSection.style.display = (!hash || hash === "#") ? "block" : "none";
			abstract1.style.display = (hash === "#abstract1") ? "block" : "none";
			abstract2.style.display = (hash === "#abstract2") ? "block" : "none";
		}

		updateVisibility();
		window.addEventListener("hashchange", updateVisibility);
	}


	// ------------------------------
	// Load Copyright
	// ------------------------------
	fetch('other_parts.html')
		.then(response => response.text())
		.then(data => {
			const temp = document.createElement('div');
			temp.innerHTML = data;

			const copyright = temp.querySelector('#copyright');
			const copyrightTarget = document.getElementById('copyright-placeholder');
			if (copyright && copyrightTarget) {
				copyrightTarget.innerHTML = copyright.innerHTML;
			}
		});
});

	// ------------------------------
	// Load Navbar and all the components of it. 
	// ------------------------------

	// fetching from the separate html file. 

	document.addEventListener("DOMContentLoaded", function () {
		fetch('other_parts.html')
		  .then(response => {
			if (!response.ok) throw new Error("HTTP error " + response.status);
			return response.text();
		  })
		  .then(html => {
			const parser = new DOMParser();
			const doc = parser.parseFromString(html, "text/html");
			const nav = doc.querySelector("nav");
	  
			if (nav) {
			  document.getElementById("navbar-container").innerHTML = nav.outerHTML;
	  
			  // ✅ Now navbar is inserted, run these:
			  highlightActiveNavLink();
			  setupThemeToggle(); // ← Theme toggle hook
			} else {
			  console.warn("No <nav> element found in other_parts.html");
			}
		  })
		  .catch(error => {
			console.error('Error loading navbar:', error);
		  });
	  });
	  
	  // highlighting active navigation link. 
	  function highlightActiveNavLink() {
		const links = document.querySelectorAll(".navbar-nav .nav-link");
		const bodyId = document.body.id;
	  
		links.forEach(link => {
		  const parent = link.parentElement;
		  const page = parent.getAttribute("data-active");
		  link.classList.toggle("active", page === bodyId);
		});
	  }
	  
	  //switching between the theme -dark and light.
	  function setupThemeToggle() {
		const themeSwitch = document.getElementById('theme-switch');
		if (themeSwitch) {
		  const enableLightmode = () => {
			document.body.classList.add("lightmode");
			localStorage.setItem('lightmode', "active");
		  };
	  
		  const disableLightmode = () => {
			document.body.classList.remove("lightmode");
			localStorage.setItem('lightmode', null);
		  };
	  
		  if (localStorage.getItem('lightmode') === "active") {
			enableLightmode();
		  }
	  
		  themeSwitch.addEventListener("click", () => {
			localStorage.getItem('lightmode') !== "active" ? enableLightmode() : disableLightmode();
		  });
		} else {
		  console.warn("Theme switch button not found!");
		}
	  }
	  

	// ------------------------------
	// Portfolio: jQuery IIFE
	// ------------------------------
	(function ($) {
		// Background image setter
		$('.set-bg').each(function () {
			var bg = $(this).data('setbg');
			$(this).css('background-image', 'url(' + bg + ')');
		});

		// Popup for portfolio items
		$('.portfolio-item .port-pic').magnificPopup({
			type: 'image',
			mainClass: 'img-popup-warp',
			removalDelay: 500,
		});


})(jQuery);
