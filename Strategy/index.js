import Context from "./Context.js";
import Addition from "./Addition.js";
import Subtraction from "./Subtraction.js";
import Multiplication from "./Multiplication.js";
import Division from "./Division.js";

const contextAdd = new Context(new Addition());
const contextSub = new Context(new Subtraction());
const contextMul = new Context(new Multiplication());
const contextDiv = new Context(new Division());

console.log(contextAdd.calculate(2, 3));
console.log(contextSub.calculate(3, 1));
console.log(contextMul.calculate(2, 3));
console.log(contextDiv.calculate(10, 2));
