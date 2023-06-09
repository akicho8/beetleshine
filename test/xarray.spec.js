import { Xarray } from "@/xarray.js"

const ARRAY_VALUE1 = [
  0,
  1,
  "",
  {},
  {a: 0},
  [],
  ["a"],
  true,
  false,
  null,
  undefined,
]

describe("Xarray", () => {
  test("ary_each_slice_to_a", () => {
    expect(Xarray.ary_each_slice_to_a(["a", "b", "c", "d"], 2)).toEqual([["a", "b"], ["c", "d"]])
    expect(Xarray.ary_each_slice_to_a(["a", "b", "c"], 2)).toEqual([["a", "b"], ["c"]])
    expect(() => Xarray.ary_each_slice_to_a(["a", "b"], 0)).toThrow()
    expect(Xarray.ary_each_slice_to_a([], 2)).toEqual([])
  })
  test("ary_reverse", () => {
    const v = ["a", "b", "c"]
    expect(Xarray.ary_reverse(v)).toEqual(["c", "b", "a"])
    expect(v).toEqual(["a", "b", "c"])
  })
  test("ary_shuffle", () => {
    const v = ["a", "b", "c"]
    Xarray.ary_shuffle(v)
    expect(v).toEqual(["a", "b", "c"])
  })
  test("ary_wrap", () => {
    expect(Xarray.ary_wrap(null)).toEqual([null])
    expect(Xarray.ary_wrap([])).toEqual([])
    expect(Xarray.ary_wrap("a")).toEqual(["a"])
    expect(Xarray.ary_wrap({})).toEqual([{}])
  })
  test("ary_cycle_at", () => {
    expect(Xarray.ary_cycle_at([0, 1], -1)).toEqual(1)
    expect(Xarray.ary_cycle_at([0, 1], 2)).toEqual(0)
  })
  test("ary_move", () => {
    const ary = ["a", "b", "c"]
    expect(Xarray.ary_move(ary, 0, 1)).toEqual(["b", "a", "c"])
    expect(ary).toEqual(["a", "b", "c"])
  })
  test("ary_rotate", () => {
    const ary = ["a", "b", "c"]
    expect(Xarray.ary_rotate(ary)).toEqual(["b", "c", "a"])
    expect(Xarray.ary_rotate(ary, 2)).toEqual(["c", "a", "b"])
    expect(Xarray.ary_rotate(ary, -2)).toEqual(["b", "c", "a"])
    expect(ary).toEqual(["a", "b", "c"])
  })
  test("ary_take", () => {
    const ary = ["a", "b", "c"]
    expect(Xarray.ary_take(ary, 1)).toEqual(["a"])
    expect(ary).toEqual(["a", "b", "c"])
  })
  test("ary_drop", () => {
    const ary = ["a", "b", "c"]
    expect(Xarray.ary_drop(ary, 1)).toEqual(["b", "c"])
    expect(ary).toEqual(["a", "b", "c"])
  })
  test("ary_compact", () => {
    expect(Xarray.ary_compact(ARRAY_VALUE1)).toEqual([0, 1, "", {}, {a: 0}, [], ["a"], true, false])
  })
  test("ary_compact_blank", () => {
    expect(Xarray.ary_compact_blank(ARRAY_VALUE1)).toEqual([0, 1, {a:0}, ["a"], true])
  })
})
