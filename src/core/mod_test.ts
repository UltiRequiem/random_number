import { assert, assertEquals, assertNotEquals } from "../test_deps.ts";
import {
  randomNumber,
  randomNumberGenerator,
  randomNumberList,
} from "./mod.ts";

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

Deno.test("[randomNumberGenerator]", () => {
  const rander = randomNumberGenerator();
  assertNotEquals(rander(), rander());
});

Deno.test("[randomNumberGenerator] with Config", () => {
  const rander = randomNumberGenerator({ min: 1, max: 1000, integer: true });
  assertNotEquals(rander(), rander());
});

Deno.test("[randomNumberList] length", () => {
  const randomNumbers = randomNumberList(10);
  assertEquals(randomNumbers.length, 10);
});

Deno.test("[randomNumberList] length with config", () => {
  const randomNumbers = randomNumberList(10, {
    min: 1,
    max: 1000,
    integer: true,
  });

  assertEquals(randomNumbers.length, 10);
});

Deno.test("[randomNumber] should return a number between 10 and 100", () => {
  const random = randomNumber({ min: 10, max: 100 });
  assert(between(random, 10, 100));
});
