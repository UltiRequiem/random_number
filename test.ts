import {
  assert,
  assertEquals,
  assertNotEquals,
} from "https://deno.land/std@0.149.0/testing/asserts.ts";
import { randomNumber } from "./mod.ts";

const between = (x: number, min: number, max: number) => x >= min && x <= max;

Deno.test("[randomNumber]", () => {
  assertNotEquals(randomNumber(), randomNumber());
});

Deno.test("[randomNumber] with Config", () => {
  assertNotEquals(
    randomNumber({ min: 2393, max: 3000 }),
    randomNumber({ integer: true }),
  );
});

Deno.test("[randomNumber] should return a number between 10 and 100", () => {
  const random = randomNumber({ min: 10, max: 100 });

  assert(between(random, 10, 100));
});

Deno.test("[randomNumber] Same min and max", () => {
  assertEquals(randomNumber({ min: 3, max: 3 }), 3);
});
