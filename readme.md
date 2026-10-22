# Random Number

[![Code Coverage](https://codecov.io/gh/ultirequiem/random_number/branch/main/graph/badge.svg)](https://codecov.io/gh/ultirequiem/random_number)

Get a random number.

## Usage

### [Node.js 🐢🚀](https://npmjs.com/package/rnd)

```typescript
import { randomNumber } from "rnd";

randomNumber(); //=> 1 ... 100
randomNumber({ min: 10 }); //=> 10 ... 100
randomNumber({ min: 235, max: 239 }); //=> 235 ... 239
randomNumber({ integer: false }); //=> 0 ... 0.9
```

### Browser

You can use any [CDN](https://en.wikipedia.org/wiki/Content_delivery_network) 🔥

Eg. [ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
▶ [SkyPack](https://cdn.skypack.dev/@ultirequiem/random-number) _/_
[script tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) ▶
[JSDelivr](https://cdn.jsdelivr.net/npm/@ultirequiem/random-number).

The API is the same on all this platforms.

## Documentation

Is hosted on
[Deno Doc](https://doc.deno.land/https://deno.land/x/random_number/mod.ts) 📄

## CLI

### Install

- **Deno 🎃**

```sh
deno install https://deno.land/x/random_number/rnd.ts
```

- **Node.js 🐼**

```sh
npm install -g @ultirequiem/random-number
```

### Usage

```sh
rnd --help
```

[A binary for multiple platforms is provided too!](https://github.com/UltiRequiem/random_number/releases/latest)

## Support

Open an Issue, I will check it a soon as possible 👀

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
