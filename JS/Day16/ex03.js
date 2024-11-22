// function fetchAPI() {
// 	fetch("https://dummyjson.com/products", {
// 		method: "GET",
// 	})
// 		.then((res) => res.json())
// 		.then((data) => console.log(data))
// 		.catch((err) => console.log(err));
// }

const url = "http://localhost:3000";
async function getAll(path) {
	try {
		const response = await fetch(`${url}/${path}`, {
			method: "GET",
		});
		const data = await response.json();
		console.log(data);
		// throw new Error("Error!");
		// console.log("abc");
	} catch (error) {
		console.log(error);
	}
}

async function getDetailById(path, id) {
	try {
		const res = await fetch(`${url}/${path}/${id}`);
		const data = await res.json();
		console.log(data);
	} catch (error) {
		console.log(err);
	}
}

async function updateById(path, id, body) {
	try {
		const res = await fetch(`${url}/${path}/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		});
		const data = await res.json();
		console.log(data);
	} catch (error) {
		console.log(error);
	}
}

async function removeById(path, id) {}

async function create(path, body) {}

console.log(getAll("products"));
console.log(getAll("posts"));

/** async/await là cú pháp giúp viết code bất đồng bộ dễ hiểu hơn promise
 * `async` khai báo một function mà trong đó có công việc cần đồng bộ hoá.
 * `await` chờ một promise phản hồi.
 *  Trong 1 `async function` có thể có nhiều `await`.
 */
