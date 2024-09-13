// for (let i = 0; i < 10; i += 1) {
// 	console.log(i);
// }

// Bước 1: Khởi tạo biến i = 0.

// Bước 2: Kiểm tra điều kiện.
// Bước 3: Thực hiện khối lệnh.
// Bước 4: Tăng lên 2 đơn vị cho i.
// Bước 5: Quay lại bước 1.

// let i = 0;
// for (;;) {
// 	if (i < 10) {
// 		console.log(i);
// 	}
// 	i += 1;
// }
// let j = 0;
// while (j < 100) {
// 	console.log(j);
// 	// biến đếm có thể bị tác động bởi code trong vòng lặp,
// 	j++;
// }
// let n = prompt("Nhập n nguyên dương?");
// let index = 0;
// In ra số chẵn từ 0 đến nhỏ hơn n
// while (index < n) {
// 	//
// 	if (index % 2 === 0) {
// 		console.log(index);
// 	}
// 	index += 2;
// }

// Viết hàm đưa vào số nguyên dương n, in ra thông báo số đó có chia hết cho 3 không?

// (Không được dùng phương thức của String hoặc Array)

// function div3(n) {
// 	let sum = 0;
// 	let subNumber = n;
// 	while (subNumber > 0) {
// 		sum += subNumber % 10;
// 		subNumber = Math.floor(subNumber / 10);
// 		console.log(subNumber);
// 	}
// 	if (sum % 3 === 0) {
// 		console.log(`${n} là số chia hết cho 3`);
// 	} else {
// 		console.log(`${n} là số không chia hết cho 3`);
// 	}
// }
// div3(prompt("Nhập số nguyên dương n?"));

// Bước 1: tạo 1 biến tạm sum = 0
// Bước 2: Tạo vòng lặp với điều kiện n>0, (while).
// Bước 3: trong vòng lặp.
// Tính toán để thay đổi sum.
// Tính toán để trả ra n mới.
// Bước 4: Ghi bước nhảy.

let n = prompt("Nhap n?");
let i = 0;
do {
	// công việc cần thực hiện in ra số chẵn.
	if (i % 2 === 0) {
		console.log(i);
	}
	i++;
} while (i < n);

for (let i = 0; i <= 10; i++) {
	for (let j = 0; j <= 10; j++) {
		console.log(`${i} * ${j} = ${i * j}`);
	}
}
