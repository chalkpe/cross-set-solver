class Cell {
  constructor (values) {
    this.values = values
    this.closed = values.length === 1
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

  switchTo (number) {
    if (!this.has(number)) return
    while (this.values[0] !== number) this.rotate()
  }
}

export default Cell
