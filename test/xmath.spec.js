import { Xmath } from "@/xmath.js"

describe("Xmath", () => {
  test("map_range", () => {
    expect(Xmath.map_range(12, 10, 20, 100, 200)).toEqual(120)
  })
})
