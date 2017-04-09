import Cell from './Cell'

class Puzzle {
  constructor ({ level, stage, size, data }) {
    this.level = level
    this.stage = stage
    this.size = size

    this.data = data.map(row => row.map(values => new Cell(values)))
  }

  * [Symbol.iterator] () {
    for (let i = 0; i < this.size; i++) {
      yield {
        row: this.data[i],
        column: this.data.map(row => row[i])
      }
    }
  }

  get array () {
    return this.data.map(row => row.map(cell => cell.toString()))
  }
}

export default Puzzle
