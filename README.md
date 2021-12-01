![r6operators Header Image](https://i.imgur.com/1qhhXYK.png)

# r6operators

![GitHub last commit](https://img.shields.io/github/last-commit/marcopixel/r6operators.svg?style=for-the-badge)
[![GitHub stars](https://img.shields.io/github/stars/marcopixel/r6operators.svg?style=for-the-badge)](https://github.com/marcopixel/r6operators/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/marcopixel/r6operators.svg?style=for-the-badge)](https://github.com/marcopixel/r6operators/network)
[![GitHub license](https://img.shields.io/github/license/marcopixel/r6operators.svg?style=for-the-badge)](https://github.com/marcopixel/r6operators)

r6operators is a collection of high-quality vectorized Rainbow Six: Siege Operator icons & metadata for Node.js.

This project started as way for people to get high-resolution operator icons for Rainbow Six: Siege operators, especially as vector graphics gained popularity in web development in the recent years. All icons have been remade by hand and they got the same aspect ratio & alignment for more consistent usage.

[https://r6operators.marcopixel.eu/](https://r6operators.marcopixel.eu/)

## Usage

#### 1. Install

Install the package with [npm](https://docs.npmjs.com/getting-started/what-is-npm):

```shell
npm install r6operators
```

#### 2. Use it

```js
import r6operators from "r6operators"
// default export

import { ace, getSVGIcon } from "r6operators"
// named exports

r6operators.alibi
// {
// 	  id: 'alibi',
// 	  name: 'Alibi',
// 	  role: 'Defender',
// 	  unit: 'GIS',
// 	  ratings: {
// 		  health: 1,
// 		  speed: 3,
// 		  difficulty: 3
// 	  },
// 	  meta: {
// 		  gender: 'f',
// 		  country: 'it',
// 		  season: 'Y3S2',
// 		  height: 171,
// 		  weight: 63
// 	  },
// 	  bio: {
// 		  real_name: 'Aria de Luca',
// 		  birthplace: 'Tripoli, Lybia'
// 	  },
// 	  svg: {
// 		  contents: [SVG Contents],
// 		  attributes: {
// 			  xmlns: 'http://www.w3.org/2000/svg',
// 			  viewBox: '0 0 350 350',
// 			  style: 'enable-background:new 0 0 350 350',
// 			  space: 'preserve',
// 			  class: 'r6operators r6operators-alibi'
// 		  }
// 	  },
// 	  toSVG: [Function]
// }

r6operators.alibi.toSVG()
// <svg class="r6operators r6operators-alibi" ... >...</svg>

r6operators.alibi.toSVG({ class: "large", "stroke-width": 2, color: "red" })
// <svg class="r6operators r6operators-alibi large" stroke-width="2" color="red" ... >...</svg>
```

You can also access the optimized SVG icons directly from `node_modules\r6operators\dist\icons` if you desire.

## Reference

### `r6operators.[name]`

An object containing all data about the operator, including the svg contents and attributes.

> Note: You can find all possible operator names in the [operators/index.ts](https://github.com/marcopixel/r6operators/blob/master/operators/index.ts) file
>
> Please keep in mind that the properties `bio`, `meta` and `ratings` are not available on recruits (`recruit_blue, recruit_green, recruit_orange, recruit_red, recruit_yellow`).

##### Example:

```js
r6operators.alibi
// {
// 	  id: 'alibi',
// 	  name: 'Alibi',
// 	  role: 'Defender',
// 	  unit: 'GIS',
// 	  ratings: {
// 		  health: 1,
// 		  speed: 3,
// 		  difficulty: 3
// 	  },
// 	  meta: {
// 		  gender: 'f',
// 		  country: 'it',
// 		  season: 'Y3S2',
// 		  height: 171,
// 		  weight: 63
// 	  },
// 	  bio: {
// 		  real_name: 'Aria de Luca',
// 		  birthplace: 'Tripoli, Lybia'
// 	  },
// 	  svg: {
// 		  contents: [SVG Contents],
// 		  attributes: {
// 			  xmlns: 'http://www.w3.org/2000/svg',
// 			  viewBox: '0 0 350 350',
// 			  style: 'enable-background:new 0 0 350 350',
// 			  space: 'preserve',
// 			  class: 'r6operators r6operators-alibi'
// 		  }
// 	  },
// 	  toSVG: [Function]
// }

r6operators.alibi.unit.toString()
// GIS
```

---

### `r6operators.[name].toSVG([attrs])`

Returns an SVG string of the operator icon.

#### Parameters

| Name               | Type   | Description                                                                                                                                                                                                                  |
| ------------------ | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `attrs` (optional) | Object | Key-value pairs in the `attrs` object will be mapped to HTML attributes on the `<svg>` tag (e.g. `{ foo: 'bar' }` maps to `foo="bar"`). All default attributes on the `<svg>` tag can be overridden with the `attrs` object. |

```js
r6operators.alibi.toSVG()
// <svg class="r6operators r6operators-alibi" ... >...</svg>

r6operators.alibi.toSVG({ class: "large" })
// <svg class="r6operators r6operators-alibi large" ... >...</svg>

r6operators.alibi.toSVG({ "stroke-width": 2, color: "red" })
// <svg class="r6operators r6operators-alibi" stroke-width="2" color="red" ... >...</svg>
```

---

### `getSVGIcon([op], [attrs])`

Returns an SVG string of the operator icon.

#### Parameters

| Name               | Type     | Description                                                                                                                                                                                                                  |
| ------------------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `op`               | Operator | Operator object                                                                                                                                                                                                              |
| `attrs` (optional) | Object   | Key-value pairs in the `attrs` object will be mapped to HTML attributes on the `<svg>` tag (e.g. `{ foo: 'bar' }` maps to `foo="bar"`). All default attributes on the `<svg>` tag can be overridden with the `attrs` object. |

```js
import { alibi, getSVGIcon } from "r6operators"

getSVGIcon(ace)
// <svg class="r6operators r6operators-alibi" ... >...</svg>

getSVGIcon(ace, { class: "large" })
// <svg class="r6operators r6operators-alibi large" ... >...</svg>
```

## Contributing

For more info on how to contribute please see the [contribution guidelines](https://github.com/marcopixel/r6operators/blob/master/CONTRIBUTING.md).

Caught a mistake or want to contribute to the documentation? [Edit this page on Github](https://github.com/marcopixel/r6operators/blob/master/README.md)

## Credits

- [@colebemis](https://github.com/colebemis) for his work on [feather](https://github.com/feathericons/feather), which gave me an awesome reference for this project.
- [@dtSniper](https://twitter.com/sniperdt) for creating the IQ, Thatcher, Fuze, Glaz, Bandit, Kapkan, Tachanka, Pulse, Sledge and Doc icons.
- [@joeyfjj](https://twitter.com/joeyfjj) for creating the Goyo, Mute, Smoke, Jäger and Blitz icons.
- [@LaxisB](https://github.com/LaxisB/), [@NaughtyMuppet](https://github.com/NaughtyMuppet) & [@danielwerg](https://github.com/danielwerg) for general help on this project. <3

## License

r6operators is licensed under the [MIT License](https://github.com/marcopixel/r6operators/blob/master/LICENSE).

This project is not affiliated with Ubisoft Entertainment. Tom Clancy’s, Rainbow Six, The Soldier Icon, Ubisoft and the Ubisoft logo are trademarks of Ubisoft Entertainment.
