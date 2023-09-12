// let wordList = ['foo', 'bar', 'baz'];
// function main() {
//     wordList = [];
//     // function wordList() {
//     //     // assume that a function exists called readFromDatabaseSync
//     //     const result = readFromDatabaseSync();
//     //     return result;
//     // }
//     console.log(wordList);
// }
// main();
// console.log(wordList);

// let score = 100;
// let playerTurn = true;
// const nextTurn = function() {
//     // there's an exclamation point before playerTurn:
//     playerTurn = !playerTurn;
//     if(playerTurn) {
//         console.log('Your turn');
//         // handlePlayerMove(); 
//     } else {
//         console.log('Computer turn');
//         // handleComputerMove();
//     }
// };
// console.log(playerTurn);
// nextTurn();
// console.log(playerTurn);
// nextTurn();
// console.log(playerTurn);

// let s = "";
// let x = 1;
// f();
// // function f() {
// //     let x = 2;
// //     function g() {
// //         let x = 3;
// //         s += x;
// //     }
// //     g();
// //     s += x;
// // }
// const f = function() {
//     let x = 2;
//     function g() {
//         let x = 3;
//         s += x;
//     }
//     g();
//     s += x;
// }
// s += x;
// console.log(s);

// function fact(n) {
//     if(n === 0) {
//         let product = 1;
//     } else if(n > 0) {
//         let product = 1;
//         for(let i = 1; i <= n; i++) {
//             product = product * i; 
//         }
//     }
//     return product;
// }
// console.log(fact(4));

// ReferenceError
// function main() {
//     const primaryColor = 'red';
//     const secondaryColor = 'blue';
//     let alpha = 0;
//     mixColors(primaryColor, secondaryColor);
//     const mixColors = function(c1, c2) {
//         let alpha = 0.9;
//         console.log(c1, c2, alpha);
//         // assume that the function mix exists
//         return null;
//     };
//     console.log(alpha);
// }
// main();


// let a, b, c;
// a = b = c = {'prop1': 1}; 
// b['prop2'] = 2; 
// c['prop3'] = 3; 
// console.log(a) 


// const myArray = [1, 2, 3];

// // Add a property to the array (arrays are objects, so you can add properties)
// myArray.myProperty = 'Hello';

// console.log(myArray[2]); 
// console.log(myArray); 
// console.log(myArray.myProperty); 


// const arr = [];
// arr[0] = 10;
// arr[2] = 30;
// console.log(arr);


// Destructing array
// var [firstName, ,...lastName] = ["alpha", "beta", "gamma", "delta"];
         
// console.log(firstName);//"alpha"
// console.log(lastName);//"gamma, delta"


// const numbers = [1, 2, 3];
// const [a, b, c, d] = numbers;
// console.log(b, d)


// const o = {};
// const p = {};
// console.log(o === p);


// const obj = {
//     getData: function(n) {return [1, 2, 3]}
//   } 
  
//   const res = obj
//     .getData()
//     .pop();
  
//   console.log(res);


  const obj = {
    getData: function(n) {return null}
  } 
  
  const res = obj
    .getData()
    ?.pop();
  
  console.log(res);