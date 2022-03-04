# random_number

> Includes REST API, CLI Tool and Package

Generate a random number, a list of them, or a generator, with optional
configuration!

## Usage

```typescript
import { randomNumber } from "https://deno.land/x/random_number/mod.ts";

randomNumber(); //=> 21
randomNumber({ max: 3 }); //=> 2
randomNumber({ min: 3, max: 6 }); //=> 4
randomNumber({ integer: false }); //=> 0.419534816957152
```

All API 👇

```typescript
import {
  randomNumber,
  randomNumberGenerator,
  randomNumberList,
} from "https://deno.land/x/random_number/mod.ts";

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
```

> Pull Request Expanding the API are welcome

## Docs

[Check the Auto Generated Docs](https://doc.deno.land/https://deno.land/x/random_number/mod.ts)

## License

This project is licensed under the [MIT License](./license).
