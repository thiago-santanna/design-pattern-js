import Banshee from "./Banshee.js";
import A380 from "./A380.js";
import B747 from "./B747.js";

class FlysFactory {
  static create(type) {
    let fly = null;
    switch (type) {
      case 1:
        fly = new Banshee();
        break;
      case 2:
        fly = new A380();
        break;
      case 3:
        fly = new B747();
        break;
      default:
        break;
    }
    return fly;
  }
}

export default FlysFactory;
