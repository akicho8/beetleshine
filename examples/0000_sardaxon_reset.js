// -*- compile-command: "babel-node 0000_sardaxon_reset.js" -*-

import MemoryRecord from '../src/sardaxon.js'

class Fruit extends MemoryRecord {
  static get define() {
    return [
      { key: "a",  name: "name1", },
    ]
  }
}

console.log(Fruit.fetch("a").name)
const $Fruit = Fruit.sardaxon_reset([{ key: "a",  name: "name2" }])
console.log(Fruit.fetch("a").name)
console.log($Fruit.values)
