let url = new URL(window.location);
let params  = url.searchParams;
let orderDate = new Date();
let fruitJSON = './data/fruit.json';

let fruit1 = params.get("fruit1")
let fruit2 = params.get("fruit2")
let fruit3 = params.get("fruit3")


function formatDate(date) {
    const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',

    };

    return date.toLocaleDateString('en-US', options);
}


document.getElementById('name').textContent = params.get("firstName")
document.getElementById('drinkContent').textContent = `${fruit1}, ${fruit2}, ${fruit3}`
document.getElementById('instructions').textContent = params.get("instructions")
document.getElementById('orderDate').textContent = formatDate(orderDate)
document.getElementById('orderHour').textContent = `${orderDate.getHours()}:${orderDate.getMinutes()}`
document.getElementById('orderEmail').textContent = params.get("email")


function getNutrition(fruits){
    var calories = 0
    var fat = 0
    var sugar = 0
    var carbohydrates = 0
    var protein = 0
    fruits.forEach(fruit => {
        if(fruit.name == fruit1 || fruit.name == fruit2 || fruit.name == fruit3){
            calories += parseInt(fruit.nutritions.calories)
            fat += parseInt(fruit.nutritions.fat)
            sugar += parseInt(fruit.nutritions.sugar)
            carbohydrates += parseInt(fruit.nutritions.carbohydrates)
            protein += parseInt(fruit.nutritions.protein)
        }
    });
    displayNutrition(calories, fat, sugar, carbohydrates, protein)
}
function displayNutrition(calories, fat, sugar, carbohydrates, protein){
    const section = document.getElementById('nutritionInfo')
    let sectionHTML =`
    <p>Total calories: ${calories}</p>
    <p>Total fat: ${fat}</p>
    <p>Total sugar: ${sugar}</p>
    <p>Total carbohydrates: ${carbohydrates}</p>
    <p>Total protein: ${protein}</p>
    `
    section.innerHTML = sectionHTML;

}

async function getFruitData(){
    const response = await fetch(fruitJSON);
    if (response.ok){
        const data = await response.json();
        getNutrition(data.fruits)
    }
}

getFruitData()