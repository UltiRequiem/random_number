export interface Config {
  min: number;
  max: number;
  integer: boolean;
}

export type Options = Partial<Config>;

export function parseOptions(options: Options | undefined): Config {
  const max = options?.integer ? 100 : 1;

  const config: Config = {
    min: 0,
    max,
    integer: false,
    ...options,
  };

  if (config.max < config.min) {
    throw new Error(
      `Expected max to be greater than to min, got ${config.max} as max and ${config.min} as min.`,
    );
  }

  return config;
}
