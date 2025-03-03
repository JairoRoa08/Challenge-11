//  Task 1: Creating a Book Class
class Book {
    constructor (title, author, isbn, copies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    }


getDetails () {
    return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`;
}

updateCopies (quantity) {
    this.copies += quantity;
}
}
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails()); 

book1.updateCopies(-1);
console.log(book1.getDetails()); 

// Task 2: Creating a Borrower Class
class Borrower {
    constructor(name, borrowerId) {
        this.name = name;
        this.borrowerId;
        this,borrowedBooks = [];
    }
borrowBook(book) {
    this.borrowedBooks.push(book);
}
returnBook(book) {
    this.borrowedBooks = this.borrowedBooks.filter(title => title !== book);
}
}
const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks); 

//
class Library {
    constructor() {
        this.books = [];
        this.borrowers = [];
    }
    addBook(book) {
        this.books.push(book);
    }

    listBooks() {
        this.books.forEach(book => console.log(book.getDetails()));
    }
}
const library = new Library();

library.addBook(book1);
library.listBooks();

// Task 4: Implementing Book Borrowing
class Library {
    constructor() {
        this.books = [];
        this.borrowers = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    listBooks() {
        this.books.forEach(book => console.log(book.getDetails()));
    }

    addBorrower(borrower) {
        this.borrowers.push(borrower);
    }

    lendBook(borrowerId, isbn) {
        const borrower = this.borrowers.find(b => b.borrowerId === borrowerId);
        const book = this.books.find(b => b.isbn === isbn);

        if (!borrower) {
            console.log("Borrower not found.");
            return;
        }

        if (!book) {
            console.log("Book not found.");
            return;
        }

        if (book.copies > 0) {
            book.updateCopies(-1);
            borrower.borrowBook(book.title);
            console.log(`Book "${book.title}" lent to ${borrower.name}.`);
        } else {
            console.log(`No copies available for "${book.title}".`);
        }
    }
}
library.addBook(book1);
library.addBorrower(borrower1);
library.lendBook(201, 123456);
console.log(book1.getDetails()); 
console.log(borrower1.borrowedBooks); 
