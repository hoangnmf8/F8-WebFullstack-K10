/**
 * Spread Operator (Toán tử spread)
 * - Dùng để nối, gộp mảng hoặc Object.
 * - Dùng để copy mảng hoặc Object (chỉ sao chép nông).
 */

const students1 = ['Nam', 'Huy', 'Long', ['Đan']]
const students2 = ['Den vau', 'Binz']

const students3 = students1.concat(students2)
console.log(students3)

// Gộp hoặc nối mảng
const students4 = [...students2, 'Hoang', ...students1]
console.log(students4)

// Copy mảng (Shallow Copy)
const students1Copy = [...students1]
students1Copy.push('Donal Trump')
console.log(students1Copy)
console.log(students1)

// Gộp hoặc nối 2 objects
// Copy Object

const myAccounct = {
  email: 'hoangnm@gmail.com',
  password: '1234567890',
}

const myInfor = {
  frienstList: [],
  skills: [],
  address: 'HN',
  linkCV: 'https://cv.abc.vn',
}

const myInformation = { ...myAccounct, ...myInfor }
console.log(myInformation)

function sum(a, ...arr) {
  console.log(a)
  console.log(arr)
}

sum(1, 2, 3)

/**
 * Phân biệt spread và rest.
 * Rest:
 * - Chỉ xuất hiện ở cuối cùng của một khai báo.
 * - Có tác dụng gom phần còn lại.
 * - Rest sử dụng để khai báo tham số cho hàm.
 *
 * Spread
 * - Để rải các phần tử hoặc các cặp key:value của array/object cũ vào một array/object mới.
 */
