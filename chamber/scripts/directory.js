const url = './data/members.json';


function displayMembers(members){
    const cards = document.querySelector('#members');
    members.forEach((member) => {
        let section = document.createElement("section");
        section.classList.add('directoryCard');
        let sectionHTML = `
            <h3> ${member.name}</h3>
            <img src="${member.imageURL}" alt="${member.name}">
            <p>Address ${member.address}</p>
            <p>Phone Number ${member.phone}</p>
            <a href="${member.websiteURL}">Visit Page</a>        
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

const gridButton = document.getElementById('gridButton');
const listButton = document.getElementById('listButton');
const container = document.querySelector('#members')

gridButton.addEventListener('click', ()=>{
    if(!gridButton.classList.contains('active')){
        gridButton.classList.add('active');
        gridButton.classList.remove('inactive');
        listButton.classList.remove('active');
        listButton.classList.add('inactive');
        gridButton.classList.add('active');
        container.classList.remove('list');
        container.classList.add('grid');
    }
    
});

listButton.addEventListener('click', () => {
    if(!listButton.classList.contains('active')){
        listButton.classList.add('active');
        listButton.classList.remove('inactive');
        gridButton.classList.remove('active')
        gridButton.classList.add('inactive');
        listButton.classList.add('active')
        container.classList.remove('grid');
        container.classList.add('list');
    }
});