import Strategy from "./strategy.js";

class Subtraction extends Strategy {
  calculate(valueA, valueB) {
    return valueA - valueB;
  }
}

export default Subtraction;
