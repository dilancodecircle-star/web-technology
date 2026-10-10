let openbtn = document.getElementById('open-btn');
let modeContainer = document.getElementById("model-container");
let closeBtn = document.getElementById("close-btn");
openbtn.addEventListener('click', function () {
    modeContainer.style.display = 'block';
})

closeBtn.addEventListener('click', function () {
    modeContainer.style.display = 'none';
})

window.addEventListener('click', function (e) {
    if (e.target === modeContainer) {
        modeContainer.style.display = 'none';
    }
})