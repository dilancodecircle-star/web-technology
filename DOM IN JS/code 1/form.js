const formElement = document.querySelector('form');
formElement.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(formElement);
    console.log(formData.get('name'));
    console.log(formData.get('email'));
});