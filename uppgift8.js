/* Uppgift 8 - Objekt. Av Mikael Emanuelsson, 2026 */

"use strict";

const book = {
    title: "The Gunslinger",
    author: "Stephen King",
    year: 1982
};

function printBook(book) {
    console.log("Titel: " + book.title);
    console.log("Författare: " + book.author);
    console.log("Utgivningsår: " + book.year);
}

printBook(book);