# random_number

> Generate random number, a list of them or a generator with optional
> configuration.

## Usage

```typescript
import randomNumber from "https://deno.land/x/random_number/mod.ts";

randomNumber(); //=> 0.419534816957152
```

A more complete example:

```typescript
import {
  randomNumber,
  randomNumberGenerator,
  randomNumberList,
} from "https://deno.land/x/random_number/mod.ts";

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
```

## API

### [`randomNumber(options)`](./mod.ts#L8)

### [`randomNumberGenerator(options)`](./mod.ts#L19)

### [`randomNumberList(length, options)`](./mod.ts#L34)

## License

This project is licensed under the [MIT License](./LICENSE.md).
