import { parseOptions } from "./utils.ts";

import { assertThrows } from "./test_deps.ts";

import type { Config, Options } from "./utils.ts";

Deno.test("[parseOptions] min bigger than max", () => {
  const opts: [Config, Options] = [
    { min: 10, max: 5, integer: true },
    { min: 10, max: 5 },
  ];

  opts.forEach((value) => {
    assertThrows(() => parseOptions(value));
  });
});
