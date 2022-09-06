import Strategy from "./strategy.js";

class Addition extends Strategy {
  calculate(valueA, valueB) {
    return valueA + valueB;
  }
}

export default Addition;
