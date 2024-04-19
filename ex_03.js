"use strict";
//exercise 3: 
//(a)toUpperCase:
//solve:
Object.defineProperty(exports, "__esModule", { value: true });
let randomName = "Faris";
console.log(`uppercase:`, randomName.toUpperCase());
//(b)toLowerCase:
//solve:
console.log(`lowercase:`, randomName.toLowerCase());
//(c)toTitleCase:
//solve:
console.log(randomName.replace(/\b\w/g, (char) => char.toUpperCase()));
