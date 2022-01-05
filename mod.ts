export default function randomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export function randomMultipleItems<T>(array: T[], count: number): T[] {
  if (count <= 0) {
    throw new RangeError(`Got ${count}, expected a non-negative integer.`);
  }

  return [...Array.from({ length: count })].map(() => randomItem(array));
}
