// const obj = Object.create(null)
// obj's prototype is null
//
const arr = [1, 2, 3] // Array.prototype
console.log // Function.prototype

Object.hasOwn(console.log, 'apply') // false... because apply is on Function.prototype
