export const Xbenchmark = {
  benchmark_ms(block) {
    const start = performance.now()
    block()
    const end = performance.now()
    return end - start
  },

  benchmark_print(name, cond, block) {
    if (cond) {
      const ms = this.benchmark_ms(block)
      console.log(`${name}: ${ms} ms`)
    } else {
      block()
    }
  },
}
