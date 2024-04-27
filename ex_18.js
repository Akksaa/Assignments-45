"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//exercise 18: seeing the world:
//solution:
let places = ['Maldives', 'Italy', 'Japan', 'Peru', 'Finland'];
console.log(`Original order:`, places); // Printing array in its original order.
let sortedPlaces = ([...places].sort());
console.log(`\nAlphabetical sorted copy:`, sortedPlaces); //Printing array in alphabetical order without modifying the actual list.
console.log(`\nOriginal order:`, places); //Showing that array is still in its original order by printing it.
let reversedPlaces = ([...places].sort().reverse());
console.log(`\nReversed alphabetical copy:`, reversedPlaces); //Printing array in reverse alphabetical order without changing the order of the original list.
console.log(`\nOriginal order:`, places); //Showing that array is still in its original order by printing it again.
places.reverse(); //Reversing the order of list.
console.log(`\nReversed order:`, places); // Printing the array to show that its order has changed
places.reverse(); //Reversing the order of list again.
console.log(`\nOriginal order:`, places); // Printing the list to show it’s back to its original order.
places.sort(); //Sorting the array so it’s stored in alphabetical order.
console.log(`\nAlphabetical sorted order:`, places); // Printing the array to show that its order has been changed
places.sort().reverse(); //Sorting to change the array so it’s stored in reverse alphabetical order. 
console.log(`\nReversed alphabetical sorted order:`, places); //Printing the list to show that its order has changed.
