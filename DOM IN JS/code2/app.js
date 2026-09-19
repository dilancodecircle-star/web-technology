/*let titleElement = document.getElementById('title');
console.log(titleElement);

let buttonElement = document.getElementById('myButton');
console.log(buttonElement)

titleElement.innerText ="Welcome to y web";
buttonElement.style.color ='blue';

buttonElement.addEventListener('click' , function(){
    titleElement.innerText = "you clicked the button";
    document.body.style.backgroundColor = "lightblue";
});*/

/*const formElement = document.getElementById('myForm');
formElement.addEventListener('submit' , function(event){
    event.preventDefault();
    const nameValue = document.getElementById('username').value;
    const emailValue = document.getElementById('useremail').value;

    console.log("user nam : " + nameValue);
    console.log("usr email : " + emailValue);////////////////////////////////
});*/
/*
const formElement = document.getElementById('myForm');
formElement.addEventListener('submit' , function(event){
    event.preventDefault();
    const useName = document.getElementById('username').value;
     const useEmail = document.getElementById('useremail').value;

     console.log("user name : " + useName);
     console.log('user email : ' + useEmail);

});*/

const formElement = document.getElementById('myForm');
formElement.addEventListener('submit' , function(event){
    event.preventDefault();
    const formData = new FormData(formElement);
    console.log(formData.get('username'));
    console.log(formData.get('email'));
});