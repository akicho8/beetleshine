import { Xobject } from "./xobject.js"
import { Xinteger } from "./xinteger.js"
import { Xassertion } from "./xassertion.js"
import _ from "lodash"

export const Xarray = {
  ary_first(ary, n = null) {
    Xassertion.assert_kind_of_array(ary)
    if (n == null) {
      return ary[0]
    } else {
      return ary.slice(0, n)
    }
  },

  ary_last(ary, n = null) {
    Xassertion.assert_kind_of_array(ary)
    if (n == null) {
      return ary[ary.length - 1]
    } else {
      return ary.slice(-n)
    }
  },

  ary_take(ary, index) {
    Xassertion.assert_kind_of_array(ary)
    return _.take(ary, index)
  },

  ary_drop(ary, index) {
    Xassertion.assert_kind_of_array(ary)
    return _.drop(ary, index)
  },

  ary_sort_by(ary, block) {
    Xassertion.assert_kind_of_array(ary)
    const wrap = ary.map(e => ({ source: e, value: block(e) }))
    const sorted = _.sortBy(wrap, "value")
    return sorted.map(e => e.source)
  },

  ary_find_all(ary, block) {
    Xassertion.assert_kind_of_array(ary)
    return ary.filter(e => block(e))
  },

  ary_find_index(ary, block) {
    Xassertion.assert_kind_of_array(ary)
    const index = ary.findIndex(e => block(e))
    if (index >= 0) {
      return index
    }
  },

  // expect(Gs.ary_each_slice_to_a(["a", "b", "c", "d"], 2)).toEqual([["a", "b"], ["c", "d"]])
  // expect(Gs.ary_each_slice_to_a(["a", "b", "c"], 2)).toEqual([["a", "b"], ["c"]])
  // expect(() => Gs.ary_each_slice_to_a(["a", "b"], 0)).toThrow()
  // expect(Gs.ary_each_slice_to_a([], 2)).toEqual([])
  ary_each_slice_to_a(ary, step) {
    Xassertion.assert_kind_of_array(ary)
    if (step <= 0) {
      throw new Error("invalid slice size")
    }
    const new_ary = []
    for (let i = 0; i < ary.length; i += step) {
      new_ary.push(ary.slice(i, i + step))
    }
    return new_ary
  },

  // 元を破壊させない
  ary_reverse(ary) {
    Xassertion.assert_kind_of_array(ary)
    return [...ary].reverse()
  },

  // 元は破壊しない
  ary_shuffle(ary) {
    Xassertion.assert_kind_of_array(ary)
    return _.shuffle(ary)
  },

  ary_sample(ary) {
    Xassertion.assert_kind_of_array(ary)
    return _.sample(ary)
  },

  // 必ず配列にする
  ary_wrap(ary) {
    if (!_.isArray(ary)) {
      ary = [ary]
    }
    return ary
  },

  // はみ出ない
  ary_cycle_at(ary, index) {
    Xassertion.assert_kind_of_array(ary)
    return ary[Xinteger.imodulo(index, ary.length)]
  },

  // ary 内のインデックス from の要素を to に移動
  // https://qiita.com/nowayoutbut/items/991515b32805e21f8892
  ary_move(ary, from, to) {
    Xassertion.assert_kind_of_array(ary)
    const n = ary.length
    ary = [...ary]
    to = Xinteger.imodulo(to, n)
    if (from === to || from > n - 1 || to > n - 1) {
      return ary
    }
    const v = ary[from]
    const tail = ary.slice(from + 1)
    ary.splice(from)
    Array.prototype.push.apply(ary, tail)
    ary.splice(to, 0, v)
    return ary
  },

  ary_rotate(ary, n = 1) {
    Xassertion.assert_kind_of_array(ary)
    ary = [...ary]
    if (ary.length > 0) {
      if (n > 0) {
        for (let i = 0; i < n; i += 1) {
          ary.push(ary.shift())
        }
      } else {
        for (let i = 0; i < -n; i += 1) {
          ary.unshift(ary.pop())
        }
      }
    }
    return ary
  },

  // {1, null, undefined, ""} => [1, ""]
  ary_compact(ary) {
    Xassertion.assert_kind_of_array(ary)
    return _.reduce(ary, (a, val) => {
      if (val == null) {
      } else {
        a.push(val)
      }
      return a
    }, [])
  },

  // {1, null, undefined, ""} => [1]
  ary_compact_blank(ary) {
    Xassertion.assert_kind_of_array(ary)
    return _.reduce(ary, (a, val) => {
      if (Xobject.present_p(val)) {
        a.push(val)
      }
      return a
    }, [])
  },

  // a - b
  ary_minus(a, b) {
    Xassertion.assert_kind_of_array(a)
    Xassertion.assert_kind_of_array(b)
    const set_b = new Set(b)
    return a.filter(e => !set_b.has(e))
  },
}
