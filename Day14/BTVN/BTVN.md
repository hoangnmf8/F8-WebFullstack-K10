## Xây dựng ứng dụng Todo list với dữ liệu từ json-server.

**Cho trước dữ liệu JSON:**

```json
{
	"todos": [
		{
			"id": 1,
			"title": "Todo 1",
			"description": "Description 1",
			"status": false
		},
		{
			"id": 2,
			"title": "Todo 2",
			"description": "Description 2",
			"status": true
		},
		{
			"id": 3,
			"title": "Todo 3",
			"description": "Description 3",
			"status": false
		},
		{
			"id": 4,
			"title": "Todo 4",
			"description": "Description 4",
			"status": false
		}
	]
}
```

**Yêu cầu:**

- Cài đặt, cấu hình và khởi chạy `json-server` với dữ liệu trên.

- Xây dựng ứng dụng todo list với các chức năng:
  - Hiển thị danh sách todos.
  - Thêm mới todo.
  - Xây dựng tính năng lọc todos theo trạng thái (Gợi ý: sử dụng thẻ `select-option` hoặc `radio`).
  - Xây dựng tính năng tìm kiếm theo tên todo (Gợi ý: sử dụng `oninput` hoặc `onchange`).
