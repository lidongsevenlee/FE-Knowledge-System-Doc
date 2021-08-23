function createNew() {
  const o = {}
  const Contr = Array.prototype.shift.call(arguments)
  o.__proto__ = Contr.prototype
  const result = Contr.apply(o, arguments)
  if (typeof result === 'object' && result !== null) {
    return result
  }
  return o
}

function A(n) {
  this.n = n
}

const a = createNew(A, 1)
console.log(a.n) // 1

