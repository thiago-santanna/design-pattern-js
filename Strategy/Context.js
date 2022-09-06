class Context {
  constructor(strategy) {
    this.strategy = strategy;
  }

  calculate(valueA, valueB) {
    return this.strategy.calculate(valueA, valueB);
  }
}

export default Context;
