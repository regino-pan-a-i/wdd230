const rating = document.getElementById("range")

rating.addEventListener('change', ()=>{
    document.getElementById("currentRating").innerHTML = rating.value;

})

const confirm = document.getElementById("confirm");
const password = document.getElementById("password");
const message = document.querySelector("#message");
const regex = /[\w]{8,}/g;

confirm.addEventListener('blur', ()=>{
    if (password.value.match(regex)){
        if (confirm.value != password.value){      
            confirm.style.boxShadow = "3px 3px 3px red";
            password.style.boxShadow = "3px 3px 3px red"
            message.textContent = "❗PASSWORDS DO NOT MATCH!";
            message.style.visibility = "show";
            confirm.value = '';
            password.value = '';
            password.focus();
        }else{
            message.style.display = "none";
            confirm.style.boxShadow = "3px 3px 3px green";
            password.style.boxShadow = "3px 3px 3px green"
            
        }
    }else{
        confirm.style.boxShadow = "3px 3px 3px red";
    }

})

