import {
  assert,
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.119.0/testing/asserts.ts";
import randomItem, { randomMultipleItems } from "./mod.ts";

const letters = ["a", "b", "c", "d", "e"];

Deno.test("randomItem", () => {
  assert(letters.includes(randomItem(letters)));
});

Deno.test("randomMultipleItems", () => {
  const result = randomMultipleItems(letters, 4);

  assertEquals(result.length, 4);
  assert(result.every((value) => letters.includes(value)));
});

Deno.test("randomMultipleItems arguments validation", () => {
  assertThrows(() => randomMultipleItems(letters, -3));
});
