/*
promise - a function that performs an async task will return

* this object represents that async task... it has state:
  * pending (not done yet)
  * fulfilled (I finished successfully)
  * rejected (I'm done bc error)
* tell the promise what 2 do when finished:
  * when success... call success func
  * when error... call reject func
* methods:
  * then <----
    * specify what to do on success, and what to do on error
    * returns a promise (whatever promise success func returns)
      * chain calling .then
      * asyncTask().then(...).then(...)
  * catch
*/ 

/*
const p = new Promise((success, reject) => {
  // async task... like reading a file, writing to db, connection, etc.
  // when this finishes, then call success or rejects
  // success... let's call success function
  // success(1)
  // we fail so call reject
  reject('uh oh')
})

p.then(console.log, (err) => console.log(':(', err))
// console.log('will this be done')
*/

/*
const p = new Promise((success, reject) => {
  success(1)
})
const p2 = p.then((val) => {
  console.log(val)
  return 100 // wrap in a promise that immediately calls fulfill with ret val
  //return new Promise((success, reject) => {
  //  success(2)
  //})
})
p2.then(console.log)
*/


const myReadFile = fn => {
  // return a promise
  return new Promise((success, reject) => {
    readFile(fn, (err, data) => {
      if(err) {
        reject(err)
      } else {
        success(data + '')
      }
    })
  })
}

const main = async () => {
  const data = await myReadFile('./notes.md')
  console.log(data)
  console.log('DONE')
}

main()


// async and await
// u can use await at the top level (outside of func)
// if you use in a func, then func must be defined as async
//   * func itself will be non-blocking
//   * within the function await will block
//



































