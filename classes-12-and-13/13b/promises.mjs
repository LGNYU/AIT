import { readFile } from 'fs/promises' // <----
// returns promise!

const p = new Promise((success, reject) => {
  success('hello')
})
const p2 = p.then((val) => {
   console.log(val)
  return new Promise((success, reject) => {
    success('bye')
   })
  // return 'bye'

})
p2.then(console.log)


/*
const run = async () => {
  const result = await readFile('./notes.mdasdfasdffadsf')
    // it will take whatever your then function is called with and eva
  // blocks in this function only until promise is resolved
  console.log(result)
  return 'return value!'
}
console.log('done')

const result2 = run()
result2.then(console.log)
//console.log(result2)
*/
