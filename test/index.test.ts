import { describe, test, expect, expectTypeOf } from "vitest"
import { HTRS96TMtoLatLong, LatLongToHTRS96TM } from "../src/index"

describe("HTRS96TMtoLatLong", () => {
    const [east, north] = [671340.09, 5048930.14]


    test("HTRS96TMtoLatLong should be defined", () => {
        expect(HTRS96TMtoLatLong).toBeDefined()
        expectTypeOf(HTRS96TMtoLatLong).toBeFunction()
    })
    test("HTRS96TMtoLatLong should accept arguments in format `(east: number, west: number)`", () => {
        expectTypeOf<typeof HTRS96TMtoLatLong>(HTRS96TMtoLatLong).parameters.toEqualTypeOf<[number, number]>()
    })
    test("HTRS96TMtoLatLong should transform data correctly", () => {
        expect(HTRS96TMtoLatLong(east, north)).toEqual({
            lat: 45.55919046947752, 
            long: 18.694755149804323
        })
    })
})

describe("LatLongToHTRS96TM", () => {
    const [lat, long] = [45.559191, 18.694755]

    test("LatLongToHTRS96TM should be defined", () => {
        expect(LatLongToHTRS96TM).toBeDefined()
        expectTypeOf(LatLongToHTRS96TM).toBeFunction()
    })

    test("LatLongToHTRS96TM should accept arguments in format `(lat: number, long: number)`", () => {
        expectTypeOf<typeof LatLongToHTRS96TM>(LatLongToHTRS96TM).parameters.toEqualTypeOf<[number, number]>()
    })

    test("LatLongToHTRS96TM should transform data correctly", () => {
        expect(LatLongToHTRS96TM(lat, long)).toEqual({
            east: 671340.07669196,
            north: 5048930.198637014
        })
    })
})
