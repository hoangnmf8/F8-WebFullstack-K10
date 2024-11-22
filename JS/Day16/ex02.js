function taskA() {
	setTimeout(() => {
		console.log("task A done");
	}, 3000);
}

function taskB() {
	setTimeout(() => {
		console.log("task B done");
	}, 2000);
}

function taskC() {
	setTimeout(() => {
		console.log("task C done");
	}, 1000);
}

Promise.all([taskA(), taskB(), taskC()])
	.then(() => {
		console.log("Done!");
	})
	.catch((err) => {
		console.log("Có việc gì đó đã xảy ra lỗi!", err);
	});

/**
 * Promise là gì và để làm gì?
 * Promise có mấy trạng thái
 * Promise có những phương thức nào, nêu ý nghĩa từng phương thức.
 * Chaining Promise là gì? Mô tả cách hoạt động
 * Promise.all thực hiện như thế nào?
 * Promise khác gì với async/await
 */
