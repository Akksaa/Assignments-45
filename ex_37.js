"use strict";
// ex 37: Large Shirts:
// solve:
Object.defineProperty(exports, "__esModule", { value: true });
function makeShirt(size = "Large", text = "I love Typescript.") {
    console.log(`The size of the shirt is ${size} and The message printed on it is "${text}".`);
}
;
makeShirt();
makeShirt("Medium");
makeShirt("Small", "I love Python.");
