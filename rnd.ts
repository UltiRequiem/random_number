import { Command } from "https://deno.land/x/cliffy@v0.24.3/command/mod.ts";
import { randomNumber } from "./mod.ts";

const command = new Command()
  .name("rnd")
  .version("1.0.0")
  .description("Get a random number on your CLI.")
  .option("-integer", "Integer?")
  .option("-min <number:number>", "The minimum number.")
  .option("-max <number:number>", "The Maximum number.");

const { options } = await command.parse();

console.log(randomNumber(options));
