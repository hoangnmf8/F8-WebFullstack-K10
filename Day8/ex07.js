/**
 * BOM
 */

// console.log(window.innerHeight);
// console.log(window.innerWidth);

// const age = window.prompt("Ban bao nhieu tuoi?");
// const hello = window.alert("Xin chao ca lop!");

// const isConfirm = confirm("Ban dong y chuyen trang khong?");
// console.log(age);

// console.log(navigator.userAgent);
// console.log(navigator.language);
// console.log(navigator);

// console.log(screen);
// console.log(history);
// console.log(location);

// setTimeout()
/**
 * setTimeout(callback, số mili giây)
 * - số mili giây là tham số không bắt buộc.
 * - callback chỉ thực hiện một lần.
 */
// const result = setTimeout(() => {
// 	console.log("Hello Timout");
// }, 5000);

// console.log(result);

// clearTimeout(result);

/**
 * setInterval()
 * - setInterval(callback, milliseconds)
 *
 */

// const result2 = setInterval(() => {
// 	console.log("Hello Interval");
// }, 1000);

// console.log(result2);

// const clear = clearInterval(result2);
// console.log(clear);

// TODO: Dùng setInterval hiển thị ra cửa sổ console từ 1 đến 100, mỗi lần hiển thị cách nhau 1s.
let i = 0
const result3 = setInterval(() => {
  if (i > 99) {
    clearInterval(result3)
  }
  console.log(i++)
  // Khi callback được gọi thì luôn thực hiện toàn bộ câu lệnh trong callback xong khi quay lại thì mới bị clear.
}, 1)
