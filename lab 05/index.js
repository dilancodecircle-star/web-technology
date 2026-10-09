/*var message = "Hello, World!";
function printMaagae() {
    let message = "Hello, JavaScript!";
    console.log(message);
}
printMaagae();
console.log(message);

var n1 = parseFloat(prompt("Enter first number : "));
var n2 = parseFloat(prompt("Enter second number : "));

console.log("The sum of two numbers is : " + (n1 + n2));

var n1 = parseInt("20");
console.log(n1);
console.log(Number.isNaN(n1));
var name = prompt('enter the name');
var orderConfirm = confirm('Are you sure you want to order ' + name + '?');
console.log(orderConfirm);
if (orderConfirm) {
    console.log('Order placed for ' + name);
}

else {
    console.log('Order cancelled for ' + name);
function message1() {
    document.getElementById("show").innerHTML = "try again button 1";
}
function message2() {
    document.getElementById("show").innerHTML = "try again button 2";
}
function message3() {
    document.getElementById("show").innerHTML = "welcome to js";
}*/


function append() {
    let input = document.getElementById("text");
    let output = document.getElementById("show");
    output.innerHTML = output.innerHTML + input.value

}