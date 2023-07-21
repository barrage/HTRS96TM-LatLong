# HTRS96TM-LatLong

[![npm version](https://img.shields.io/npm/v/htrs96tm-latlong.svg)](https://www.npmjs.com/package/htrs96tm-latlong)
[![npm downloads](https://img.shields.io/npm/dm/htrs96tm-latlong.svg)](https://www.npmjs.com/package/htrs96tm-latlong)

HTRS96TM-LatLong is an NPM package that provides convenient methods for converting coordinates between the HTRS96/TM (Croatian Terrestrial Reference System / Transverse Mercator) and WGS84 (World Geodetic System) latitudes and longitudes.

## Installation

You can install the package via NPM:

```bash
npm install htrs96tm-latlong
```
## Usage

To use the htrs96tm-latlong package, first, require or import it in your code:
```
const { HTRS96TMtoLatLong, LatLongToHTRS96TM } = require('htrs96tm-latlong');
// or
import { HTRS96TMtoLatLong, LatLongToHTRS96TM } from 'htrs96tm-latlong';
```
### Converting HTRS96 to WGS84
```
const wgs84Coordinates = HTRS96TMtoLatLong(671340.01, 5048930.27);

console.log(wgs84Coordinates); // { lat: 45.55919165808545, long: 18.694754171344968 }
```


### Converting WGS84 to HTRS96

```
const htrs96Coordinates = LatLongToHTRS96TM(45.55919165808545, 18.694754171344968);

console.log(htrs96Coordinates); // { east: 671340.01, north: 5048930.2700000005 }
```


## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, feel free to open an issue or create a pull request on the GitHub repository.

