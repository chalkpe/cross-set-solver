import Cell from './Cell'

const range = (end, offset = 0) => [...Array(end)].map((v, i) => i + offset)

class Puzzle {
  constructor ({ level, stage, size, data }) {
    if (!Array.isArray(data) || data.length !== size ||
      data.some(row => !Array.isArray(row) || row.length !== size)) {
      throw new Error(`data must be the ${size}*${size} 2d array`)
    }

    this.level = level
    this.stage = stage
    this.size = size

    this.data = data.map(row => row.map(values => new Cell(values)))
  }

  * [Symbol.iterator] () {
    for (let i = 0; i < this.size; i++) {
      yield { i, row: this.row(i), column: this.column(i) }
    }
  }

  row (i) {
    return this.data[i]
  }

  column (i) {
    return this.data.map(row => row[i])
  }

  get done () {
    return range(this.size).every(i =>
      this.matches('row', i) && this.matches('column', i))
  }

  get name () {
    return `${this.level}-${this.stage}`
  }

  matches (getter, index) {
    const line = this[getter](index)
    const proper = range(line.length, 1).join()
    return line.map(cell => cell.values[0]).sort().join() === proper
  }

  solve () {
    range(this.size).forEach(n => {
      for (let { row, column } of this) {
        this.unique(n, row)
        this.unique(n, column)
      }
    })
  }

  unique (n, line) {
    let cells = line.filter(cell => cell.has(n))
    if (cells.length !== 1) return

    cells[0].switchTo(n)
    cells[0].closed = true
  }
}

export default Puzzle
