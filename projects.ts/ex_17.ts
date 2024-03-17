//exercise 17 : shrinking guests:
//solution:

console.log("sorry everyone, i can invite only two people for dinner!");
let lessGuests : String[] = ["izaan", "Nimra", "Fatima", "Zahra","Amna", "faryal", "Hayyan"];

let popped1= lessGuests.pop();
console.log(`${popped1}, i am sorry i can not invite you to dinner.`);
let popped2 = lessGuests.pop();
console.log(`${popped2}, i am sorry i can not invite you to dinner.`);
let popped3 = lessGuests.pop();
console.log(`${popped3}, i am sorry i can not invite you to dinner.`);
let popped4 = lessGuests.pop();
console.log(`${popped4}, i am sorry i can not invite you to dinner.`);
let popped5 = lessGuests.pop();
console.log(`${popped5}, i am sorry i can not invite you to dinner.`);

lessGuests.forEach(lessGuests => {
    console.log(`hey ${lessGuests}, i would like to invite you to dinner tonight!`)
});

lessGuests.pop();
lessGuests.pop();
console.log("The empty list:",lessGuests); 









