import { assertEquals, assertNotEquals } from "./test_deps.ts";
import randomNumber, {
  randomNumberGenerator,
  randomNumberList,
} from "./mod.ts";

Deno.test("[randomNumber]", () => {
  assertNotEquals(randomNumber(), randomNumber());
});

Deno.test("[randomNumber] with Config", () => {
  assertNotEquals(randomNumber({ min: 2393 }), randomNumber({ integer: true }));
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
