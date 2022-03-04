import {
  randomNumber,
  randomNumberGenerator,
  randomNumberList,
} from "../mod.ts";

const randomInteger = randomNumber({ max: 5 });
console.log(`Random integer: ${randomInteger}`);

const randomDecimal = randomNumber({ integer: false });
console.log(`Random decimal: ${randomDecimal}`);

const randomNumbers = randomNumberList(randomInteger);
console.log(`List Random numbers: ${randomNumbers.join(", ")}.`);

const rdGenerator = randomNumberGenerator({ max: 50 });

for (let index = 1; index < 5; index++) {
  console.log(`Time ${index}: ${rdGenerator()}`);
}
