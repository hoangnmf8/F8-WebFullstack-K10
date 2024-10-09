/**
 * Destructuring
 * - Khai báo, truy xuất nhiều phần tử/thuộc tính từ array/object gốc.
 */

const arr = ['Long', 'Nam', 'Huy']

// Khai báo biến mới dựa trên thông tin từ mảng.
// const item1 = arr[0];
// const item2 = arr[1];

const [item1, item2] = arr

console.log(item1, item2)

let myString = 'Hoang'

let [a, b, c, ...rest] = myString
console.log(a, b, c)
console.log(rest)
myString[0] = 'K'
console.log(myString[0])
console.log(myString)
