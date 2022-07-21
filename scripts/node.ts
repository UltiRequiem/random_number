import { buildPackage } from "https://deno.land/x/ultirequiem@0.0.17/node.ts";

buildPackage(
  {
    repoName: "@ultirequiem/random-number",
    description: "Create random numbers in a configurable way.",
    homepage: "https://ulti.js.org/random_number",
    keywords: ["random", "math"],
    license: "MIT",
    version: "2.1.0",
  },
  {
    entryPoints: ["./mod.ts", { name: "rnd", path: "./rnd.ts", kind: "bin" }],
    typeCheck: false,
    supportCJS: false,
    shims: { deno: true, prompts: true },
  },
);
