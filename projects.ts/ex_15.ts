//exercise 15: Changing guest list:
//solution:

let newGuests : String[] = ["Nimra", "Fatima", "Amna", "faryal"]

let poppedGuest = newGuests.pop();

console.log(`unfortunately, ${poppedGuest} will not be able to join us for dinner! `);

newGuests.push("Ayesha");
console.log(`the new guest is Ayesha.`);

newGuests.forEach(newGuests => {
    console.log(`hey ${newGuests}, i would like to invite you to dinner tonight!`)
});





