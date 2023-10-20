
// there is built in promise based read file
// we'll make our own promise readfile
import { readFile } from 'fs'


const myReadFile = (fn) => {
  return new Promise((success, error) => {
    readFile(fn, (err, data) => {
      if(err) {
        error(err)
      } else {
        success(data + '')
      }
    })
  })
}

const main = async () => {
  try {
    const data = await myReadFile('dne.csv')
    console.log(data)
    console.log('done')
  } catch(e) {
    console.log('got an error') 
  }
}
main()





