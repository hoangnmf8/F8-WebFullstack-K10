## Quản lý việc cần làm:

- Cho trước danh sách việc cần làm:

```javascript
const todos = [
  {
    id: 1,
    content: 'Task A',
    completed: false,
    priority: 2,
  },
  {
    id: 2,
    content: 'Task B',
    completed: true,
    priority: 1,
  },
  {
    id: 3,
    content: 'Task C',
    completed: false,
    priority: 3,
  },
  {
    id: 4,
    content: 'Task D',
    completed: false,
    priority: 3,
  },
]
```

Và nội dung HTML cơ bản:

```html
<button>Priority sort</button>
<button>Completed</button>
<button>Doing</button>
<button>Reset</button>
<table>
  <thead>
    <tr>
      <th>Task</th>
      <th>Priority</th>
      <th>Completed</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody id="todos"></tbody>
</table>
```

Tromg đó `completed` là trạng thái hoàn thành công việc, `priority` là mức độ ưu tiên của công việc.

- Hiển thị danh sách công việc trên trang web.
- Mỗi công việc sẽ có một nút `Delete` để xóa công việc đó khỏi danh sách.
- Cột `Completed` sẽ có 1 nút bấm để đánh dấu công việc đã hoàn thành hoặc chưa hoàn thành. Khi công việc đã hoàn thành,
  nút bấm sẽ có màu xanh và nội dung là `Completed`, ngược lại sẽ có màu đỏ và nội dung là `Doing`.
- Bổ sung chức năng cho các nút bấm:
  - Nút `Priority sort`: Sắp xếp danh sách công việc theo mức độ ưu tiên giảm dần (từ cao nhất xuống thấp nhất).
  - Nút `Completed`: Lọc ra danh sách công việc đã hoàn thành.
  - Nút `Doing`: Lọc ra danh sách công việc chưa hoàn thành.
  - Nút `Reset`: Sắp xếp lại danh sách công việc theo thứ tự ban đầu và loại bỏ tất cả các bộ lọc.

Video demo: https://youtu.be/1O5s2QdlHhc
