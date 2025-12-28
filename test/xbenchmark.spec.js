import { Xbenchmark } from "@/xbenchmark.js"

describe("Xbenchmark", () => {
  test("benchmark_ms", () => {
    const ms = Xbenchmark.benchmark_ms(() => 100)
    expect(0 < ms && ms < 1).toEqual(true)
  })

  test("benchmark_print", () => {
    // Xbenchmark.benchmark_print("foo", true, () => 100)
  })
})
