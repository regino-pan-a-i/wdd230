const url = './data/members.json';


function displayMembers(members){
    const cards = document.querySelector('#members');
    members.forEach((member) => {
        let section = document.createElement("section");
        section.classList.add('directoryCard');
        let sectionHTML = `
        <section>
            <h3> ${member.name}</h3>
            <img src="${member.imageURL}" alt="${member.name}">
            <p>Address ${member.address}</p>
            <p>Phone Number ${member.phone}</p>
            <a href="${member.websiteURL}">Visit Page</a>
        </section>          
        `;
        section.innerHTML = sectionHTML
        cards.appendChild(section);
    });
}

async function getMemberData(){
    const response = await fetch(url);
    if (response.ok){
        const data = await response.json();
        displayMembers(data.members)
    }
}

getMemberData();