let btn = document.querySelector("#new-quote");
let qute = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [{
    quote: "quote1 ",
    person: 'person1 '
},
{
    quote: "quote2 ",
    person: 'person2 '
},
{
    quote: "quote3 ",
    person: 'person3 '
},
{
    quote: "quote4 ",
    person: 'person4 '
},
{
    quote: "quote5 ",
    person: 'person5 '
},

];

btn.addEventListener('click', function () {
    let random = Math.floor(Math.random() * quotes.length);
    qute.innerText = quotes[random].quote;
    person.innerText = quotes[random].person
})
