import Fly from "./Fly.js";

class B747 extends Fly {
  static id = 2;
  shooter() {
    console.log("b747 atirando bazuca");
  }
}

export default B747;
