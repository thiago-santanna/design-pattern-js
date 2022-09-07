import Fly from "./Fly.js";

class Banshee extends Fly {
  static id = 1;
  shooter() {
    console.log("banshee atirando Laser");
  }
}

export default Banshee;
