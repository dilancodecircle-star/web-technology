class Book {
    constructor(title, author, available) {
        this.title = title;
        this.author = author;
        this.available = available;
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    listBooks() {
        let output = "";
        for (let book of this.books) {
            let status = book.available ? "Available" : "Not Available";
            console.log(book.title + " - " + book.author + " - " + status);
            output += `${book.title} - ${book.author} - ${status}<br>`;
        }
        return output;
    }
}

let book1 = new Book("JavaScript Basics", "A. Silva", true);
let book2 = new Book("Web Development", "K. Perera", false);
let book3 = new Book("HTML and CSS", "N. Fernando", true);

let library1 = new Library("washington library");


library1.addBook(book1);
library1.addBook(book2);
library1.addBook(book3);

let btn = document.getElementById("showBooks");
btn.addEventListener('click', function () {

    document.getElementById("book-output").innerHTML = library1.listBooks();
});