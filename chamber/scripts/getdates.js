

let today = new Date();
document.querySelector("#currentYear").innerHTML = `&copy ${today.getFullYear()}`;

document.querySelector("#lastModified").textContent = document.lastModified;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');
// const nav = documenet.querySeletor(nav);
// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
	// nav.classList.toggle('show');
});