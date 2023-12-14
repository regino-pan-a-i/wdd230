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


const ORDER_KEY = "orders"

function setOrderNumber(){
    
    // Check to see if the key exists in local storage
    let currentValue = localStorage.getItem(ORDER_KEY);
    let order = 1;

    // If the key doesn{t exists, initialize the key to 1
    if (currentValue != null){

        // it the Jey does exists add one to the current value
        order = parseInt(currentValue) + 1
    };

    localStorage.setItem(ORDER_KEY, `${order}`);

}

const submit = document.getElementById('submit')
submit.addEventListener('click', setOrderNumber);

