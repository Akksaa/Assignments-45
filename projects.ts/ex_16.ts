//exercise 16 : More Guests :
//solution:

let moreGuests : String[] = ["Nimra", "Fatima", "Amna", "faryal"];

console.log("Guys!, i have found a bigger table for our dinner, so i am inviting more guests.");

moreGuests.unshift("izaan");
moreGuests.splice(3, 0, "Zahra");
moreGuests.push("hayyan");

moreGuests.forEach(moreGuests => {
    console.log(`hey ${moreGuests}, i would like to invite you to dinner tonight!`);
});

