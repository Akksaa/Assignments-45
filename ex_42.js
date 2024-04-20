"use strict";
// ex 42: Great Magicians:
// solve:
Object.defineProperty(exports, "__esModule", { value: true });
function showMagicians(magicians) {
    magicians.forEach(name => {
        console.log(name);
    });
}
;
function makeGreat(magicians) {
    return magicians.map(names => `The Great ${names}.`);
}
;
let magicianNames = ["Ricky Jay", "Shin Lim", "Harry Houdini"];
let greatMagicians = makeGreat(magicianNames);
showMagicians(greatMagicians); //modified names in list.
