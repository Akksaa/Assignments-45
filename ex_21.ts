//exercise 21: Typescript Object:
//solution:

let book: {title: String; author: String; yearPublished: Number} = {

     title: "War and Peace",
     author: "Leo Tolstoy",
     yearPublished: 1869
};

let bookInfo = `The Book, ${book.title} by ${book.author}, published in ${book.yearPublished}.`;
console.log(bookInfo);