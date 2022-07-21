import { randomNumber } from "./mod.ts";

console.log(randomNumber()); //=> 1 ... 100

console.log(randomNumber({ min: 10 })); //=> 10 ... 100

console.log(randomNumber({ min: 235, max: 239 })); //=> 235 ... 239

console.log(randomNumber({ integer: false })); //=> 0 ... 0.9
