// import { readFile } from 'fs'

/*
promise - object that represents an async task

also: think of it as an object that is returned from an async function ... it will be finished later

* pending
* resolved - fulfilled (success)
* resolved - rejected (error)
* methods
  * `.then` ---> it calls a function when promise is resolved (different function for fulfilled vs reject)
*/



const p = new Promise((success, error) => {
  success(1)
})

// then will always return a promise
// so u can chain thens
// fetch(url)
//  .then(res => res.json())
//  .then(....)
const p2 = p.then(val => {
  console.log(val)
  return 2
  /*
  return new Promise((success, error) => {
    success(2)
  })
  */
})
p2.then(console.log)






/*
const p = new Promise((success, error) => {
  // do some async stuff
  // make a network conn
  // read file
  // if it succeeds
  error('something went wrong')
})
// 1st arg is set to succes, second is reject func
p.then(console.log, (err) => console.log('there was an error', err))
*/
/*
const result = await p
p.then(val => {
  const result = val
})
// await ... it will wait until the promise resolves
// express will evaluate as whatever promise passes into success function


// will block where it is present
// if it's in function, then within function it's blocking
// if ur in a function and u use await
// func has to be declared as async
console.log(result)

*/



