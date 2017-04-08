import chalk from 'chalk'

class Cell {
  constructor (values) {
    this.values = values
  }

  toString () {
    let [current, ...others] = this.values
    return `${chalk.red(current)} ${chalk.white(others.join(' '))}`
  }
}

export default Cell
