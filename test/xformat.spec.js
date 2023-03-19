import { Xformat } from "@/xformat.js"

describe("Xformat", () => {
  test("sprintf", () => {
    expect(Xformat.sprintf("%02d", 1)).toEqual("01")
    expect(Xformat.sprintf("%j", {a:1})).toEqual("{ a: 1 }")
  })
})
