import { readFile } from 'fs'

// not to use callbacks
// instead return a promise
const myReadFile = fn => {
  const p = new Promise((success, reject) => {
    readFile(fn, (err, data) => {
      if(err) {
        reject(err)
      } else {
        success(data + '')
      }
    })
  })
  return p
}

//myReadFile('./agenda.md')
//  .then(console.log)
//  f is async, but await within it is blocking
const f = async () => {
  const s = await myReadFile('./agenda.md')
  console.log(s)
}

f()


const config = await fs.promises.readfile('./config.json')
main(config)






















