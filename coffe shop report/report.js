let sales = [12000, 18500, 9500, 22000, 16000];
let total = 0;
for (i = 0; i < sales.length; i++) {
    total = total + sales[i];
}
console.log("Total sales are : " + total);
let avg = total / sales.length;
console.log("Average sales are : " + avg);
if (avg >= 18000) {
    console.log("perfomance : Excellent");
} else if (avg >= 12000) {
    console.log("perfomance : Good");
} else {
    console.log("perfomance : Needs Improvement");
};


let bestDayNumber = 4;
switch (bestDayNumber) {
    case 1:
        console.log("Best Sales Day: Monday");
        break;
    case 2:
        console.log("Best Sales Day: Tuesday");
        break;

    case 3:
        console.log("Best Sales Day: wednesday");
        break;

    case 4:
        console.log("Best Sales Day: thursday");
        break;
    case 5:
        console.log("Best Sales Day: friday");
        break;

    default:
        console.log("invalid day");
        break;
};

let output = document.getElementById("report-output");
output.innerHTML = "THANK YOU FOR CHECKING THE WEEKLY REPORT ";
