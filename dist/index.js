// src/index.ts
import proj4 from "proj4";
proj4.defs([
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
  const [long, lat] = proj4("EPSG:3765", "EPSG:4326", [east, north]);
  return {
    lat,
    long
  };
}
function LatLongToHTRS96TM(lat, long) {
  const [east, north] = proj4("EPSG:4326", "EPSG:3765", [long, lat]);
  return {
    east,
    north
  };
}
export {
  HTRS96TMtoLatLong,
  LatLongToHTRS96TM
};
