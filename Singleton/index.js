import Singleton from "./Singleton.js";

const instanceOne = Singleton.getInstance();
const instanceTwo = Singleton.getInstance();

console.log(instanceOne === instanceTwo);
