# random_item

> Get a random item from an array

## Usage

```typescript
import randomItem, {
  randomMultipleItems,
} from "https://deno.land/x/random_item/mod.ts";

randomItem(["🐴", "🦄", "🌈"]);
//=> '🦄'

randomMultipleItems(["🐴", "🦄", "🌈"], 2);
//=> ['🌈', '🦄']
```

## License

This project is licensed under the [MIT License](./LICENSE.md).
