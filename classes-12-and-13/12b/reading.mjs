import { readFile } from 'fs'

// XXXXXXconst data = readFile()
readFile('./notes.md', (err, data) => {
  console.log(data + '')
  console.log('done')
})

