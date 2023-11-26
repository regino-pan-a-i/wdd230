let dataURL = './data/members.json';

const spotlight = document.querySelector('.spotlights');

function getData(members){
    members.forEach(member => {
        let section = document.createElement('section');
        let sectionHTML = `
            <img src="${member.imageURL}" alt="${member.name}">
            <h3>${member.name}</h3>
            <ul>
                <li>Level: ${member.level} </li>
                <li>Address: ${member.address} </li>
                <li>Hours: ${member.hours} </li>
                <li>Phone: ${member.phone}</li>
            </ul>
        `;
        section.innerHTML = sectionHTML;
        spotlight.appendChild(section);
    });
}

function randomize(data){
    var members = [];
    data.members.forEach(member =>{
        if(member.level == 'Silver' || member.level == 'Golden'){
            members.push(member);
        }
    });
    
    var memberSelection = [];
    var indexes = [];
    var index = 0;
    while (indexes.length < 3){
        index = Math.floor(Math.random() * members.length);
        if (!indexes.includes(index)){
            memberSelection.push(members[index]);
            indexes.push(index)
        };
    }; 
        
    return memberSelection;
}

async function fetchData(){
    try{
        const response =  await fetch(dataURL);
        if(response.ok){
            const data =  await response.json();
            let members = randomize(data);
            getData(members);
        }else{ 
            throw Error(  response.text)
        }
    }catch (error){

        console.log(error)
    }
    
}

fetchData();