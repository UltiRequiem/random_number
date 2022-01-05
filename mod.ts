import type { Options } from "./utils.ts";
import { parseOptions } from "./utils.ts";

/**
 * @param [options] Options to build the random number
 * @returns A random number with the given options
 */
export default function randomNumber(options?: Options) {
  const { min, max, integer } = parseOptions(options);
  if (max === min) return min;
  const r = Math.random() * (max - min + Number(integer)) + min;
  return integer ? Math.floor(r) : r;
}

/**
  @param [options] Configurations to build the random number
  @returns A function that generates a random number with the originally given option
*/
export function randomNumberGenerator(options?: Options) {
  const config = parseOptions(options);

  return (
    min = config.min,
    max = config.max,
    integer = config.integer,
  ) => randomNumber({ min, max, integer });
}

/**
 * @param length The length of the list, they quantity of generated numbers
 * @param [options] Configurations to build the random number
 * @returns A list with the given length filled with random numbers generated with the given options
 */
export function randomNumberList(length: number, options?: Options) {
  const config = parseOptions(options);
  const generator = randomNumberGenerator(config);

  return Array.from({ length }, () => generator());
}

export { randomNumber };
export type { Options };
