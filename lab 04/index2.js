let today = new Date();
document.querySelector(".today").innerHTML = "today is : " + today;

const buttonData = document.querySelector(".btn");
function alertbtn() {
    alert("the data is sucessfully sent");

}

buttonData.addEventListener("click", function (e) {
    console.log(e.target.innerHTML = "clicked");
    const name = prompt("Enter your name");
    console.log("Name: " + name);
});