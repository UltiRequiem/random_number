# Random Number

Get a random number within a range.

[![npm](https://img.shields.io/npm/v/@ultirequiem/random-number?logo=npm&color=cb3837)](https://www.npmjs.com/package/@ultirequiem/random-number)
[![npm downloads](https://img.shields.io/npm/dm/@ultirequiem/random-number?color=cb3837)](https://www.npmjs.com/package/@ultirequiem/random-number)
[![CI](https://github.com/UltiRequiem/random_number/actions/workflows/ci.yaml/badge.svg)](https://github.com/UltiRequiem/random_number/actions/workflows/ci.yaml)
[![codecov](https://codecov.io/gh/UltiRequiem/random_number/graph/badge.svg)](https://codecov.io/gh/UltiRequiem/random_number)

## Usage

ESM only, types included: the same import works in Node.js, Bun and browsers.

```typescript
import { randomNumber } from "@ultirequiem/random-number";

randomNumber(); //=> 1 ... 100
randomNumber({ min: 10 }); //=> 10 ... 100
randomNumber({ min: 235, max: 239 }); //=> 235 ... 239
randomNumber({ integer: false }); //=> 0 ... 0.9
```

## Support

Open an Issue, I will check it as soon as possible 👀

If you want to hurry me up a bit
[send me a tweet](https://twitter.com/UltiRequiem) 😆

Don't forget to star the repo ⭐

## Versioning

We use [SemVer](http://semver.org) for versioning. For the versions available,
see the [tags](https://github.com/UltiRequiem/random_number/tags).

## Authors

[Eliaz Bobadilla (a.k.a UltiRequiem)](https://ultirequiem.com) - Creator and
Maintainer 💪

See also the full list of
[contributors](https://github.com/UltiRequiem/random_number/contributors) who
participated in this project.

## Licence

Licensed under the MIT License.
