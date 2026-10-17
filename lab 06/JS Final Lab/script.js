/*let coffee = {
    name: "Cappuccino",
    price: 750,
    available: true
};

for (let key in coffee) {
    console.log(key + " " + coffee[key]);

};*/

// Activity 02
/*
class coffee {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
};

let coffee1 = new coffee("latte", 650);
let coffee2 = new coffee("Espresso", 500);


for (let key in coffee1) {
    console.log(coffee1[key]);


}
for (let key in coffee2) {
    console.log(coffee2[key]);


}*/


//Activity 03

class coffee {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayDetails() {
        console.log(this.name + " - rs " + this.price)
    }
}

let coffee1 = new coffee("latte", 650);
let coffee2 = new coffee("Espresso", 500);
let coffee3 = new coffee("cappuccino", 750);
/*
coffee1.displayDetails()
coffee2.displayDetails()
coffee3.displayDetails()

let coffees = [];
coffees.push(coffee1, coffee2, coffee3)
for (let index of coffees) {
    index.displayDetails()
};
*/
class coffeeShop {
    constructor(name) {
        this.name = name;
        this.coffees = [];
    }
    addCoffee(coffee) {
        this.coffees.push(coffee);
    }

    listCoffees() {
        for (let coffee of this.coffees) {
            console.log(coffee.name + " - Rs. " + coffee.price);
        }

    }
}
let shop = new coffeeShop("my shop");
shop.addCoffee(coffee1);
shop.addCoffee(coffee2);
shop.addCoffee(coffee3);

shop.listCoffees();


// Activity 7

//let button = document.getElementById("showButton");

/*
button, addEventListener("click", function () {
    document.getElementById("message").innerHTML = "Welcome to coffe shop";
})
    */


//Activity 08 

/*
function showMessage() {
    document.getElementById("message").innerHTML = "Welcome to coffe shop";
};

button.addEventListener("click", showMessage);

let text = document.getElementById("coffee-text");
text.addEventListener('mouseover', function () {
    text.style.color = "red";
});

text.addEventListener('mouseout', function () {
    text.style.color = "blue";
});

let input = document.getElementById("customer-name");
input.addEventListener("keydown", function () {
    document.getElementById("key-message").innerHTML = "A key was pressed";
});
*/

//activity 11
let button = document.getElementById("loginButton");
button.addEventListener('click', function () {
    let name = document.getElementById("username");
    let passwd = document.getElementById("password");

    if (name == "admin" && passwd == 1234) {
        document, getElementById("login-output").innerHTML = "login sucessful";
    } else {
        document, getElementById("login-output").innerHTML = "invalid username or password";
    };

});
