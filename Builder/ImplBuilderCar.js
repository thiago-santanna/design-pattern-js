import IBuilderVehicle from "./IBuilderVehicle.js";
import Car from "./Car.js";

class ImplBuilderCar extends IBuilderVehicle {
  constructor() {
    super();
    this.car = new Car();
  }

  buildHead() {
    this.car.setHead("Car Head construction completed");
  }
  buildBody() {
    this.car.setBody("Car Body construction completed");
  }
  buildWheel() {
    this.car.setWheel("Car Wheel construction completed");
  }
  build() {
    return this.car;
  }
}

export default ImplBuilderCar;
