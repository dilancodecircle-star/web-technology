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

