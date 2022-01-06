import {
  randomNumber,
  randomNumberGenerator,
  randomNumberList,
} from "../mod.ts";

const randomInteger = randomNumber({ integer: true, max: 5 });
console.log(`Random integer: ${randomInteger}`);

const randomDecimal = randomNumber();
console.log(`Random decimal: ${randomDecimal}`);

const randomNumbers = randomNumberList(randomInteger);
console.log(`List Random numbers: ${randomNumbers.join(", ")}.`);

const rdGenerator = randomNumberGenerator({ integer: true, max: 50 });

for (let index = 1; index < 5; index++) {
  console.log(`Time ${index}: ${rdGenerator()}`);
}
