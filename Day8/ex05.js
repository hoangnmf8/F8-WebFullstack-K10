// const userInfor = {
// 	email: "hoang@gmail.com",
// 	password: "matkhaumanh",
// };

// const myString = JSON.stringify(userInfor);
// console.log(myString);
// console.log(typeof myString);
// let newString = myString.toLocaleUpperCase();
// let newString2 = myString + "abc";
// console.log(newString);

// const myObj1 = JSON.parse(myString);
// const myObj2 = JSON.parse(newString);
// const myObj3 = JSON.parse(newString2); // Sai vì đã phá hỏng định dạng JSON
// console.log(myObj1);
// console.log(myObj2);

const userInfor = {
  email: 'hoang@gmail.com',
  password: 'matkhaumanh',
  hello() {
    console.log('Xin chao ca lop!')
  },
  // Đây là 1 comment trong object
}

const myJSON = JSON.stringify(userInfor)
console.log(myJSON)

const arr = [1, 2, 3, 4]

const newJSON = JSON.stringify(arr)
console.log(newJSON)
console.log(Array.isArray(JSON.parse(newJSON)))

/**
 * Sai lầm thường gặp:
 * 1. Tưởng rằng JSON chỉ là 1 dạng biến đổi khác của Object trong Javascript.
 * 2. Tưởng rằng những phương thức, toán tử biến đổi chuỗi không ảnh hưởng đến định dạng JSON ban đầu.
 * 3. Vi phạm những quy tắc về JSON như: sử dụng nháy đơn, để dấu phẩy ở sau cặp key: value cuối dùng.
 * 4. Nhầm tưởng rằng đối với số, chuỗi, mảng... khi chuyển đổi sang JSON thì cũng bị đưa vào dấu "{}". // Google Search.
 */
