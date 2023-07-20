"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  HTRS96TMtoLatLong: () => HTRS96TMtoLatLong,
  LatLongToHTRS96TM: () => LatLongToHTRS96TM
});
module.exports = __toCommonJS(src_exports);
var import_proj4 = __toESM(require("proj4"), 1);
import_proj4.default.defs([
  [
    "EPSG:3765",
    "+proj=tmerc +lat_0=0 +lon_0=16.5 +k=0.9999 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs "
  ],
  [
    "EPSG:4326",
    "+proj=longlat +datum=WGS84 +no_defs "
  ]
]);
function HTRS96TMtoLatLong(east, north) {
  const [long, lat] = (0, import_proj4.default)("EPSG:3765", "EPSG:4326", [east, north]);
  return {
    lat,
    long
  };
}
function LatLongToHTRS96TM(lat, long) {
  const [east, north] = (0, import_proj4.default)("EPSG:4326", "EPSG:3765", [long, lat]);
  return {
    east,
    north
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  HTRS96TMtoLatLong,
  LatLongToHTRS96TM
});
