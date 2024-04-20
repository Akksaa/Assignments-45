"use strict";
// ex 43: Unchanged Magicians:
// solve:
Object.defineProperty(exports, "__esModule", { value: true });
function makeGreat(magicians) {
    return magicians.map(names => `The Great ${names}.`);
}
;
function showMagician(magicians) {
    magicians.forEach(name => console.log(name));
}
;
let magicianNames = ["Ricky Jay", "Shin Lim", "Harry Houdini"];
let greatMagicians = makeGreat([...magicianNames]);
// Original names:
console.log("The list of Original names: \n");
showMagician(magicianNames);
// Modified names:
console.log("The list of Modified names: \n");
showMagician(greatMagicians);
