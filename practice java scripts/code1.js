let btn = document.getElementById("button");
let container = document.querySelector(".content-container");
let close = document.getElementById("close");
let quetion = document.querySelector(".question");
let answer = document.querySelector(".answer");
btn.addEventListener('click', function () {
    container.style.display = "block";
    btn.style.display = "none"
    close.style.display = "block"
})

close.addEventListener('click', function () {
    container.style.display = "none";
    btn.style.display = "block"
    close.style.display = "none"
})

quetion.addEventListener('click', function () {
    answer.style.height = "100%";
    answer.style.overflow = "visible";
})
