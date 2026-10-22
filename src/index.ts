export interface RandomNumberOptions {
  min: number;
  max: number;
  integer: boolean;
}

function parseOptions(
  options: Partial<RandomNumberOptions>,
): RandomNumberOptions {
  const {
    integer = true,
    min = integer ? 1 : 0,
    max = integer ? 100 : 1,
  } = options;

  if (max < min) {
    throw new RangeError("Max must be greater than min.");
  }

  return { min, max, integer };
}

export function randomNumber(options: Partial<RandomNumberOptions> = {}) {
  const { min, max, integer } = parseOptions(options);

  const result = Math.random() * (max - min) + min;

  return integer ? Math.floor(result) : result;
}
