/**
 * Các cách khai báo.
 * - Khai báo với từ khoá `new` tạo ra kiểu dữ liệu Object.
 * - Khai báo không có từ khoá `new` chỉ tạo ra kiểu dữ liệu string.
 */

// const now1 = new Date("2021-09-09 09:01:01");
// const now2 = new Date();
// const now2 = Date();

// YYYY-MM-DD hh:mm:ss

// 29/9/2024
// 29-09-2024
// 2024-09-29

// console.log(now1);
// console.log(typeof now1);
// console.log(typeof now2);

// const result = now2 - now1; // Đơn vị milliseconds
// console.log(result / (60 * 60 * 24 * 365 * 1000));

// console.log({ now2 });
// console.log(now2.getFullYear());
// console.log(now2.getMonth());
// console.log(now2.getDay());
// console.log(now2.getDate());
// console.log(now2.getHours());
// console.log(now2.getMinutes());
// console.log(now2.getTime()); // Số mili giây tính từ mili giây đầu tiên của ngày 01/01/1970.

// TODO: Dùng các phương thức có sẵn của đối tượng Date lấy ra Giờ, Phút, Giây, Ngày, Tháng, Năm.

// const date3 = new Date("1969-01-01");
// console.log(date3.getTime());

// TODO: Tính số giờ (làm tròn 2 chữ số thập phân sau dấy phẩy) từ 23:59 phút ngày 10/8/2024 đến nay.

const date4 = new Date('2024-08-10 23:59:00')

const date5 = new Date()

const resultDuy = date5 - date4
console.log(+(resultDuy / (1000 * 60 * 60)).toFixed(2))

const a = '10'

const b = +a
console.log(a, b)
