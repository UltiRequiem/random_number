export interface Config {
  min: number;
  max: number;
  integer: boolean;
}

export type Options = Partial<Config>;

export function parseOptions(options?: Options): Config {
  const config: Config = {
    min: 0,
    integer: true,
    max: options?.integer ? 1 : 100,
    ...options,
  };

  if (config.max < config.min) {
    throw new Error(
      `Expected max to be greater than to min, got ${config.max} as max and ${config.min} as min.`,
    );
  }

  return config;
}
