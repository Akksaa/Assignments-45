"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let userNames = ["Marrie", "Nick", "Admin", "Alia", "Serrah"];
function greeting(usernames) {
    if (usernames.length === 0) {
        console.log("User list is empty, We need to find some users!");
        return;
    }
    for (const i in userNames) {
        if (userNames[i] == "Admin") {
            console.log("Hello! Admin, would you like to see status reports?");
        }
        else {
            console.log(`hello! ${userNames[i]}, thank you for logging in again.`);
        }
    }
}
greeting(userNames);
