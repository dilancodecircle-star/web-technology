let startStopBtn = document.querySelector("#startStopButton");
let reset = document.querySelector("#reset");


let second = 0;
let minutes = 0;
let hours = 0;

function stopwatch() {
    second++;
    if (second / 60 === 1) {
        second = 0;
        minutes++

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    let display = document.querySelector(".timer").innerHTML = hours + ":" + minutes + ":" + second;
}
window.setInterval(stopwatch, 1000)
