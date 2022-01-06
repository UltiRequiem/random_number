# random_number

> Generate random number, a list of them or a generator with optional
> configuration.

## Usage

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

Receive [options](#options)

This is exported as default and as a named export for flexibility.

### [`randomNumberGenerator(options)`](./mod.ts#L19)

Receive [options](#options)

### [`randomNumberList(length, options)`](./mod.ts#L34)

#### length

Type: `number`

The length of the wanted array of random numbers.

### [`Options`](./utils.ts#L7)

A TypeScript type.

#### min

Type: `number` || `undefined`

The minimum value

#### max

The maximum value

Type: `number` || `undefined`

#### integer

Type: `boolean` || `undefined`

Makes the result an integer instead of a decimal

## License

This project is licensed under the [MIT License](./LICENSE.md).
