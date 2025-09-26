export const Xmath = {
  map_range(val, in_min, in_max, out_min, out_max) {
    if (in_min === in_max) {
      throw new Error("Xmath.map_range: in_min と in_max が同じなので計算できません")
    }
    const ratio = (val - in_min) / (in_max - in_min)
    return ratio * (out_max - out_min) + out_min
  }
}
