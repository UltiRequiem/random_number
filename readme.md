# random_number

> Generate a random number, a list of them, or a generator, with optional
> configuration!

## Usage

> `randomNumber` is exported as default and named

```typescript
import randomNumber from "https://deno.land/x/random_number/mod.ts";

randomNumber(); //=> 0.419534816957152
```

A more complete example using all API:

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

## Docs

[Check the Auto Generated Docs](https://doc.deno.land/https://deno.land/x/random_number/mod.ts)

## License

This project is licensed under the [MIT License](./license).
