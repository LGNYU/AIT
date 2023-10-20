import { readFile } from 'fs' // this uses callbacks to manage the async nature of io


const p = new Promise((success, reject) => {
  success(1) // arrow function at line 8
})

const p2 = p.then((val) => {
  console.log(val)
  return 2 // 2 is wrapped in an immediately fulfilled promise
  /*
  return new Promise((success, reject) => {
    success(2) // console.log
  }) 
  */
})
p2.then(console.log)



/*
* no callback
* return value --> object that represents that async task
* called a promise
  * promise has state:
    * not done yet (pending)
    * succeeded (fulfilled)
    * failed (rejected)
    * last two states can be bound to a function
    * when success... do this....
*/
/*
readFile('./agenda.md', (err, data) => {
  console.log(data + '')
  console.log('end')
})
*/

/* await will block w/ in func until promise resolves!
 * when it does... then whatever value that promise is fulfilled with
 * will be used as the value of the await expression
 * const result = await foo()

*/





