/**
 * ## Bài 3: Viết hàm đếm ngược thời gian

Viết hàm `countDown(time)` nhận vào một tham số `time` là một số nguyên dương đại diện cho số giây cần đếm ngược. Hàm sẽ đếm ngược thời gian từ `time` về 0 và hiển thị các thời gian còn lại (tính theo giây) ở màn hình console sau mỗi giây.
 */

function countDown(time) {
	let interval = setInterval(() => {
		console.log(time);
		time--;
		if (time < 0) {
			clearInterval(interval);
		}
	}, 1);
}

const time = prompt("Enter time in seconds: ");

countDown(time);
