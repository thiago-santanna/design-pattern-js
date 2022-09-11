import ImplBuilderCar from "./ImplBuilderCar.js";
import BuilderVehicle from "./BuilderVehicle.js";

const car = BuilderVehicle.build(new ImplBuilderCar());

console.log(car.getHead());
console.log(car.getBody());
console.log(car.getWheel());
