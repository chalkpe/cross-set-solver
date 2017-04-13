import Line from './Line'
import range from './util/range'

class Puzzle {
  constructor ({ level, stage, size, data }) {
    if (!Array.isArray(data) || data.length !== size ||
      data.some(row => !Array.isArray(row) || row.length !== size)) {
      throw new Error(`data must be the ${size}*${size} 2d array`)
    }

    [this.level, this.stage, this.size] = [level, stage, size]

    this.row = data.map(cells => new Line(cells))
    this.column = range(size).map(i => new Line(data.map(row => row[i])))
  }

  * [Symbol.iterator] () {
    for (const i of range(this.size)) {
      yield this.row[i]
      yield this.column[i]
    }
  }

  get name () {
    return `${this.level}-${this.stage}`
  }

  get done () {
    return [...this].every(line => line.done())
  }

  solve () {
    for (const line of this) {
      range(this.size, 1).map(n => line.unique(n))
    }
  }
}

export default Puzzle
