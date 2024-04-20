"use strict";
// ex 35: Animals:
// solve:
Object.defineProperty(exports, "__esModule", { value: true });
let animals = ["Horse", "Dog", "Rabbit"];
for (let i of animals) {
    if (i == "Horse") {
        console.log(`A ${i} is friendly to Humans.`);
    }
    else if (i == "Dog") {
        console.log(`A ${i} is a loyal animal.`);
    }
    else {
        console.log(`A ${i} can jump to impressive heights and distances…`);
    }
}
console.log("These animals have a similarity that they are Mammals.");
console.log("Any of these animals would make a great pet.");
