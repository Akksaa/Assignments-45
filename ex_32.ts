// ex 32: Checking Usernames:
// solve:

let currentUsers = ["Haya", "Jihan", "Jannat", "Faris", "Saadi"];

let newUsers = ["Khadija", "Jihan", "Taliya", "saadi" , "Adam"];

newUsers.forEach(newUser => {

    let condition = currentUsers.some(currentuser => currentuser.toLowerCase() === newUser.toLowerCase());

    if (condition) {
        console.log(`Sorry, ${newUser} is already taken!`);
    } else {
        console.log(`This Username, ${newUser} is available.`)
    }
});
