const btn1 = document.querySelector(".btn1");
function tectbtn() {
    alert("he he ");
};

btn1.addEventListener("click", tectbtn);


const btn2 = document.querySelector(".btn2");
function tectbtn2() {
    alert('I love you JS');
};

btn2.addEventListener("click", tectbtn2);


const changeColor = document.querySelector(".btn3");
function changecolor() {
    changeColor.style.backgroundcolor = "red";
};

changeColor.addEventListener("mouseover", changecolor);
