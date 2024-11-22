function taskA(callback) {
	setTimeout(() => {
		console.log("task A done");
		callback();
	}, 3000);
}

function taskB(callback) {
	setTimeout(() => {
		console.log("task B done");
		callback();
	}, 2000);
}

function taskC(callback) {
	setTimeout(() => {
		console.log("task C done");
		callback();
	}, 1000);
}

console.time("callback-timer");
taskA(() =>
	taskB(() =>
		taskC(() => {
			console.log("Đã xong hết các việc!");
			console.timeEnd("callback-timer");
		})
	)
);

// JS là single-thread >< multi-thread
// 3 Cách để giải quyết bất đồng bộ.
// 1. callback
// 2. promise
// 3. async/await

let datas = [];
fetch("http://localhost:3000/posts")
	.then((res) => res.json())
	.then((data) => {
		console.log(data);
		datas = data;
		console.log(datas);
	})
	.catch((err) => {
		console.log(err);
	})
	.finally(() => {
		console.log("Xong het");
	});

console.log(datas);
