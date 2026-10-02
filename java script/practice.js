let item = document.getElementById("heading1");
item.style.color = "red";


let list_item = document.querySelectorAll('li');
for(var i = 0 ; i<list_item.length ; i++){
    list_item[i].style.color = "green";
}

let list_item_1 = document.querySelector('li');
list_item_1.style.color = "blue";

const ul1 = document.querySelector('ul');
const li1 = document.createElement("li")
ul1.append(li1);
li1.innerHTML = "x-man";

const  ul2 = document.querySelector("ul");
const li2 = document.createElement("li");
ul2.append(li2);
li2.innerHTML = "spide man";