import { readFile } from 'fs'

readFile('./test.json', (err, data) => {
  console.log(data)
  console.log(JSON.parse(data))
})
