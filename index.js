import { createServer } from "node:http";
const hostname = "127.0.0.1";
const port = 3000;

const users = [
	{ id: 1, email: "hoangnm@gmail.com", address: "BG" },
	{ id: 2, email: "naruto@gmail.com", address: "HN" },
	{ id: 3, email: "chaien@gmail.com", address: "DN" },
];

const server = createServer((req, res) => {
	// request =>
	// response <=
	const url = req.url;
	const method = req.method;
	if (url === "/users" && method === "GET") {
		console.log(req.url);
		console.log(req.method);
		res.statusCode = 200;
		res.setHeader("Content-Type", "application/json");
		res.end(
			JSON.stringify({
				message: "Lay danh sach khach hang thanh cong",
				users,
			})
		);
	} else if (url === "/users" && method === "POST") {
		let body = "";
		req.on("data", (chunk) => {
			console.log(chunk);
			body += chunk.toString();
		});

		req.on("end", () => {
			const { email, address } = JSON.parse(body);
			const newUser = {
				id: users.length + 1,
				email,
				address,
			};
			users.push(newUser);

			res.writeHead(201);
			res.end(JSON.stringify(newUser));
		});
	} else if (url.match(/\/users\/\d+/) && method === "PUT") {
		// /users/2 => ["", "users", "2"]
		const id = parseInt(url.split("/")[2]);
		const userIndex = users.findIndex((u) => u.id === id);

		if (userIndex !== -1) {
			let body = "";
			req.on("data", (chunk) => {
				body += chunk.toString();
			});

			req.on("end", () => {
				const { email, address } = JSON.parse(body);
				users[userIndex] = { id, email, address };

				res.writeHead(200);
				res.end(JSON.stringify(users[userIndex]));
			});
		} else {
			res.writeHead(404);
			res.end(JSON.stringify({ message: "User not found" }));
		}
	} else if (url.startsWith("/users/") && method === "GET") {
		// url: /users/123
		// logic
		const id = parseInt(url.split("/")[2]);
		console.log(id);
		const user = users.find((item) => item.id === id);
		if (user) {
			return res.end(
				JSON.stringify({
					message: "Get user detail successfully",
					user,
				})
			);
		}

		return res.end(
			JSON.stringify({
				message: "Not found user!",
			})
		);
	} else {
		// error handling
		console.log("Router not found");
		res.end("Router not found");
	}
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});

// <Buffer 7b 0a 20 20 20 20 22 65 6d 61 69 6c 22 3a 20 22 68 6f 61 6e 67 31 31 31 40 67 6d 61 69 6c 2e 63 6f 6d 22 2c 0a 20 20 20 20 22 61 64 64 72 65 73 73 22 ... 8 more bytes>
