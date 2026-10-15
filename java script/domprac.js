const formData = document.getElementById("myform");
formData.addEventListener('submit', function (event) {
    event.preventDefault();
    const data = new FormData(formData);
    console.log(data.get("name"));
    console.log(data.get("email"));

})

const btn = document.querySelector(".btn");
function print() {
    document.querySelector(".text").innerHTML = "I love you Dinuli Suvinya";
    alert("I love you Dinuli Suvinya")

}

btn.addEventListener('click', print)