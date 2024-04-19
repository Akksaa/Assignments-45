"use strict";
//exercise 3: 
//(a)toUpperCase:
//solve:
Object.defineProperty(exports, "__esModule", { value: true });
let randomName = "Faris ahmed";
console.log(`Uppercase:`, randomName.toUpperCase());
//(b)toLowerCase:
//solve:
console.log(`Lowercase:`, randomName.toLowerCase());
//(c)toTitleCase:
//solve:
console.log(`Titlecase:`, randomName.replace(/\b\w/g, (char) => char.toUpperCase()));
