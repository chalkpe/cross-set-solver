import range from './util/range'

class Line {
  constructor (cells) {
    this.cells = cells
  }

  get size () {
    return this.cells.length
  }

  get numbers () {
    return range(this.size, 1)
  }

  get closedNumbers () {
    return this.numbers.filter(n =>
      this.cells.some(cell => cell.closed && cell.value === n))
  }

  get openNumbers () {
    return this.numbers.filter(n =>
      this.cells.every(cell => !cell.closed || cell.value !== n))
  }

  done () {
    const proper = this.numbers.sort().join()
    return this.cells.map(cell => cell.value).sort().join() === proper
  }

  closeSingleCells () {
    this.cells
      .filter(cell => cell.size === 1)
      .forEach(cell => (cell.closed = true))

    // 선택지가 하나밖에 없는 셀은 고민할 여지가 없어요
  }

  closeUniqueCells () {
    this.numbers.forEach(n => {
      const c = this.cells.filter(cell => cell.has(n))
      c.length === 1 && !c[0].closed && ([c[0].value, c[0].closed] = [n, true])
    })

    // 라인에서 어떤 숫자가 단 하나의 셀에서만 등장한다면,
    // 그 숫자를 포함하고 있는 셀은 반드시 그 숫자를 선택해야 해요
  }

  closeOppositeCells () {
    return this.closedNumbers.forEach(n => this.cells
      .filter(cell => !cell.closed && cell.size === 2 && cell.has(n))
      .forEach(c => (c.closed = true) && c.value === n && c.rotate()))

    // 이미 다른 셀에서 선택된 숫자와 또 다른 숫자, 이렇게 딱 두 개만 가지고 있는 셀은
    // 반드시 이미 다른 셀에서 선택된 숫자가 아닌 것을 선택해야 해요
  }

  closeRemainingCells () {
    const numbers = this.openNumbers
    if (numbers.length !== 1) return

    const cell = this.cells.filter(cell => !cell.closed).pop()
    return ([cell.value, cell.closed] = [numbers.pop(), true])

    // 나머지 셀들이 전부 선택됐다면, 마지막 한 셀에 무슨 숫자가 들어가야 하는지는 뻔하죠
  }
}

export default Line
