// In your js file, declare three const variables that hold references to the input, button, and .list elements.
const input = document.querySelector('#favchap');
const myButton = document.querySelector('#submit');
const list = document.querySelector('#list');


// Create a click event listener for the Add Chapter button using addEventListener and an anonymous function or arrow function.

myButton.addEventListener('click', ()=>{
    

    // Examples
    // In the click event function block {...}, do the following:
    // check to make sure the input is not blank before doing the following remaining tasks in this list using an if block,
    // otherwise provide a message or at least do nothing and return the .focus() to the input field.

    if (input.value == ''){
        input.focus();
        return ;
    };


    // create a li element
    let listItem = document.createElement("li");

    // create a delete button
    let deleteButton = document.createElement("button");

    // populate the li elements textContent or innerHTML with the input value
    listItem.textContent = input.value;

    // populate the button textContent with a ❌

    deleteButton.textContent = '❌';
    // append the li element with the delete button

    listItem.appendChild(deleteButton);
    // append the li element to the unordered list in your HTML

    list.appendChild(listItem);
    // add an event listener to the delete button that removes the li element when clicked

    deleteButton.addEventListener('click', ()=>{
        listItem.remove();
    });
    // send the focus to the input element
    input.focus();
    // change the input value to nothing or the empty string to clean up the interface for the user

    input.value='';

});