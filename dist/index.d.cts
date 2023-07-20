interface HTRS96TMtoLatLongReturn {
    lat: number;
    long: number;
}
interface LatLongToHTRS96TMReturn {
    east: number;
    north: number;
}
declare function HTRS96TMtoLatLong(east: number, north: number): HTRS96TMtoLatLongReturn;
declare function LatLongToHTRS96TM(lat: number, long: number): LatLongToHTRS96TMReturn;

export { HTRS96TMtoLatLong, LatLongToHTRS96TM };
