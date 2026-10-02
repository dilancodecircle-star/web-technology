console.log("The external javascript file");

console.log("This output appers in the browser console");
alert("this apper in a alert box");

document.getElementById("output-message").innerHTML="this message apper inside the web";

let today = new Date();
 document.getElementById("current-data").innerHTML = "current date and time : "+ today;

 let heading = document.getElementById("main-heading").innerHTML = "New Heading!";
 let paragraph = document.getElementById("main-paragraph").innerHTML = "This paragraph content is now updated automatically.";