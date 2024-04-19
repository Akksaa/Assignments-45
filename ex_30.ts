//ex 30 : Hello Admin:
//solution:

const username : string[]= ["Marrie", "Nick", "Admin", "Alia", "Serrah"];

function greeting() : void {
         for (const i in username)

    {if (username[i] == "Admin") {
       console.log("Hello! Admin, would you like to see status reports?");

} else {
    console.log(`hello! ${username[i]}, thank you for logging in again.`);
}}}
greeting();