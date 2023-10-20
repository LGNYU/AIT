/*
promise ---> object that represents an async task

* pending (task has not completed yet)
* resolved (fulfilled... success)
* resolved (rejected... error)

.then(fulfill, reject)
fulfill is the func to call if promise succeeds
reject is called on error
then will return a promise (that promise is the value returned by the success function)
*/
/*
const p = new Promise((fulfill, error) => {
  // async stuff here!
  fulfill(1)
  // error('uh oh!')
})

const p2 = p.then(val => {
  console.log(val)
  // return a new promise that calls fulfill(2)
  return 2
})

p2.then(console.log)


fetch(...)
  .then(res => res.json())
  .then(...)
*/


import { readFile } from 'fs'

const myReadFile = (fn) => {
  return new Promise((fulfill, error) => {
    readFile(fn, (err, data) => {
      if(err) {
        error(err)
      } else {
        fulfill(data + '')
      }
    })
  })
}


const main = async () => {
  const data = await myReadFile('main.mjs')
  console.log(data)
}

main()













