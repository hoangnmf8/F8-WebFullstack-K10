/**
 * reduce()
 * - arr.reduce(callback, initialValue);
 * - nếu có initialValue thì callback chỉ được gọi (arr.length - 1) lần vì phần tử index = 0 được lấy làm giá trị khởi tạo.
 * - kết quả trả ra của lần lặp trước là giá trị accumulator của lần lặp sau.
 */

const arr = [1, 3, 2, 5, 8];
total = 1;
for (let i = 0; i < arr.length; i++) {
	total *= arr[i];
}

console.log(total);

const result = arr.reduce((accumulator, item, index, array) => {
	// console.table({ accumulator, item, index, array });
	return (accumulator += item);
	// return "F8";
}, 1000);
console.log(result);
