"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//exercise 18: seeing the world:
//solution:
let places = ['Maldives', 'Italy', 'Japan', 'Peru', 'Finland'];
console.log(`Original order:`, places);
let sortedPlaces = ([...places].sort());
console.log(`Alphabetical sorted copy:`, sortedPlaces);
let originalArr = [...places];
console.log(`Original order:`, originalArr);
let reversedPlaces = ([...places].sort().reverse());
console.log(`Reversed alphabetical copy:`, reversedPlaces);
console.log(`Original order:`, originalArr);
console.log(`Original order:`, places.reverse());
console.log(`Original order:`, places.reverse());
console.log(`Original order:`, [...places].sort());
console.log(`Original order:`, [...places].sort().reverse());
