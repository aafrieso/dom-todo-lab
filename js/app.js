//cached element references 

const inputElement = document.querySelector('input');
const buttonElement = document.querySelector('button');
const ulElement = document.querySelector( 'ul');

buttonElement.addEventListener('click', function(buttonEvent){
    let myList = document.createElement('li')
    myList.textContent = inputElement.value
    
    inputElement.value = ""
    ulElement.appendChild(myList);
})


   