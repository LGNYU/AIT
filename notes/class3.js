// objects some more
// functions and objects
// the value of this
// y arrow functions at all
// higher order functions

// const obj={};
// obj.foo = undefined;

// console.log(Object.hasOwn(obj, 'foo'));
// console.log(Object.hasOwn(obj, 'dne'));

// const last = 'v';
// const person = {last};

// person.sayHi = () => {console.log('hiiiii')};
// person.sayHi()

// const clonedperson = {
//     last,
//     sayHi() {console.log('s', this.last)}
// }
// clonedperson.sayHi()



// import {readFile} from 'fs'

// const fileReadeer = {
//     beforeText: 'this comes before!!!!!',
//     handleRead(err, data) {
//         console.log(this.beforeText)
//         console.log(data)
//     },
//     myReadFile(fn) {
//         readFile(fn, 'utf8', this.handleRead)
//     }
// };


// // higher order functions

// const logValues = arr => {
//     for(let i=0; i < arr.length; i++) {
//         console.log(arr[i])
//     }
// }
// const nums = [2,3,4,5]
// logValues(nums)

// const myForEach = (arr, action) => {
//     for(let i=0; i<arr.length; i++) {
//         action(arr[i])
//     }
// }
// myForEach(nums, x => {console.log(x*x)})


// const myMap = (arr, transform) => {
//     const ret = []
//     for(let i=0; i<arr.length; i++) {
//         ret.push(transform(arr[i]))
//     }
//     return ret
// }

// animals = ['bird', 'cat', 'dog']
// console.log(myMap(animals, a => a + 's'))



// const myReduce = (arr, reducer, initValue) => {
//     let acc = initValue
//     for(let i=0; i<arr.length; i++) {
//         acc = reducer(acc, arr[i])
//     }
//     return acc
// }

// nums = [1,2,3,4]
// const result = myReduce(nums, (curSum, newEle) => curSum + newEle, 0)
// console.log(nums)
// console.log(result)

