import Cell from './Cell'
import range from './util/range'

class Line {
  constructor (cells) {
    this.cells = cells.map(values => new Cell(values))
  }

  get size () {
    return this.cells.length
  }

  get numbers () {
    return range(this.size, 1)
  }

  get openNumbers () {
    return this.numbers.filter(n =>
      this.cells.every(cell => !cell.closed || cell.value !== n))
  }

  done () {
    const proper = range(this.size, 1).join()
    return this.cells.map(cell => cell.value).sort().join() === proper
  }

  unique (n) {
    const cells = this.cells.filter(c => c.has(n))

    if (cells.length === 1) {
      cells[0].value = n
      cells[0].closed = true
    }

    // 라인에서 어떤 숫자가 단 하나의 셀에서만 등장한다면,
    // 그 숫자를 포함하고 있는 셀은 반드시 그 숫자를 선택해야만 한다
  }
}

export default Line
