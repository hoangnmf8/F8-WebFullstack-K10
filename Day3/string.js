const username1 = "Nguyen Van A";
const username2 = `Nguyen Van A`;
let username3 = new String("Nguyen Van A");
console.log(username1 == username3);
console.log(username1 === username3);

const helloUser = `Xin chào bạn ${username1}`;

let myString = "Hello, World!";
myString.length; // 13
myString.charAt(0); // "H"
myString.indexOf("World"); // 7
myString.lastIndexOf("o"); // 8
myString.includes("World"); // true
myString.substring(0, 5); // "Hello"
myString.slice(0, 5); // "Hello"
myString.search("World"); // 7
myString.replace("World", "Javascript"); // "Hello, Javascript!"
myString.toUpperCase(); // "HELLO, WORLD!"
myString.toLowerCase(); // "hello, world!"
myString.trim(); // "Hello, World!"
myString.split(","); // ["Hello", " World!"]

userEmail = "hoangnm@fullstack.edu.vn";

// Tạo hàm nhập vào email bất kỳ, lấy ra account (phần thân email) theo email.
// hoangnm

function showAccount(email) {
	// Cach 1:
	// let account = email.slice(0, email.indexOf("@"))
	let account = email.split("@")[0];
	console.log(account);
}

showAccount("hoangnm@gmail.com");

console.log(100 + 200);

/**
 * Tạo hàm kiểm tra mật khẩu mạnh
 * 1. Dài ít nhất 8 ký tự, loại trừ khoảng trắng thừa hai bên của password.
 * 2. Bao gồm ít nhất 1 ký tự trong khoảng /A-Z/
 * 3. Bao gồm ít nhất 1 ký tự trong khoảng /a-z/
 * 4. Bao gồm ít nhất 1 ký tự trong khoảng /0-9/
 * Gợi ý: dùng phương thức search.
 */

/** Bước 1: Phân tích yêu cầu: Đầu vào là gì? Đầu ra là gì?
 *  Ghi ra từng bước thực hiện.
 */

function checkPass(password) {
	let pass = password.trim();
	if (pass.length < 8) {
		console.log("password cần có ít nhất 8 ký tự!");
		return false;
	}

	if (pass.search(/[A-Z]/) === -1) {
		console.log("password cần có ít nhất một ký tự viết hoa");
		return false;
	}

	if (pass.search(/[a-z]/) === -1) {
		console.log("password cần có ít nhất một ký tự viết thường");
		return false;
	}

	if (pass.search(/[0-9]/) === -1) {
		console.log("password cần có ít nhất một chữ số");
		return false;
	}
}

checkPass("1234567000Aa0");
checkPass("qwertyuiop");
checkPass("asssdfghjkl");
