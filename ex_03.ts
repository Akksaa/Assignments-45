 //exercise 3: 
 //(a)toUpperCase:
 //solve:
 
 let randomName = "Faris ahmed";
 console.log(`Uppercase:`, randomName.toUpperCase());

 //(b)toLowerCase:
 //solve:

 console.log(`Lowercase:`, randomName.toLowerCase());

//(c)toTitleCase:
//solve:

console.log(`Titlecase:`, randomName.replace(/\b\w/g, (char) => char.toUpperCase()))


