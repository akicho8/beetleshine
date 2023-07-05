import _ from "lodash"

export const Xassertion = {
  assert(value, message = null) {
    if (!value) {
      console.error(`${value}: ${message}`)
      this.assert_debugger(message)
    }
  },

  assert_equal(expected, actual, message = null) {
    if (actual !== expected) {
      console.error(`<${expected}> expected but was <${actual}>`)
      this.assert_debugger(message)
    }
  },

  assert_kind_of_integer(value, message = null) {
    this.assert(Number.isInteger(value))
  },

  assert_kind_of_string(value, message = null) {
    this.assert_equal("string", typeof value, message)
  },

  assert_kind_of_array(value, message = null) {
    this.assert(_.isArray(value), message)
  },

  assert_kind_of_hash(value, message = null) {
    this.assert_equal("object", typeof value, message)
  },

  assert_kind_of_object(value, message = null) {
    this.assert_equal("object", typeof value, message)
  },

  assert_nonzero(v, message = "divided by 0") {
    this.assert(v !== 0, message)
  },

  // private

  assert_debugger(message = null) {
    debugger
    message ??= "Assertion failed"
    if (typeof window !== 'undefined') {
      alert(message)
    } else {
      throw new Error(message)
    }
  },
}
