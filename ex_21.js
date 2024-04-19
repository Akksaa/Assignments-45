"use strict";
//exercise 21: Typescript Object:
//solution:
Object.defineProperty(exports, "__esModule", { value: true });
let book = {
    title: "War and Peace",
    author: "Leo Tolstoy",
    yearPublished: 1869
};
let bookInfo = `The Book, ${book.title} by ${book.author}, published in ${book.yearPublished}.`;
console.log(bookInfo);
