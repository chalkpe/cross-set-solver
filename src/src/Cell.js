class Cell {
  constructor (values) {
    this.values = values
    this.closed = values.length === 1
  }

  get size () {
    return this.values.length
  }

  get value () {
    return this.values[0]
  }

  set value (number) {
    if (!this.has(number)) return
    while (this.value !== number) this.rotate()
  }

  has (number) {
    return this.values.includes(number)
  }

  toggle () {
    this.closed = !this.closed
  }

  rotate () {
    this.values.push(this.values.shift())
  }
}

export default Cell
