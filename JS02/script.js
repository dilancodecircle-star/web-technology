let sales = [25, 32, 18, 40, 35];
console.log("Daily Sales");
let total = 0;
for (i = 0; i < sales.length; i++) {
    console.log("Day " + (i + 1) + " : " + sales[i] + " Cups");
    total = total + sales[i];
};

let avg = total / sales.length;
console.log("Total : " + total + " cups");
console.log("Average : " + avg + " cups");

for (i = 0; i < sales.length; i++) {
    if (sales[i] > 30) {
        console.log("Day " + (i + 1) + " have more than 30 sales")
    };
};

//Activity 2

let stock = 5;
while (stock > 0) {
    console.log("order served . Remaining Stock " + (stock - 1));
    stock--;
};
console.log("Out of Stock");

//Activity 3

let ratings = Number(prompt("Enter the Ratings 1 to 5"));
let n = 1;
while (n)
    if (1 <= ratings && ratings <= 5) {
        alert("Thank you for your rating");
        n = 0;
        continue;
    }
    else {
        ratings = Number(prompt("Invalid ratings , Enter the Ratings 1 to 5"));


    }

// activity 4
let menue = ["Espresso", "Latte", "Cappuccino"];
console.log("First menue item is " + menue[0]);
console.log("last menue item is " + menue[(menue.length - 1)]);
menue[1] = "Iced latte";
console.log(menue);
menue.push("Moch");
console.log(menue);
menue.pop();
console.log(menue);
menue.shift();
console.log(menue);
menue.unshift("Americano")
console.log(menue);

//Activity 5
let dailySales = [18, 42, 35, 20, 50];
let high = 0;
for (i = 0; i < dailySales.length; i++) {
    if (dailySales[i] >= 30) {
        console.log(dailySales[i] + " High sales");
        high++;

    }
    else {
        console.log(dailySales[i] + " Normal Sale");
    };

};

console.log("High sale Days  : " + high)

//Activity 6
let order = {
    customer: "Nimal",
    coffee: "Cappuccino",
    quantity: 2,
    status: "Confirmed"
};

for (let key in order) {
    console.log(key + " : " + order[key]);
};

//Activity 7

let loylty = Number(prompt("Number of purches"));
let text = document.getElementById("loyalty-output")
if (loylty > 20) {
    text.innerText = "gold Cstomer";

} else if (loylty > 10) {
    text.innerText = "Silver Cstomer";
} else if (loylty > 5) {
    text.innerText = "Brozone Cstomer";
} else {
    text.innerText = "reglar Cstomer";
};


//activity 8

let day = Number(prompt(" enter a day number from 1 to 5"));
switch (day) {
    case 1:
        console.log("Monday - Espresso Discount");
        break;

    case 2:
        console.log("Tuesday - Free Cookie");
        break;

    case 3:
        console.log("Wednesday - Iced Coffee Discount");
        break;

    case 4:
        console.log("Thursday - Free Extra Shot");
        break;

    case 5:
        console.log("Friday - Cappuccino Special");
        break;
    default:
        console.log("Invalid Day Number ")




}


let comment = "The coffee was excellent";
console.log(comment.length);
console.log(comment.toUpperCase());
console.log(comment.toLocaleLowerCase());
console.log(comment.includes("coffee"));

let js = "JS";
for (i = 0; i < js.length; i++) {
    console.log(js[i]);
};


