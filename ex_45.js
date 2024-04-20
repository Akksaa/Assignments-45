"use strict";
// Ex 45: Cars:
// solve:
Object.defineProperty(exports, "__esModule", { value: true });
function createCar(manufacturer, model, ...options) {
    let carDetail = {
        manufacturer: manufacturer,
        model: model,
    };
    for (const [key, value] of options) {
        carDetail[key] = value;
    }
    return carDetail;
}
;
const myCar = createCar("Mercedes", "E-Class", ["color", "Black"], ["year", 2024], ["speed", "209 km/h"]);
console.log(myCar);
