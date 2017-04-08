import fs from 'mz/fs'
import Row from './src/Row'

const log = o => console.log(o.toString())

async function fetch (file) {
  const json = await fs.readFile(file, 'utf8')

  const { level, stage, size, data } = JSON.parse(json)
  console.log(`LEVEL ${level}-${stage}, ${size} X ${size}`)

  return data.map(cells => new Row(cells))
}

fetch('test/47.json')
.then(data => data.forEach(log))
.catch(err => console.error(err))
