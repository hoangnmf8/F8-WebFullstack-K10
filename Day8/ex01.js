/**
 * Toán tử rest
 * - Gom những phần tử còn lại của mảng/objects.
 * - Khai báo tham số cho hàm.
 * - Thường hay được kết hợp với cú pháp destructuring.
 */

/**
 * 1. Quan sát giảng viên
 * 2. Nghe và hiểu, không cần gõ theo.
 * 3. GV yêu cầu làm bt, hoặc gõ lại.
 * 4. Hiểu -> Gõ lại.
 * 5. Quên, ko gõ lại được -> Nhờ TG, GV.
 */

const arr = ['Nguyen', 'Duy', 'Giang', 'An', 'Huy', 'Hoang']

const [student1, student2, ...rest] = arr
// console.log(student1);
// console.log(student2);
// console.log(rest);

const obj = { name: 'Hoang', age: 32, address: 'HN', email: 'hoang@f8.edu.vn' }

const { name, age, ...other } = obj

// Thay vì khai báo nhiều dòng thì dùng destructuring
// const name = obj.name;
// const age = obj.age;
// const address = obj.address;

console.log({ name, age })
console.log(other)

function sum(...args) {
  // Cach 1:
  // let total = 0;
  // for (let i = 0; i < args.length; i++) {
  // 	total += args[i];
  // }
  // return total;

  // Cach 2: dung reduce
  return args.reduce((acc, cur) => (acc += cur))
}

// TODO: Hoàn thiện nốt hàm sum.

console.log(sum(1, 2, 3, 4))
