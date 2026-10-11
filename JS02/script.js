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

