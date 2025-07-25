import {
  assert,
  assertEquals,
  assertNotEquals,
  assertThrows,
} from "https://deno.land/std@0.224.0/testing/asserts.ts";
import { randomNumber } from "./mod.ts";

const between = (x: number, min: number, max: number) => x >= min && x <= max;

Deno.test("[randomNumber]", () => {
  assertNotEquals(randomNumber(), randomNumber());
});

Deno.test("[randomNumber] Not integers.", () => {
  assertNotEquals(
    randomNumber({ integer: false }),
    randomNumber({ integer: false }),
  );
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

Deno.test("[randomNumber] Throw when Max is not greater than min.", () => {
  assertThrows(() => {
    randomNumber({ min: 10, max: 3 });
  });
});
