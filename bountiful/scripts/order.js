let fruitJSON = './data/fruit.json';

async function getFruitData(){
    const response = await fetch(fruitJSON);
    if (response.ok){
        const data = await response.json();
        displayFruits(data.fruits)
    }
}

function displayFruits(fruits){
    const ingredients = document.getElementById('ingredients');
    for(let i = 0; i < 3; i++){
        let select = document.createElement('select');
        select.name = `fruit${i + 1}`
        fruits.forEach(fruit => {
            let option = document.createElement('option');
            let optionHTML = `
            <option value=${fruit.name} class="myFruit">${fruit.name}</option >
            `;
            option.innerHTML = optionHTML;
            select.appendChild(option);
        });
        ingredients.appendChild(select);
    }
}



getFruitData();