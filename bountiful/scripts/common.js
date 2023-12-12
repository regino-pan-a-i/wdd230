/* NAVIGATION BAR */


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
