// ex 42: Great Magicians:
// solve:

function showMagicians( magicians:string[] ){
    magicians.forEach(name => {
        console.log(name)
    })  
};

function makeGreat(magicians: string[]) {
    return magicians.map(names => `The Great ${names}.`)
};

let magicianNames = ["Ricky Jay", "Shin Lim", "Harry Houdini"];

let greatMagicians = makeGreat(magicianNames);

showMagicians(greatMagicians); //modified names in list.



