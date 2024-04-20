// Ex 45: Cars:
// solve:

function createCar(manufacturer: string, model :string, ...options : [string , any][]) {
     
    let carDetail : any = {
          manufacturer : manufacturer,
          model : model,
    };

    for(const [key , value] of options){
        carDetail[key] = value
    }

    return carDetail;
};

const myCar = createCar("Mercedes" , "E-Class" , ["color" , "Black"] , ["year" , 2024] , ["speed", "209 km/h"]);
console.log(myCar);
 