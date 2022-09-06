import Strategy from "./strategy.js";

class Multiplication extends Strategy {
  calculate(valueA, valueB) {
    return valueA * valueB;
  }
}

export default Multiplication;
