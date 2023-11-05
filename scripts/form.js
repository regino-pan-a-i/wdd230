const rating = document.getElementById("range")

rating.addEventListener('change', ()=>{
    document.getElementById("currentRating").innerHTML = rating.value;

})

const confirm = document.getElementById("confirm")
confirm.addEventListener('blur', ()=>{
    const password = document.getElementById("password")

})