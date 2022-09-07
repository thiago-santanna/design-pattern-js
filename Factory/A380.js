import Fly from "./Fly.js";

class A380 extends Fly {
  static id = 3;
  shooter() {
    console.log("a380 atirando tiros .40");
  }
}

export default A380;
