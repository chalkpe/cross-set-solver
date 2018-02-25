import Cell from './Cell'
import Line from './Line'
import range from './util/range'

class Puzzle {
  constructor ({ level, stage, size, data }) {
    if (!Array.isArray(data) || data.length !== size ||
      data.some(row => !Array.isArray(row) || row.length !== size)) {
      throw new Error(`data must be the ${size}*${size} 2d array`)
    }

    [this.level, this.stage, this.size] = [level, stage, size]
    const puzzle = data.map(cells => cells.map(values => new Cell(values)))

    this.row = puzzle.map(cells => new Line(cells))
    this.column = range(size).map(i => new Line(puzzle.map(row => row[i])))
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
    const m = ['Single', 'Unique', 'Opposite', 'Remaining']
    m.forEach(method => [...this].forEach(l => l[`close${method}Cells`]()))
  }
}

export default Puzzle
