// fetch("https://dummyjson.com/products")
// 	.then((response) => response.json())
// 	.then((data) => console.log(data));

/**HyperText Transfer Protocol */

/**
 * HTTP Request Method là những phương thức HTTP:
 * GET: Lấy dữ liệu.
 * POST: Thêm/tạo mới dữ liệu.
 * PUT/PATCH: Cập nhật dữ liệu.
 * DELETE: Xoá/gỡ bỏ dữ liệu.
 */

/**
 * GET ALL: https://dummyjson.com/products/
 * GET DETAIL: https://dummyjson.com/products/:course - params.
 * POST: https://dummyjson.com/products/add
    * body: {
        "title": "Dell vostro ABC",
        "description": "Laptop hien dai den tu dell",
        "category": "tech",
        "stock": 100,
        "brand":"dell"
    }
 */

/**
 * HTTP Response status code
 * Informational responses (100 – 199)
  Successful responses (200 – 299)
  Redirection messages (300 – 399)
  Client error responses (400 – 499)
  Server error responses (500 – 599)

https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
*/

/**
 * NodeJS là một cross-flatform để thực hiện JS runtime
 *
 * Cài đặt và kiểm tra: https://nodejs.org/en
 *
 * npm = node package manager (công cụ quản lý gói)
 *
 * npm -v
 *
 * node -v
 */

/** Kiến thức terminal
 *  cd = change directory: Thay đổi vị trí của con trỏ nhập lệnh.
 * cd ..: di chuyển ra ngoài 1 cấp thư mục
 * cd ./directory_name: di chuyển vào thư mục có tên là directory_name.
 *
 */

/**
 * Hướng dẫn cài đặt json-server.
 * Cài đặt json-server: npm i json-server@01.17.0
 * Khởi động server: npx json-server db.json
 */

fetch("http://localhost:3000/todos", {
	method: "GET",
})
	.then((responses) => responses.json())
	.then((data) => {
		console.log(data);
		// Đưa dữ liệu todos ra ngoài màn hình
	});

fetch("http://localhost:3000/todos", {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
	},
	body: JSON.stringify({
		title: "Học về HTTP",
		description: "HTTP response status code, HTTP request method",
		status: false,
	}),
})
	.then((responses) => responses.json())
	.then((data) => {
		console.log(data);
	});
