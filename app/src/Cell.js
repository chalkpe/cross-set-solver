class Cell {
  constructor (values) {
    this.values = values
    this.fixed = values.length === 1
  }

  has (number) {
    return this.values.includes(number)
  }

  toggle () {
    this.fixed = !this.fixed
  }

  rotate () {
    this.values.push(this.values.shift())
  }

  get state () {
    return this.fixed ? 'fixed' : ''
  }
}

export default Cell
