"use strict";
// ex 38: Cities:
// solve:
Object.defineProperty(exports, "__esModule", { value: true });
function describeCity(city, country = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
;
describeCity("lahore", "Pakistan");
describeCity("London", "United Kingdom");
describeCity("karachi");
