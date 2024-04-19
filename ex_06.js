"use strict";
// exercise 6 : stripping names:
//solve:
Object.defineProperty(exports, "__esModule", { value: true });
let personName = "\t Aqsa Saeed \n";
console.log(`Name with whit space`, personName);
let strippedName = personName.trim();
console.log(`stripped Name :`, strippedName);
