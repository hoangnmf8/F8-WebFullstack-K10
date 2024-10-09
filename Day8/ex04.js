/**
 * Enhandced Object Literal
 * - Khai báo tắt thuộc tính.
 * - Khai báo tắt phương thức.
 * - Khai báo key cho object với giá trị là 1 biến.
 */

let name = 'Hoang'
let age = 32

const user = { name: name, age: age }

// Khai báo tắt thuộc tính:
// const user1 = { name, age };

// Khai báo tắt phương thức:
const user2 = {
  name,
  age,
  hello() {
    console.log('Hello')
  },
}

console.log(user2.hello())

//

const user3 = {
  name: 'Hoang',
  age: 32,
}

const myKey = 'account'

const user4 = {
  [myKey]: 'F8',
  age: 5,
}

console.log(user4)
