import Cell from './Cell'

function pad (str, length, filler = ' ') {
  let margin = filler.repeat(length)
  return (str + margin).substr(0, length)
}

class Row {
  constructor (cells) {
    this.cells = cells.map(values => new Cell(values))
  }

  toString () {
    let cells = this.cells.map(cell => cell.toString())
    let length = Math.max(...cells.map(str => str.length))
    return cells.map(str => pad(str, length)).join(' '.repeat(4))
  }
}

export default Row
