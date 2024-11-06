// (function (a, b) {
//   console.log(a+b)
//   return a + b
// })(1,3)

// IIFE = là một expression function được thực hiện ngay khi khai báo.

// generator function

function* myFunc (a,b,c){
  const sum = a + b
  yield sum
  const result = sum * c
  yield result
}

const gen = myFunc(2,3,4)

console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

