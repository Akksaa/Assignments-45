"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guests = void 0;
// exercise 14: Guest list:
//solution:
let guests = ["Nimra", "Fatima", "Amna", "faryal"];
exports.guests = guests;
guests.forEach(guest => {
    console.log(`hey ${guest}, i would like to invite you to dinner tonight!`);
});
