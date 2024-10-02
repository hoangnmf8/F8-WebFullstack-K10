/**
 * ## Bài 1: Viết hàm tính số ngày bạn đã sống

Viết hàm `calculateAge(birthday)` nhận vào một tham số `birthday` là một chuỗi ngày tháng năm sinh dạng `dd/mm/yyyy` và trả về số ngày bạn đã sống.
*/

function calculateAge(birthday) {
	let [day, month, year] = birthday.split("/");
	let today = new Date();
	let birth = new Date(year, month - 1, day);
	let diff = today - birth;
	return Math.floor(diff / (1000 * 60 * 60 * 24));
}

console.log(calculateAge("01/01/2000"));
console.log(calculateAge("27/11/1992"));
console.log(calculateAge("01/10/2024"));
