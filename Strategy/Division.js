import Strategy from "./strategy.js";

class Division extends Strategy {
  calculate(valueA, valueB) {
    return valueA / valueB;
  }
}

export default Division;
