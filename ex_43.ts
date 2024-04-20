// ex 43: Unchanged Magicians:
// solve:

function makeGreat(magicians: string[]) {
    return  magicians.map(names => `The Great ${names}.`)
};

function showMagician( magicians:string[] ){
     magicians.forEach(name => console.log(name)); 
};


let magicianNames = ["Ricky Jay", "Shin Lim", "Harry Houdini"];

let greatMagicians = makeGreat([...magicianNames]);

// Original names:

console.log("The list of Original names: \n")
showMagician(magicianNames);

// Modified names:

console.log("The list of Modified names: \n")
showMagician(greatMagicians);