let btn = document.getElementById("btn");
let qote = document.querySelector(".quote");
let person = document.querySelector(".person")

const quotes = [{
    quote: 'Quote 1',
    person: 'person 1'
},

{
    quote: 'Quote 2',
    person: 'person 2'
},

{
    quote: 'Quote 3',
    person: 'person 3'
},

{
    quote: 'Quote 4',
    person: 'person 4'
},
{
    quote: 'Quote 5',
    person: 'person 5'
},
{
    quote: 'Quote 6',
    person: 'person 6'
},
{
    quote: 'Quote 7',
    person: 'person 7'
},
{
    qote: 'Quote 8',
    person: 'person 8'
}

];

btn.addEventListener('click', function () {
    let random = Math.floor(Math.random() * quotes.length);
    qote.innerText = quotes[random].qote;
    person.innerText = quotes[random].person


})
