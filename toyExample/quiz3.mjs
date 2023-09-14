

// const fruits = ['apple', 'cantaloupe', 'durian'];
// console.log(fruits.filter(function(fruit) {return fruit > 'b';}));


// const nums = [-3, -2, 2, 3, 4];
// const x = nums.filter((n) => n % 2 === 0).reduce((res, n) => n < res ? n : res, Infinity);
// console.log(x);



// function compose(f, g) {
//     const s = "composing";
//     const h = function(x) {
//         console.log(x);
//         f(g(x)); 
//     };
//     return h;
// }
// const frankenstein = compose(console.log, Math.sqrt);
// frankenstein(9);


// const stringy = ['1', '10', '100'];
// const reducedResult = stringy.reduce(secret, 1);
// console.log(reducedResult);
// function secret(product, ele) {
//     return product * parseInt(ele, 2);
// }


// const myFunction = function() {};
// myFunction.x = 42
// console.log(myFunction.x);


// function cachify(f) {
//     const cache = {};
//     return function(x) {
//         if(cache.hasOwnProperty(x)) {
//             console.log('cache hit');
//             console.log(cache);
//             return cache[x];
//         } else {
//             const res = f(x);
//             cache[x] = res;
//             console.log('updated cache');
//             console.log(cache);
//             return res;
//         }
//     };
// }
// const cachedSqrt = cachify(Math.sqrt);
// cachedSqrt(16);
// cachedSqrt(9);
// cachedSqrt(16);

// const f = function(x, y, z) {
// 	return x - y + z;
// }
// console.log(f.length);



function cachify(f) {
    const cache = {};
    console.log(cache);
    return function(x) {
        if(cache.hasOwnProperty(x)) {
            console.log(cache);
            return cache[x];
        } else {
            const res = f(x);
            cache[x] = res;
            console.log(cache);
            return res;
        }
    };
}
const cachedSquare = cachify(function(n) { return n * n; });
const res = cachedSquare(8);
console.log(res);
cachedSquare(3);
cachedSquare(8);
cachedSquare(3);
