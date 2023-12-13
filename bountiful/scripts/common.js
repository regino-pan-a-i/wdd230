/* NAVIGATION BAR */

// Wayfinding
document.addEventListener("DOMContentLoaded", function() {
	// Get the current page URL
	var currentPageUrl = window.location.href;

	// Check if the user is on the home page
	if (currentPageUrl.toString().includes("index")) {
		// Add a class to the home button to change its color
		document.getElementById("home").setAttribute("id", "active")
	}
	else if (currentPageUrl.toString().includes("order")) {
		// Add a class to the home button to change its color
		document.getElementById("order").setAttribute("id", "active")
	}
	else if (currentPageUrl.toString().includes("about")) {
		// Add a class to the home button to change its color
		document.getElementById("about").setAttribute("id", "active")
	}
});


//HAMBURGER MENU: 
const navbar = document.querySelector('#mainNav')
const hamButton = document.querySelector('#menu');
const closeHamButton = document.querySelector('#menuClose');

// Add a click event listender to the hamburger button and use a callback function that toggles width
hamButton.addEventListener('click', ()=>{
	// navbar.style.width = (navbar.style.width === '0vw' || !navbar.style.width) ? '50vw' : '0vw';
	// navbar.style.height = (navbar.style.hight === '0vh' || !navbar.style.hight) ? '100vh' : '0vh';
	if(navbar.classList.contains('noShow')){
		navbar.classList.remove('noShow');
		navbar.classList.add('show');
	}
});
closeHamButton.addEventListener('click', ()=>{
	if (navbar.classList.contains('show')){
		navbar.classList.remove('show');
		navbar.classList.add('noShow');
		
	}
});

/* FOOTER */

// LAST MODIFIED: 
let today = new Date();
document.querySelector("#currentYear").innerHTML = `&copy ${today.getFullYear()}`;
document.querySelector("#lastModified").textContent = document.lastModified;
