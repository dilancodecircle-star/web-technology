/*const myListItem = document.querySelector(".list-items");
//for(var i= 0; i<myListItem.length ; i++){
    myListItem.style.color = 'red';
//}*/

const ul = document.querySelector('ul');
const li = document.createElement('li');
ul.append(li); 

const  firstListItem = document.querySelector('.list-items');
console.log(firstListItem.innerText)
console.log(firstListItem.textContent)
console.log(firstListItem.innerHTML);
li.innerText = 'x-man';