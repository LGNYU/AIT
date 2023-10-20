const obj = {message: 'hello'}

/*
function f(a, b, c) {

  console.log(this.message)
  console.log(a, b, c)
}
*/
const f = (a, b, c) => {
  console.log(this.message)
  console.log(a, b, c)
}

const g = f.bind(obj, 'this is A')
g('b', 'c')






