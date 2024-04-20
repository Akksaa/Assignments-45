// ex 44: Sandwiches:
// solve:

function sandwiches(...items : string[]){

    console.log(`\nMaking a sandwich with following Items: \n`)
   
    for(let item of items){
        console.log(item)
    }
    console.log(`\nEnjoy Your Sandwich!`)
}

// Call the function 3 times with 3 different arguements:

sandwiches('Egg', 'Chicken', 'Onion', 'Ketchup', 'Cheese');

sandwiches("Bread", "Peanut Butter");

sandwiches( "Cucumber", "Chicken", "Egg" , "Cheese", "Lettuce", "Tomato");