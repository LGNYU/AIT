/*
function foo() {
    console.log(this);
}
const obj = {x: 123, foo: foo};
obj.foo();
*/

// const numbers = [1, 2, 3, 4];
// const numbersCopy = numbers.slice();
// numbers.x = 'boo!';
// console.log(numbers.hasOwnProperty('slice'));
// console.log(numbers.hasOwnProperty('x'));

// function User(username) {
//     this.username = username;
// }

// User.prototype.save = function() {
//     // assuming that saveToDatabase function exists
//     saveToDatabase();
//     console.log('saving ' + this.username);
// };

// const user = new User('pizza4life');
// console.log(user);

// class Item{
//     constructor(price) {
//         this.price = price;
//     }
//     applyDiscount(discount) {
//         this.price -= discount;
//     }
// }
// const item1 = new Item(16);

// Item.prototype.remove = function() {
//     console.log('this item was removed');
// };

// item1.remove();

// const duck = {
//     name:'Quincy',
//     quack() {
//         console.log('Quack!')
//     }
// };
// const duckling = Object.create(duck);
// console.log(`${duck.name},${duckling.name}`);

// const numbers = [1, 2, 3, 4];
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(numbers)) === Object.prototype);
// console.log(Object.prototype);
// console.log(Object.getPrototypeOf(numbers));

// import net from 'net'
// console.log('foo');
// var server = net.createServer(function(sock) {
//     console.log('bar'); 
//     sock.on('data', function(binaryData) {
//         console.log('baz'); 
//     });
// });
// console.log('qux'); 
// server.listen(8080, '127.0.0.1');


// const duck = {
//     name:'Quincy',
//     quack() {
//         console.log('Quack!')
//     }
// };
// const duckling = Object.create(duck);
// console.log(`${duck.name},${duckling.name}`);


// const a = Object.create(null); // Create an object with no prototype
// a["prop"] = "value";
// console.log("toString" in a); // This will print 'false'

// class Monster {
//     constructor(name) {
//         this.name = name;
//     }

//     scare(thing) {
//         console.log(this.name, ' scares ', thing); 
//     }
// }

// class Werewolf extends Monster {
//     constructor(name, type) {
//         super(name);
//         this.type = type; 
//     }

//     howl() {
//         console.log(this.name, this.type, 'werewolf howls at the moon');
//     }
// }

// const w = new Werewolf('a', 'b')
// const m = new Monster('c')
// console.log(typeof Werewolf);
// console.log(Object.getPrototypeOf(w))
// console.log(Werewolf.prototype)
// console.log(Werewolf.prototype.hasOwnProperty('howl'))
// console.log(Object.getPrototypeOf(w).hasOwnProperty('howl'));
// console.log(Object.getPrototypeOf(w).hasOwnProperty('scare'));
// console.log(Object.prototype === Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(w))))

var obj = Object.create(Array.prototype);
obj.foo = 'bar';
console.log((typeof obj.foo));
console.log((typeof obj.baz));
console.log((typeof obj.push));
console.log(obj.hasOwnProperty('foo'));
console.log(obj.hasOwnProperty('push'));
console.log(obj.hasOwnProperty('toString'));