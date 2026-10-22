import { expect, it } from "vitest";
import { randomNumber } from "./index.js";

const between = (x: number, min: number, max: number) => x >= min && x <= max;

it("[randomNumber]", () => {
  expect(randomNumber()).not.toEqual(randomNumber());
});

it("[randomNumber] Not integers.", () => {
  expect(randomNumber({ integer: false })).not.toEqual(
    randomNumber({ integer: false }),
  );
});

it("[randomNumber] with Config", () => {
  expect(randomNumber({ min: 2393, max: 3000 })).not.toEqual(
    randomNumber({ integer: true }),
  );
});

it("[randomNumber] should return a number between 10 and 100", () => {
  const random = randomNumber({ min: 10, max: 100 });

  expect(between(random, 10, 100)).toBeTruthy();
});

it("[randomNumber] Same min and max", () => {
  expect(randomNumber({ min: 3, max: 3 })).toEqual(3);
});

it("[randomNumber] Throw when Max is not greater than min.", () => {
  expect(() => {
    randomNumber({ min: 10, max: 3 });
  }).toThrow();
});
