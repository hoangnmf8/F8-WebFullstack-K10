// let myPromise = new Promise(function (resolve, reject) {
// 	setTimeout(() => {
// 		// const data = [
// 		// 	{ id: 1, title: "iphone 16", price: 200 },
// 		// 	{ id: 2, title: "iphone 15", price: 200 },
// 		// ];
// 		resolve("Task A Done");
// 		reject("task A failed");
// 	}, 3000);
// });

function taskA() {
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			console.log("task A");
			resolve("task A done!");
		}, 3000);
	});
}

// console.log(myPromise);

function taskB() {
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			resolve("Task B done!");
		}, 2000);
	});
}

// myPromise
// 	.then((result) => {
// 		console.log("Fulfilled");
// 		console.log(result);
// 		return taskB();
// 	})
// 	.then((result) => {
// 		console.log(result);
// 	})
// 	.catch((err) => {
// 		console.log("Rejected");
// 		console.log(err);
// 	});

function taskC() {
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			resolve("task C done!");
		}, 1000);
	});
}

console.time("promise chaining");

taskA()
	.then((result) => {
		console.log("Fulfilled");
		console.log(result);
		return taskB();
	})
	.then((result) => {
		console.log(result);
		return taskC();
	})
	.then((result) => {
		console.log(result);
		console.timeEnd("promise chaining");
	})
	.catch((err) => {
		console.log("Rejected");
		console.log(err);
	});

/**
 * Promise là một đối tượng đặc biệt.
 * Khai báo promise dùng từ khoá `new Promise` truyền vào 1 hàm.
 * Promise có 3 trạng thái (state): Pending, fullilled, rejected.
 * Promise có 3 phương thức: then (thực hiện logic khi promise fullilled), catch (thực hiện logic khi promise rejected) và finally (thực hiện sau cùng và kết thúc công việc).
 */

/**
 * Chaining Promise:
 * Kết quả trả về từ hàm trong `then` phía trước là tham số truyền vào cho hàm trong `then` phía sau.
 * Những việc cần thời gian được mô tả bằng promise -> khi một lời hứa được thực hiện thành công, nó gọi tiếp lời hứa tiếp theo -> promise chaining.
 */

fetch("https://dummyjson.com/products")
	// .then((response) => {
	// 	const data = response.json();
	// 	return data;
	// })
	.then((res) => res.json())
	.then((data) => {
		console.log(data);
	})
	.catch((err) => {
		console.log(err);
	})
	.finally(() => {
		// Thực hiện khi kết thúc mọi việc chính và dọn dẹp, thông báo kết thúc.
		// Clean up: removeListener, clearTimeout, clearInterval, reset website và các công việc.
		console.log("finally!");
	});
