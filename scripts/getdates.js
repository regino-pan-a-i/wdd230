let today = new Date();
document.querySelector("#currentYear").innerHTML = `&copy ${today.getFullYear()}`;

document.querySelector("#lastModified").textContent = document.lastModified;