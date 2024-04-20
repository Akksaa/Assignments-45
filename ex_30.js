"use strict";
//ex 30 : Hello Admin:
//solution:
Object.defineProperty(exports, "__esModule", { value: true });
const username = ["Marrie", "Nick", "Admin", "Alia", "Serrah"];
function greeting() {
    for (const i in username) {
        if (username[i] == "Admin") {
            console.log("Hello! Admin, would you like to see status reports?");
        }
        else {
            console.log(`hello! ${username[i]}, thank you for logging in again.`);
        }
    }
}
greeting();
